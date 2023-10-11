<template>
  <div class="form-wrap">
    <form action="" class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
      </p>
      <h2>Create Your EniBlog Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName">
          <fa-icon class="icon" :icon="['fas', 'user']" />
        </div>

        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName">
          <fa-icon class="icon" :icon="['fas', 'user']" />
        </div>

        <div class="input">
          <input type="text" placeholder="Username" v-model="username">
          <fa-icon class="icon" :icon="['fas', 'user']" />
        </div>

        <div class="input">
          <input type="text" placeholder="E-mail" v-model="email">
          <fa-icon class="icon" :icon="['fas', 'envelope']" />
        </div>

        <div class="input">
          <input type="password" placeholder="Password" v-model="password">
          <fa-icon class="icon" :icon="['fas', 'lock']" />
        </div>
        <div v-show="error" class="error">{{this.errorMsg}}</div>
      </div>
      
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import { auth } from "../firebase/firebaseinit";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

export default {
  name: "Register",

  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: ""
    }
  },

  methods: {
    async register() {
      if(
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== "" 
      ) {
        this.error = false;
        this.errorMsg = "";
        // const firebaseAuth = await firebaseApp.auth();
        // const auth = getAuth()
        const createUser = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const result = await createUser;
        // const dataBase = db.collection('users').doc(result.user.uid);
        // await dataBase.set({
        //   firstName: this.firstName,
        //   lastName: this.firstName,
        //   username: this.username,
        //   email: this.email,

        // Initialize the Firestore database
        const db = getFirestore();

        // Reference to the 'users' collection
        const usersCollection = collection(db, "users");

        // Reference to the document using the user's UID
        const userDoc = doc(usersCollection, result.user.uid);

        // Set document data
        await setDoc(userDoc, {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
        });

        this.$router.push({name:"Home"})
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields";
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>