<template>
  <div class="home">
    <blog-post v-if="!user" :post= "welcomeScreen"/>
    <blog-post :post= "post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="md:container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <blog-card :post="post" v-for="(post, index) in sampleBlogCards" :key="index"></blog-card>
        </div>
      </div>
    </div>

    <div v-if="!user" class="updates ">
      <div class="container box">
        <h2>never miss a post. Register for your account today</h2>
        <a class="router-button" to="#">
          Register for EniBlogs <fa-icon class= "arrow arrow-light" :icon="['fas', 'arrow-right']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue';
import BlogCard from '@/components/BlogCard.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',

  components: {BlogPost, BlogCard},

  data() {
    return {
      welcomeScreen: {
        title: "Welocme,",
        blogPost: "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post",
        welcomeScreen: true,
        photo: "setup",
      },

      sampleBlogPost: [
        {
          title: "This is a Filter Title!",
          blogHTML: "This is a filter blog ppst title",
          blogCoverPhoto: "workspace"
        },
        {
          title: "This is a Filter Title2!",
          blogHTML: "This is a filter blog ppst title",
          blogCoverPhoto: "camera"
        },
      ],
    }
  },

  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style lang="scss" scoped>
  .blog-card-wrap {
    h3 {
      @apply font-normal text-xl mb-8 text-center;

      @screen md{
         @apply text-2xl font-light text-left
      }
    }
  }

  .updates{
    .box {
      @apply  flex flex-col items-center py-10;

      @screen md{
        @apply flex-row py-16
      }

      .router-button {
        @apply flex text-sm items-center;

        @screen md {
          @apply ml-auto text-base
        }
      }
      h2 {
        @apply font-light text-xl text-center  uppercase;
        max-width: 425px;
        width: 100%;

        @screen md {
          @apply leading-normal text-3xl;
          text-align: initial;
        }
      }

    }
  }
</style>
