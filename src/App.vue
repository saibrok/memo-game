<template>
  <div id="app">
    <nav id="nav" class="nav">
      <router-link class="nav-link" to="/"> Игра </router-link>
      <router-link class="nav-link" to="/table"> Таблица результатов </router-link>
    </nav>

    <h1 class="title">Rick and MEMOrty</h1>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['setScoreTable']),
  },

  created() {
    let scoreTable = null;

    try {
      scoreTable = JSON.parse(localStorage.getItem('scoreTable'));
    } catch {
      scoreTable = null;
    }

    if (scoreTable) {
      this.setScoreTable(scoreTable);
    }
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

html,
body,
p,
#app,
.container {
  margin: 0;
}

.container {
  max-width: 100%;
  width: 1000px;
  padding: 0 40px;
  margin: 0 auto;
}

.nav {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.nav-link {
  &:not(:last-child) {
    margin-right: 2rem;
  }
}

.title {
  text-align: center;
  font-size: 2rem;
}
</style>
