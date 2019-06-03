<template>
  <ul>
    <Todo v-for="(todo, index) in visibleTodos" :key="index" :completed="todo.completed" :text="todo.text" @click="toggleTodo(todo.text)"/>
  </ul>
</template>

<script>
  import { mapActions } from '@leopiccionia/vue-redux'

  import Todo from './Todo.vue'
  import { toggleTodo, VisibilityFilters } from '../store/actions'

  export default {
    name: 'TodoList',
    components: {
      Todo
    },
    computed: {
      visibleTodos () {
        const { todos, visibilityFilter } = this.$state
        switch (visibilityFilter) {
          case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
          case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
          case VisibilityFilters.SHOW_ALL:
          default:
            return todos
        }
      }
    },
    methods: mapActions({ toggleTodo })
  }
</script>
