<template>
  <div>
    <Picker :options="['frontend', 'reduxjs', 'vuejs']" :value="selectedSubreddit" @change="handleChange($event)"/>
    <p>
      <span v-if="lastUpdated">Last updated at {{ new Date(lastUpdated).toLocaleTimeString() }}</span>
      <button v-if="!isFetching" type="button" @click="handleRefreshClick()">Refresh</button>
    </p>
    <h2 v-if="isFetching && posts.length === 0">Loading...</h2>
    <h2 v-if="!isFetching && posts.length === 0">Empty.</h2>
    <div v-if="posts.length > 0" :style="{ opacity: isFetching ? 0.5 : 1 }">
      <Posts :posts="posts"/>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from '@leopiccionia/vue-redux'

  import Picker from './components/Picker.vue'
  import Posts from './components/Posts.vue'
  import { fetchPostsIfNeeded, invalidateSubreddit, selectSubreddit } from './store/actions'

  export default {
    name: 'App',
    components: {
      Picker,
      Posts
    },
    computed: {
      ...mapState(['selectedSubreddit', 'postsBySubreddit']),
      postsOnSelectedSubreddit () {
        return this.postsBySubreddit[this.selectedSubreddit]
      },
      isFetching () {
        return this.postsOnSelectedSubreddit.isFetching || false
      },
      lastUpdated () {
        return this.postsOnSelectedSubreddit.lastUpdated
      },
      posts () {
        return this.postsOnSelectedSubreddit.items || []
      }
    },
    created () {
      this.fetchPostsIfNeeded(this.selectedSubreddit)
    },
    methods: {
      ...mapActions({ fetchPostsIfNeeded, invalidateSubreddit, selectSubreddit }),
      handleChange (nextSubreddit) {
        this.selectSubreddit(nextSubreddit)
        this.fetchPostsIfNeeded(nextSubreddit)
      },
      handleRefreshClick () {
        this.invalidateSubreddit(this.selectedSubreddit)
        this.fetchPostsIfNeeded(this.selectedSubreddit)
      }
    }
  }
</script>
