<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Игра</router-link> |
      <router-link to="/about">Таблица результатов</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body,
#app,
.container {
  height: 100%;
  margin: 0;
}

.container {
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
}
</style>
