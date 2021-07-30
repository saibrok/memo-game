<template>
  <div class="container">
    <input v-model="testMode" type="checkbox" /> Читы

    <the-timer @gameTime="addNewEntry"></the-timer>

    <div class="game">
      <transition-group name="card" tag="div" class="cards">
        <the-card
          v-for="card in cardList"
          class="card"
          :key="card.id"
          :card="card"
          :shirt="shirtСardImage"
          :canFlip="canFlip"
          @cardFlipped="flipCard"
        ></the-card>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';
import TheCard from '../components/TheCard.vue';
import TheTimer from '../components/TheTimer.vue';

export default {
  name: 'Game',
  components: { TheCard, TheTimer },

  data() {
    return {
      firstFlippedCard: null,
      secondFlippedCard: null,
      openPairs: 0,
      canFlip: false,
      cardList: [],
      testMode: false,
      firstCardTimerId: null,
    };
  },

  computed: {
    ...mapGetters(['imageList']),
    ...mapState(['shirtСardImage', 'gameStatus']),

    numberOfPairsToAdd() {
      return this.testMode ? 8 : 1;
    },
  },

  watch: {
    gameStatus(value) {
      if (value === 'prepare') {
        this.prepareCardsToStartGame();
        this.canFlip = true;
        setTimeout(() => {
          value === 'starded';
        }, 3000);
      }

      if (value === 'stopped') {
        this.openPairs = 0;
        this.canFlip = false;
        this.cardList.map((card) => {
          card.isShow = true;
          card.isFlipped = false;
        });
      }

      if (value === 'end') {
        this.openPairs = 0;
        this.cardList.map((card) => {
          card.isShow = true;
          card.isFlipped = true;
        });
      }
    },
  },

  methods: {
    ...mapActions(['setGameStatus', 'generateRandomNumberList', 'addNewEntry']),

    flipCard({ id, number }) {
      const card = this.findCardbyId(id);
      card.isFlipped = !card.isFlipped;

      if (!this.firstFlippedCard) {
        this.firstFlippedCard = number;
        this.firstCardTimerId = setTimeout(() => {
          this.resetCardByNumber(this.firstFlippedCard);
          this.resetCardByNumber(this.secondFlippedCard);
          this.resetFlippedCard();
        }, 5000);
      } else {
        clearTimeout(this.firstCardTimerId);
        this.secondFlippedCard = number;
        this.canFlip = false;
      }

      setTimeout(() => {
        if (this.secondFlippedCard) {
          if (this.firstFlippedCard === this.secondFlippedCard) {
            this.hideCardsByNumber(this.secondFlippedCard);
            this.openPairs += this.numberOfPairsToAdd;
            if (this.openPairs >= 16) {
              this.setGameStatus('end');
            }
          } else {
            this.resetCardByNumber(this.firstFlippedCard);
            this.resetCardByNumber(this.secondFlippedCard);
          }

          this.resetFlippedCard();
          this.canFlip = true;
        }
      }, 1000);
    },

    findCardbyId(id) {
      return this.cardList.find((card) => card.id === id);
    },

    hideCardsByNumber(number) {
      const cards = this.cardList.filter((card) => card.number === number);
      cards.map((card) => {
        card.isShow = false;
      });
    },

    resetCardByNumber(number) {
      const cards = this.cardList.filter((card) => card.number === number);
      cards.map((card) => {
        card.isFlipped = false;
      });
    },

    resetFlippedCard() {
      this.firstFlippedCard = null;
      this.secondFlippedCard = null;
    },

    async prepareCardsToStartGame() {
      this.generateRandomNumberList();
      this.generateCards();

      if (!this.testMode) {
        setTimeout(() => {
          this.cardList.sort(() => Math.random() - 0.5);
        }, 1000);
      }

      setTimeout(() => {
        this.cardList.map((card) => {
          card.isFlipped = true;
        });
      }, 0);

      await setTimeout(() => {
        const imgLoadArr = this.cardList.map((card, index) => {
          let img = document.createElement('img');
          img.src = card.image;
          img.onload = function () {
            imgLoadArr[index] = true;
          };
        });

        const intervalId = setInterval(() => {
          if (imgLoadArr.every((img) => img === true)) {
            this.cardList.map((card) => {
              card.isFlipped = false;
            });
            this.setGameStatus('started');
            clearInterval(intervalId);
          }
          console.log(imgLoadArr);
          console.log(intervalId);
        }, 1000);
      }, 3000);
    },

    generateCards() {
      const uniqueCards = this.imageList
        .map((image, index) => {
          return { isShow: true, isFlipped: false, image, number: index + 1 };
        })
        .flatMap((item) => [item, item]);

      this.cardList = uniqueCards.map((card, index) => {
        const newCard = Object.assign({}, card, { id: index });
        return newCard;
      });
    },
  },

  created() {
    this.generateRandomNumberList();
    this.generateCards();
  },

  mounted() {
    this.setGameStatus('stopped');
    this.generateCards();
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  max-width: 100%;
  padding: 10px;
}

.card-move {
  transition: transform 0.5s;
}
</style>
