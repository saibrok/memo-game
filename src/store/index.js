import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    avatarList: [],
    baseNaumberOfAvalableAvatars: 671,
    baseUrlToImages: 'https://rickandmortyapi.com/api/character/avatar/',
    baseFileFormat: '.jpeg',
    shirtСardImage: 'https://rickandmortyapi.com/api/character/avatar/189.jpeg',
  },

  getters: {
    listOfImageLinks: (state) => {
      return state.avatarList
        .flatMap((item) => [item, item])
        .sort(() => Math.random() - 0.5)
        .map((item) => {
          return `${state.baseUrlToImages}${item}${state.baseFileFormat}`;
        });
    },
  },

  mutations: {
    SET_AVATAR_LIST(state, avatarList) {
      state.avatarList = avatarList;
    },
  },

  actions: {
    generateAvatarList({ commit, state }) {
      const avatarList = [];

      while (avatarList.length < 18) {
        var randomNumber =
          Math.floor(Math.random() * state.baseNaumberOfAvalableAvatars - 1) +
          1;

        // randomNumber !== 189 - это номер картинки с обложкой
        if (avatarList.indexOf(randomNumber) === -1 && randomNumber !== 189) {
          avatarList.push(randomNumber);
        }
      }

      commit(
        'SET_AVATAR_LIST',
        avatarList.sort((a, b) => a - b),
      );
    },
  },
  modules: {},
});
