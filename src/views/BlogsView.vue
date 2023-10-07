<template>
  <div class="blog-card-wrap">
    <div class="blog-cards md:container">
      <div class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost">
      </div>
      <blog-card :post="post" v-for="(post, index) in sampleBlogCards" :key="index"></blog-card>
    </div>
  </div>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue'

export default {
  name: "blogsView",
  components: {BlogCard},
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload);
      }
    }
  },
  beforeDestroy() {
    this.$store.commit("toggleEditPost", false)
  }
}
</script>

<style lang="scss" scoped>

.blog-cards {
  position: relative;

  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -40px;
    right: 5px;

    @screen md{
      top: -40px;
      right: 30px;
    }

    span {
      margin-right: 16px;
      font-size: 14px;

      @screen md{
        font-size: 16px
      }
    }

    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 60px;
      height: 25px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

      @screen md{
        height: 30px;
        width: 80px;
      }
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

      @screen md{
        height: 30px;
        width: 30px;
      }
    }

    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 35px;

      @screen md{
        left: 52px;
      }
    }
  }
}

</style>