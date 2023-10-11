<template>
<header>
  <nav class="md:container">
    <div class="branding">
      <router-link class="link" :to="{name: 'Home'}">EniBlogs</router-link>
    </div>
    <div class="nav-links">
      <ul v-show="!mobile">
        <router-link class="link" :to="{name: 'Home'}">Home</router-link>
        <router-link class="link" :to="{name: 'BlogsView'}">Blogs</router-link>
        <router-link class="link" :to="{name: ''}">Create Post</router-link>
        <router-link class="link" :to="{name: 'Login'}">Login/Register</router-link>
      </ul>
    </div>
  </nav>

  <fa-icon 
    :icon="['fas', 'bars']" 
    class="menu-icon" 
    @click="toggleNav" 
    v-show="mobile"
  />
  <transition name="mobile-nav" >
    <ul v-show="mobileNav" class="mobile-nav">
        <router-link class="link" :to="{name: 'Home'}">Home</router-link>
        <router-link class="link" :to="{name: 'BlogsView'}">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" :to="{name: 'Login'}">Login/Register</router-link>
      </ul>
  </transition>
</header> 
</template>

<script>
export default {
  name: 'navigation',

  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },

  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },

  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleNav() {
      this.mobileNav = !this.mobileNav
    }
  }

}
</script>

<style lang="scss" scoped>
header {
  @apply bg-white py-0 px-6;
  z-index: 99;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) ;
}

.link{
  @apply font-medium py-0 px-2;
  transition: .3s color ease-in;

  &:hover {
    color: #1eb8b8;
  }
}

nav {
  @apply flex py-3

}

@screen md{
  nav {
    @apply py-6
  }
}

.branding {
  @apply flex items-center;
}
.header {
  @apply font-semibold text-lg text-black
}

.nav-links {
  @apply relative flex items-center justify-end flex-1
}

ul {
  // margin-right: 32px;

  .link {
    margin-right: 32px
  }
  .link:last-child {
    margin-right: 0;
  }
}

.menu-icon {
  @apply cursor-pointer absolute top-4 right-6 h-6 w-auto
}

.mobile-nav {
  @apply p-5 w-4/6 flex flex-col fixed h-full top-0 left-0;
  max-width: 250px;
  background-color: #303030;

  .link {
    @apply py-4 text-white
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter-from {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
