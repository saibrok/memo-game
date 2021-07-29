<template>
  <div class="container">
    <h1>Rick and MEMOrty</h1>
    <the-timer></the-timer>

    <div class="game">
      <the-card
        v-for="(card, index) in cardList"
        :key="index"
        :card="card"
        :shirt="shirtСardImage"
        :canFlip="canFlip"
        @cardFlipped="flipCard"
      ></the-card>
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
    ...mapState(['shirtСardImage']),
  },

  methods: {
    flipCard({ id, number }) {
      console.log('id', id, 'number', number);
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
  },

  mounted() {
    const uniqueCards = this.imageList
      .map((image, index) => {
        return { isShow: true, isFlipped: false, image, number: index + 1 };
      })
      .flatMap((item) => [item, item]);
    //.sort(() => Math.random() - 0.5);

    this.cardList = uniqueCards.map((card, index) => {
      const newCard = Object.assign({}, card, { id: index });
      return newCard;
    });
  },
};
</script>

<style lang="scss" scoped>
.game {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  max-width: 100%;
  padding: 10px;
}
</style>
