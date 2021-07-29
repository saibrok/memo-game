import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    randomNumberList: [],
    baseNaumberOfAvalableAvatars: 671,
    numberOfUniqueCard: 18,
    baseUrlToImages: 'https://rickandmortyapi.com/api/character/avatar/',
    baseFileFormat: '.jpeg',
    shirtСardImage: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    gameStatus: 'prepare',
    scoreTable: [],
    numberOfRecordsInScoreTable: 5,
  },

  getters: {
    imageList: (state) => {
      return state.randomNumberList.map((item) => {
        return `${state.baseUrlToImages}${item}${state.baseFileFormat}`;
      });
    },
  },

  mutations: {
    SET_AVATAR_LIST(state, randomNumberList) {
      state.randomNumberList = randomNumberList;
    },

    SET_GAME_STATUS(state, status) {
      state.gameStatus = status;
    },

    SET_TABLE_OF_RECORDS(state, table) {
      state.scoreTable = table;
    },

    ADD_NEW_ENTRY(state, newEntry) {
      state.scoreTable.push(newEntry);
      state.scoreTable = state.scoreTable.sort();
      if (state.scoreTable.length > state.numberOfRecordsInScoreTable) {
        state.scoreTable.length = state.numberOfRecordsInScoreTable;
      }
      localStorage.setItem(
        'scoreTable',
        JSON.stringify(state.scoreTable.sort()),
      );
    },
  },

  actions: {
    generateRandomNumberList({ commit, state }) {
      const randomNumberList = [];

      if (state.baseNaumberOfAvalableAvatars < state.numberOfUniqueCard) {
        return;
      }

      while (randomNumberList.length < 18) {
        var randomNumber =
          Math.floor(Math.random() * state.baseNaumberOfAvalableAvatars - 1) +
          2;

        // randomNumber !== 19/189/249 - у этих номеров картинки такие же как на обложке
        if (
          randomNumberList.indexOf(randomNumber) === -1 &&
          randomNumber !== 19 &&
          randomNumber !== 66 &&
          randomNumber !== 189 &&
          randomNumber !== 249
        ) {
          randomNumberList.push(randomNumber);
        }
      }

      commit(
        'SET_AVATAR_LIST',
        randomNumberList.sort((a, b) => a - b),
      );
    },

    setGameStatus({ commit }, status) {
      commit('SET_GAME_STATUS', status);
    },

    setscoreTable({ commit }, table) {
      commit('SET_TABLE_OF_RECORDS', table);
    },

    addNewEntry({ commit }, newEntry) {
      const minutes = newEntry.numberOfMinutes;
      const seconds =
        newEntry.numberOfSeconds > 9
          ? `${newEntry.numberOfSeconds}`
          : `0${newEntry.numberOfSeconds}`;
      commit('ADD_NEW_ENTRY', `${minutes}:${seconds}`);
    },
  },

  modules: {},
});
