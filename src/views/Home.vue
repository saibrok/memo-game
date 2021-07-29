<template>
  <div class="container">
    <h1>Rick and MEMOrty</h1>
    <the-timer></the-timer>

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
import { mapGetters, mapState } from 'vuex';
import TheCard from '../components/TheCard.vue';
import TheTimer from '../components/TheTimer.vue';

export default {
  name: 'Game',
  components: { TheCard, TheTimer },

  data() {
    return {
      firstFlippedCard: null,
      secondFlippedCard: null,
      canFlip: true,
      cardList: [],
    };
  },

  computed: {
    ...mapGetters(['imageList']),
    ...mapState(['shirtСardImage', 'gameIsStarted']),
  },

  watch: {
    gameIsStarted(value) {
      if (value) {
        this.prepareCardsToStartGame();
      }
    },
  },

  methods: {
    flipCard({ id, number }) {
      const card = this.findCardbyId(id);
      card.isFlipped = !card.isFlipped;

      if (!this.firstFlippedCard) {
        this.firstFlippedCard = number;
      } else {
        this.secondFlippedCard = number;
        this.canFlip = false;
      }

      setTimeout(() => {
        if (this.secondFlippedCard) {
          if (this.firstFlippedCard === this.secondFlippedCard) {
            this.hideCardsByNumber(this.secondFlippedCard);
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

    prepareCardsToStartGame() {
      this.cardList.map((card) => {
        card.isFlipped = true;
      });

      setTimeout(() => {
        this.cardList.sort(() => Math.random() - 0.5);
      }, 1000);

      setTimeout(() => {
        this.cardList.map((card) => {
          card.isFlipped = false;
        });
      }, 2000);
    },
  },

  mounted() {
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
