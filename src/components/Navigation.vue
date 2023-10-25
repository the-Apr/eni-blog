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
        <router-link v-show="!user" class="link" :to="{name: 'Login'}">Login/Register</router-link>
      </ul>

      <div v-if="user" @click="toggleProfileMenu" class="profile" ref="profile">
        <span>{{ this.$store.state.profileInitials }}</span>
        <div class="profile-menu" v-show="profileMenu">
          <div class="info">
            <p class="initials"> {{ this.$store.state.profileInitials}}</p>
            <div class="right">
              <p>{{this.$store.state.profileFirstName}} {{this.$store.state.profileLastName}}</p>
              <p>{{this.$store.state.profileUserName}}</p>
              <p>{{this.$store.state.profileEmail}}</p>
            </div>
          </div>

          <div class="options">
            <div class="option">
              <router-link class="option" to="Profile">
                  <fa-icon class="icon" :icon="['fas', 'user']" />
                  <p>Profile</p>
              </router-link>
            </div>
            <div class="option">
              <router-link class="option" to="Admin">
                  <fa-icon class="icon" :icon="['fas', 'user-secret']" />
                  <p>Admin</p>
              </router-link>
            </div>
            <div @click="signOut" class="option">
                <fa-icon class="icon" :icon="['fas', 'arrow-right-from-bracket']" />
                <p>Sign Out</p>
            </div>
          </div>
        </div>
      </div>
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
        <router-link v-show="!user" class="link" :to="{name: 'Login'}">Login/Register</router-link>
      </ul>
  </transition>
</header> 
</template>

<script>
import { auth } from '@/firebase/firebaseinit';
import { signOut } from 'firebase/auth';
export default {
  name: 'navigation',

  data() {
    return {
      profileMenu: null,
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
    },

    toggleProfileMenu(e) {
      if (e.target === this.$refs.profile){
        this.profileMenu = !this.profileMenu
      }
    },

    signOut() {
     signOut(auth)
     window.location.reload()
    }
  },

  computed : {
    user() {
      return this.$store.state.user
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
  @apply relative flex items-center justify-end flex-1;

  ul {
    .link {
      margin-right: 32px
    }
    .link:last-child {
      margin-right: 0;
    }
  }

  .profile {
    @apply relative cursor-pointer flex items-center justify-center w-10 h-10 ml-4;
    border-radius: 50%;
    color: #fff;
    background-color: #303030;

    span {
      pointer-events: none;
    }

    .profile-menu {
      @apply absolute top-14 right-0;
      width: 250px;
      background-color: #303030;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) ;

      .info{
        @apply flex items-center p-4;
        border-bottom: 1px solid #fff;

        .initials {
          @apply w-10 h-10 bg-white flex items-center justify-center; 
          color: #000;
          position: initial;
          border-radius: 50%;
        }

        .right {
          @apply flex-1 ml-6;

          p:nth-child(1){
            font-size: 14px;
          }

          p:nth-child(2),
          p:nth-child(3){
            font-size: 12px;
          }
        }
      }

      .options {
        padding: 15px;

        .option {
          @apply flex items-start mb-3;
          color: #fff;
          text-decoration: none;

          .icon {
            @apply w-4 h-auto
          }
          p{
            @apply text-sm ml-3
          }
          &:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }
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
