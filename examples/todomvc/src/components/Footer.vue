<template>
  <p>
    Show:
    <FilterLink :filter="filters.SHOW_ALL">All</FilterLink>,
    <FilterLink :filter="filters.SHOW_ACTIVE">Active</FilterLink>,
    <FilterLink :filter="filters.SHOW_COMPLETED">Completed</FilterLink>
  </p>
</template>

<script>
  import FilterLink from './Link.vue'
  import { VisibilityFilters } from '../store/actions'

  export default {
    name: 'Footer',
    components: {
      FilterLink
    },
    computed: {
      filters () {
        return VisibilityFilters
      }
    }
  }
</script>
