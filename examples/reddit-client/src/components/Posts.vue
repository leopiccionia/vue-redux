<template>
  <ul>
    <li v-for="(post, index) in posts" :key="index">
      <a :href="`https://reddit.com${post.permalink}`" target="_blank">{{ post.title }}</a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Posts',
    props: {
      posts: { type: Array, required: true }
    }
  }
</script>
