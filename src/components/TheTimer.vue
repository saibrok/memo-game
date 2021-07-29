<template>
  <div class="timer">
    <button v-if="!gameIsStarted" type="button" @click="startGame">
      СТАРТ
    </button>
    <div class="timer" v-else>
      {{ numberOfMinutes }} :
      {{ numberOfSeconds > 9 ? numberOfSeconds : `0${numberOfSeconds}` }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      numberOfMinutes: 0,
      numberOfSeconds: 0,
      timer: null,
    };
  },
  computed: {
    ...mapState(['gameIsStarted']),
  },
  methods: {
    ...mapActions(['setGameStatus']),

    startGame() {
      this.setGameStatus(true);

      setTimeout(() => {
        this.timer = setInterval(() => {
          if (this.numberOfSeconds === 59) {
            this.numberOfSeconds = 0;
            this.numberOfMinutes += 1;
          } else {
            this.numberOfSeconds += 1;
          }
        }, 1000);
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
