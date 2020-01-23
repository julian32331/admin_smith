import * as api from "@/api";
const state = {
  users: [],
  selectedUser: {}
};
// getters
const getters = {
  users: state => state.users,
  selectedUser: state => state.selectedUser
};
// mutations
const mutations = {
  setUsers: async (state, payload) => {
    var userData = await api.getUsers();
    state.users = userData.data;
    state.selectedUser = state.users[0];
  },
  setSelectedUser: (state, payload) => {
    state.selectedUser = payload.item;
  }
};
// actions
const actions = {
  setUsers: (context, payload) => {
    context.commit("setUsers", payload);
  },
  setSelectedUser: (context, payload) => {
    context.commit("setSelectedUser", payload);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
