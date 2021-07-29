<template>
  <div class="timer">
    <button
      class="timer__button"
      v-if="gameStatus === 'prepare' || gameStatus === 'stopped'"
      type="button"
      @click="startGame"
    >
      СТАРТ
    </button>
    <button
      class="timer__button"
      v-if="gameStatus === 'end'"
      type="button"
      @click="startGame"
    >
      ЕЩЕ РАЗ
    </button>
    <button
      class="timer__button"
      v-if="gameStatus === 'started'"
      type="button"
      @click="stopGame"
    >
      СТОП
    </button>
    <div class="time" v-if="gameStatus === 'started'">
      {{ numberOfMinutes }} :
      {{ numberOfSeconds > 9 ? numberOfSeconds : `0${numberOfSeconds}` }}
    </div>
    <div class="time" v-if="gameStatus === 'end'">
      Игра окончена! Ваше время:
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
    ...mapState(['gameStatus']),
  },

  watch: {
    gameStatus(value) {
      if (value === 'end') {
        clearInterval(this.timer);
        this.$emit('gameTime', {
          numberOfMinutes: this.numberOfMinutes,
          numberOfSeconds: this.numberOfSeconds,
        });
      }

      if (value === 'stopped') {
        clearInterval(this.timer);
      }
    },
  },

  methods: {
    ...mapActions(['setGameStatus']),

    startGame() {
      this.setGameStatus('started');
      this.numberOfMinutes = 0;
      this.numberOfSeconds = 0;

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

    stopGame() {
      this.setGameStatus('stopped');
      this.numberOfMinutes = 0;
      this.numberOfSeconds = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.timer {
  display: flex;
  justify-content: center;
}
.timer__button {
  position: relative;
  display: block;
  z-index: 1;
  margin: 1rem auto;
  padding: 0.55em 0.75em;
  border: 0.25rem solid royalblue;
  overflow: hidden;
  background: royalblue;
  font-size: 1.5em;
  color: #fff;
  cursor: pointer;
}
.timer__button:hover {
  color: royalblue;
}
.timer__button::after {
  position: absolute;
  z-index: -1;
  display: block;
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0.55em 0.75em;
  background: #fff;
  transform: scale(0, 0);
  transition: transform 0.3s ease;
}

.timer__button:hover::after {
  transition: transform 0.3s ease-out;
  transform: scale(1, 1);
}

.time {
  font-size: 2em;
  margin: 1rem auto;
}
</style>
