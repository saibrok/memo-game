<template>
  <div class="game__card">
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
};
</script>

<style lang="scss" scoped>
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
