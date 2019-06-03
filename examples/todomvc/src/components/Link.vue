<template>
  <span v-if="active">
    <slot/>
  </span>
  <a v-else href="#" @click.prevent="setVisibilityFilter(filter)">
    <slot/>
  </a>
</template>

<script>
  import { mapActions } from '@leopiccionia/vue-redux'

  import { setVisibilityFilter } from '../store/actions'

  export default {
    name: 'Link',
    props: {
      filter: { type: String, required: true }
    },
    computed: {
      active () {
        return this.filter === this.$state.visibilityFilter
      }
    },
    methods: mapActions({ setVisibilityFilter })
  }
</script>
