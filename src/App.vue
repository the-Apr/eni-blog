<template>
  <div class="">
    <loading v-if="loading" />
    <div class="app">
      <navigation v-if="!hideNav"/>
      <router-view/>
      <the-footer v-if="!hideNav"/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import TheFooter from '@/components/Footer.vue'
import Loading from '@/components/Loading.vue'
import { auth } from "./firebase/firebaseinit";
import { onAuthStateChanged } from 'firebase/auth';



export default {
  name: "app",
  components: { 
    Navigation,
    TheFooter,
    Loading
  },

  data () {
    return {
      hideNav: null,
      loading: null,
    }
  },

  created (){
    this.checkRoute();
    onAuthStateChanged(auth, async (user) =>{
      this.loading = true;
      await this.$store.commit("updateUser", user);
      
      this.loading = false;
      if(user){
        // this.loading = true;
        await this.$store.dispatch("getCurrentUser", user);
        this.loading = false;
        
      }
    })
  },

  mounted() {
    
  },

  watch: {
    $route() {
      this.checkRoute();
    },
  },

  methods: {
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register" ||
        this.$route.name === "ForgotPassword" 
      ) {
        this.hideNav = true;
        return;
      }
      this.hideNav = false;
    }
  }

}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  @apply ml-2 w-3;
  path {
    fill: #000;
  }
}

.arrow-light {
  path {
    fill: #fff;
  }
}

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }
}

.button-ghost {
  color: #000;
  padding: 0;
  border-radius: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  @media (min-width: 700px) {
    margin-top: 0;
    margin-left: auto;
  }

  i {
    margin-left: 8px;
  }
}

.button-light {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.button-inactive {
  pointer-events: none !important;
  cursor: none !important;
  background-color: rgba(128, 128, 128, 0.5) !important;
}

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}

.blog-card-wrap {
  @apply relative py-12 px-4;
  background-color: #f1f1f1;

  @media(min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    @apply grid gap-8 grid-cols-1;

    @screen xs {
      @apply grid-cols-2
    }
    @screen lg {
      @apply grid-cols-3
    }
    @screen xl {
      @apply grid-cols-4
    }
  }
}
</style>
