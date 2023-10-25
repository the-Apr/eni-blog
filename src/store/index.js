import { createStore } from 'vuex';
import { auth, db } from "../firebase/firebaseinit";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

export default createStore({
  state: {
    sampleBlogCards: [
      { blogTitle: "Blog Card #1", blogCoverPhoto: "camera", blogDate: "May 1, 2021" },
      { blogTitle: "Blog Card #2", blogCoverPhoto: "setup", blogDate: "May 7, 2021" },
      { blogTitle: "Blog Card #3", blogCoverPhoto: "workspace", blogDate: "May 4, 2021" },
      { blogTitle: "Blog Card #4", blogCoverPhoto: "camera", blogDate: "May 4, 2023" },
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
  },

  getters: {
  },

  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost)
    },
    updateUser(state, payload) {
      state.user = payload
    },

    setProfileInfo(state, payload){
      state.profileId = payload.id;
      state.profileEmail = payload.email;
      state.profileFirstName = payload.firstName;
      state.profileLastName = payload.lastName;
      state.profileUserName = payload.username;
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },

    changeFirstName(state, payload) {
      state.profileFirstName = payload
    },
    changeLastName(state, payload) {
      state.profileLastName = payload
    },
    changeUserName(state, payload) {
      state.profileUserName = payload
    },
    changeEmail(state, payload) {
      state.profileEmail = payload
    },
  },

  actions: {
    async getCurrentUser({commit}, user) {

      const usersCollection = collection(db, "users");

      const userDoc = doc(usersCollection, user.uid);
      const dbResults= await getDoc(userDoc);
      commit("setProfileInfo", dbResults.data());
      commit("setProfileInitials");
    },

    async updateUserSettings({commit, state}) {
      const usersDoc =  collection(db, 'users');
      const database =  await doc(usersDoc, state.profileId);
      await updateDoc(database, {
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName: state.profileUserName,
      });
      commit("setProfileInitials");
    }
  },

  modules: {
  }
})
