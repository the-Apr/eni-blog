<template>
  <div class="">
    <div class="app">
      <navigation/>
      <!-- <the-footer/> -->
    <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import TheFooter from '@/components/Footer.vue'



export default {
  name: "app",
  components: { 
    Navigation,
    TheFooter,
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
</style>
