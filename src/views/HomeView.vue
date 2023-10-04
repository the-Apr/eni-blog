<template>
  <div class="home">
    <blog-post :post= "welcomeScreen"/>
    <blog-post :post= "post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',

  components: {BlogPost},

  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
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
      ]
    }
  }
}
</script>
