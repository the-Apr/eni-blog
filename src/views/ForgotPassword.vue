<template>
  <div class="reset-password">
    <modal 
      v-if="modalActive" 
      v-on:close-modal="closeModal"  
      :modalMessage= "modalMessage"
    />
    <loading v-if="loading" />
    <div class="form-wrap">
      <form action="" class="reset">
        <p class="login-register"> Back to
          <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="E-mail" v-model="email">
            <fa-icon class="icon" :icon="['fas', 'envelope']" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue"
import Loading from "../components/Loading.vue"
import { auth } from "../firebase/firebaseinit";
import { sendPasswordResetEmail } from 'firebase/auth'

export default {
  name: "ForgotPassword",
  components: {
    Modal,
    Loading
  },

  data() {
    return {
      email: null,
      modalActive: null,
      modalMessage: "",
      loading: null,
    }
  },

  methods: {
    resetPassword() {
      this.loading = true;
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.modalMessage = "You will receive an email shortly";
          this.loading = false;
          this.modalActive = true;
        }). catch(err => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        })
    },

    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = ""
    }
  }
}
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 10px;

      }
      p {
        text-align: center;
        margin-bottom: 32px;
        font-size: 15px;
      }
    }
  }
}

</style>