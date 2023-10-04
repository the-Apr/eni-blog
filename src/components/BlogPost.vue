<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div class="first-div">
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p class="content-preview" v-else>{{ post.blogHTML }}</p>
        <a class="link link-light" v-if="post.welcomeScreen" to="#">
          Login/Register<fa-icon class="arrow arrow-light" :icon="['fas', 'arrow-right']" />
        </a>
        <a class="link" v-else to="#">
          View The Post<fa-icon class="arrow" :icon="['fas', 'arrow-right']" />
        </a>
      </div>
    </div>

    <div class="blog-photo">
      <img v-if="post.welcomeScreen" :src= "require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="laptop setup">
      <img v-else :src= "require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" alt="setup">
    </div>
  </div>
</template>

<script>
export default {
  name: "blogPost",

  props: ['post']
}
</script>

<style lang="scss" scoped>
.blog-wrapper{
  @apply flex flex-col;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:nth-child(even) {
    .blog-content {
      order: 2;
    }
    .blog-photo {
      order: 1;
    }
  }

  @screen sm {
    min-height: 650px;
    max-height: 650px;
    flex-direction: row;
  }
}



.blog-content {
  @apply flex flex-col items-center justify-center order-2;
  flex: 4;

  @screen sm{
    order: 1
  }

  @screen md {
    flex: 3
  }

  .first-div{
    max-width: 375px;
    padding: 72px 24px;

    @screen md {
      padding: 0 24px;
    }

    h2{
      @apply text-3xl font-light uppercase mb-4;

      @screen md {
        font-size: 40px;
      }
    }

    p {
      @apply text-sm leading-7 font-light;

      @screen md{
        font-size: 17px;
      }
    }

    .content-preview {
      @apply text-sm max-h-6 whitespace-nowrap overflow-hidden text-ellipsis w-60
    }

    .link{
      @apply inline-flex items-center mt-8 pb-1;
      border-bottom: 1px solid transparent;
      transition: .5s ease-in all;

      &:hover {
        border-bottom-color: #303030
      }
    }

    .link-light {
      &:hover {
        border-bottom-color: #fff
      }
    }
  }
}

.blog-photo {
  order: 1;
  flex: 3;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @screen sm {
    order: 2;
  }

  @screen md {
    flex: 4;
  }

  img{
    @apply block w-full h-full object-cover
  }
}

.no-user:first-child {
  .blog-content {
    background-color: #303030;
    color: #fff;
  }
}

</style>