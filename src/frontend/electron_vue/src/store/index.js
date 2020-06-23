import Vue from "vue";
import Vuex from "vuex";

import { app } from "electron";

import { createPersistedState, createSharedMutations } from "vuex-electron";
import Store from "electron-store";

let store = new Store();
if (process.type !== "renderer") {
  console.log(`clear store on start`);
  store.clear();
  app.on("quit", () => {
    console.log(`clear store on quit`);
    store.clear();
  });
}

Vue.use(Vuex);

export const AppStatus = {
  start: "start",
  setup: "setup",
  synchronize: "synchronize",
  ready: "ready",
  shutdown: "shutdown"
};

export default new Vuex.Store({
  state: {
    balance: null,
    coreReady: false,
    mutations: null,
    priceInfo: null,
    receiveAddress: null,
    newRecoveryPhrase: null,
    status: AppStatus.start,
    unityVersion: null,
    walletVersion: null
  },
  mutations: {
    SET_BALANCE(state, payload) {
      state.balance = payload.balance;
    },
    SET_CORE_READY(state, payload) {
      state.coreReady = payload.coreReady;
    },
    SET_MUTATIONS(state, payload) {
      state.mutations = payload.mutations;
    },
    SET_NEW_RECOVERY_PHRASE(state, payload) {
      state.newRecoveryPhrase = payload.newRecoveryPhrase;
    },
    SET_PRICE_INFO(state, payload) {
      state.priceInfo = payload.priceInfo;
    },
    SET_RECEIVE_ADDRESS(state, payload) {
      state.receiveAddress = payload.receiveAddress;
    },
    SET_STATUS(state, payload) {
      state.status = payload.status;
    },
    SET_UNITY_VERSION(state, payload) {
      state.unityVersion = payload.version;
    },
    SET_WALLET_VERSION(state, payload) {
      state.walletVersion = payload.version;
    }
  },
  actions: {
    SET_BALANCE({ commit }, payload) {
      commit(payload);
    },
    SET_CORE_READY({ commit }, payload) {
      commit(payload);
    },
    SET_GULDEN_VERSION({ commit }, payload) {
      commit(payload);
    },
    SET_MUTATIONS({ commit }, payload) {
      commit(payload);
    },
    SET_NEW_RECOVERY_PHRASE({ commit }, payload) {
      commit(payload);
    },
    SET_PRICE_INFO({ commit }, payload) {
      commit(payload);
    },
    SET_RECEIVE_ADDRESS({ commit }, payload) {
      commit(payload);
    },
    SET_STATUS({ commit }, payload) {
      if (
        payload.status === AppStatus.ready ||
        payload.status === AppStatus.synchronize
      ) {
        commit({ type: "SET_NEW_RECOVERY_PHRASE", newRecoveryPhrase: null });
      }
      commit(payload);
    },
    SET_WALLET_EXISTS({ commit }, payload) {
      commit(payload);
    },
    SET_UNITY_VERSION({ commit }, payload) {
      commit(payload);
    },
    SET_WALLET_VERSION({ commit }, payload) {
      commit(payload);
    }
  },
  modules: {},
  plugins: [createPersistedState({ storage: store }), createSharedMutations()]
});
