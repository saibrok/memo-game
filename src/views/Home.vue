<template>
  <div class="container">
    <h1>Rick and MeMorty</h1>

    <div class="game">
      <div class="game__card" v-for="index in 36" :key="index"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.game {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  width: 100%;
}

.game__card {
  width: 100%;
  padding-bottom: 100%;
  border: 1px solid tomato;
}
</style>
