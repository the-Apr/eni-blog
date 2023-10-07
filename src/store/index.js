import { createStore } from 'vuex'

export default createStore({
  state: {
    sampleBlogCards: [
      { blogTitle: "Blog Card #1", blogCoverPhoto: "camera", blogDate: "May 1, 2021" },
      { blogTitle: "Blog Card #2", blogCoverPhoto: "setup", blogDate: "May 7, 2021" },
      { blogTitle: "Blog Card #3", blogCoverPhoto: "workspace", blogDate: "May 4, 2021" },
      { blogTitle: "Blog Card #4", blogCoverPhoto: "camera", blogDate: "May 4, 2023" },
    ],
    editPost: null
  },

  getters: {
  },

  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost)
    }
  },

  actions: {
  },

  modules: {
  }
})
