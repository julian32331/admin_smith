import * as api from "@/api";
const state = {
  posts: [],
  selectedPost: {}
};
// getters
const getters = {
  posts: state => state.posts,
  selectedPost: state => state.selectedPost
};
// mutations
const mutations = {
  setPosts: async (state, payload) => {
    var postData = await api.getPosts();
    state.posts = postData.data;
    state.selectedPost = state.posts[0];
  },
  setSelectedPost: (state, payload) => {
    state.selectedPost = payload.item;
  }
};
// actions
const actions = {
  setPosts: (context, payload) => {
    context.commit("setPosts", payload);
  },
  setSelectedPost: (context, payload) => {
    context.commit("setSelectedPost", payload);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
