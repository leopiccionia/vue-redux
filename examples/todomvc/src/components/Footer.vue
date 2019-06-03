<template>
  <p>
    Show:
    <FilterLink :filter="$options.VisibilityFilters.SHOW_ALL">All</FilterLink>,
    <FilterLink :filter="$options.VisibilityFilters.SHOW_ACTIVE">Active</FilterLink>,
    <FilterLink :filter="$options.VisibilityFilters.SHOW_COMPLETED">Completed</FilterLink>
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
    VisibilityFilters
  }
</script>
