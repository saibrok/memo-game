<template>
  <div class="container">
    <h1>Rick and MeMorty</h1>
    <the-timer></the-timer>

    <div class="game">
      <the-card
        v-for="(imageLink, index) in listOfImageLinks"
        :key="index"
        :image="imageLink"
        :shirt="shirtСardImage"
      ></the-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import TheCard from '../components/TheCard.vue';
import TheTimer from '../components/TheTimer.vue';

export default {
  components: { TheCard, TheTimer },

  data() {
    return {
      gameIsStarted: false,
    };
  },

  computed: {
    ...mapGetters(['listOfImageLinks']),
    ...mapState(['shirtСardImage']),
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
