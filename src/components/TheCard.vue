<template>
  <div
    class="game__card"
    @click="flipCard"
    :class="{ flip: card.isFlipped, unvisible: !card.isShow }"
  >
    <div
      class="game__card-image game__card-image_type_face"
      :style="{ backgroundImage: 'url(' + card.image + ')' }"
    ></div>
    <div
      class="game__card-image game__card-image_type_shirt"
      :style="{ backgroundImage: 'url(' + shirt + ')' }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    card: { type: Object, require: true },
    shirt: { type: String, require: true },
    canFlip: { type: Boolean, require: true },
  },

  methods: {
    flipCard() {
      if (!this.card.isFlipped && this.canFlip) {
        this.$emit('cardFlipped', {
          id: this.card.id,
          number: this.card.number,
        });
      }
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

.game__card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: 0.5s transform ease;
  backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
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

.flip {
  cursor: initial;
}

.unvisible {
  visibility: hidden;
}
</style>
