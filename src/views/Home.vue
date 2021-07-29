<template>
  <div class="container">
    <h1>Rick and MeMorty</h1>
    <button type="button" @click="startGame">СТАРТ</button>
    <div class="timer">{{ currentTime }}</div>

    <div class="game">
      <div
        class="game__card"
        v-for="(link, index) in listOfImageLinks"
        :key="index"
      >
        <img
          class="game__card-image game__card-image_type_face"
          :src="link"
          alt=""
        />
        <img
          class="game__card-image game__card-image_type_shirt"
          :src="shirtСardImage"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {
      currentTime: new Date(0).toLocaleString(),
    };
  },

  computed: {
    ...mapGetters(['listOfImageLinks']),
    ...mapState(['shirtСardImage']),
  },

  methods: {
    startGame() {
      setInterval(() => {
        console.log(this.currentTime);
        this.currentTime = new Date().toLocaleString();
      }, 1000);
    },
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

.game__card {
  position: relative;
  width: 150px;
  height: 150px;
  cursor: pointer;
  perspective: 1000px;

  &:hover .game__card-image_type_face {
    transform: rotateY(0);
  }

  &:hover .game__card-image_type_shirt {
    transform: rotateY(180deg);
  }
}

.game__card-image_type_face {
  transform: rotateY(180deg);
}

.game__card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: 0.5s all ease;
  backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
}
</style>
