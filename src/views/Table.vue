<template>
  <table class="scoreTable">
    <thead class="scoreTable__head">
      <tr class="scoreTable__row">
        <th class="scoreTable__col scoreTable__col-head">#</th>
        <th class="scoreTable__col scoreTable__col-head">Имя</th>
        <th class="scoreTable__col scoreTable__col-head">Время</th>
      </tr>
    </thead>
    <tbody class="scoreTable__body">
      <tr v-for="(row, index) in scoreTable" :key="index" class="scoreTable__row">
        <td class="scoreTable__col">{{ index + 1 }}</td>
        <td class="scoreTable__col">You</td>
        <td class="scoreTable__col">{{ row }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['scoreTable']),
  },
};
</script>

<style lang="scss" scoped>
.scoreTable {
  width: 100%;
  border: none;
  margin-bottom: 20px;
}

.scoreTable__row:nth-child(even) {
  background: #f3f3f3;
}

.scoreTable__col-head {
  font-weight: bold;
  background: #d8d8d8;
}

.scoreTable__col {
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;

  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }
}
</style>
