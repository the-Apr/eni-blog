<template>
  <div class="reset-password">
    <modal v-if="modalActive" v-on:close-modal="closeModal"/>
    <loading />
    <div class="form-wrap">
      <form action="" class="reset">
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="E-mail" v-model="email">
            <fa-icon class="icon" :icon="['fas', 'envelope']" />
          </div>
        </div>
        <button>Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue"
import Loading from "../components/Loading.vue"

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