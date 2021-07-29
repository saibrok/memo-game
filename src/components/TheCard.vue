<template>
  <div
    class="game__card"
    @click="isFliped = !isFliped"
    :class="{ flip: isFliped }"
  >
    <img class="game__card-image game__card-image_type_face" :src="image" />
    <img class="game__card-image game__card-image_type_shirt" :src="shirt" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      require: true,
    },
    shirt: {
      type: String,
      require: true,
    },
  },

  data() {
    return {
      isFliped: false,
      flipedCardCount: 0,
    };
  },

  methods: {
    flipCard() {
      this;
    },
  },
};
</script>

<style lang="scss" scoped>
.game__card {
  position: relative;
  width: 150px;
  height: 150px;
  cursor: pointer;
  perspective: 1000px;
}

.flip .game__card-image_type_face {
  transform: rotateY(0);
}

.flip .game__card-image_type_shirt {
  transform: rotateY(180deg);
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
