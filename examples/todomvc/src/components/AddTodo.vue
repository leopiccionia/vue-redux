<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input v-model.trim="input">
      <button type="submit">Add Todo</button>
    </form>
  </div>
</template>

<script>
  import { addTodo } from '../store/actions'

  export default {
    name: 'AddTodo',
    data () {
      return {
        input: ''
      }
    },
    methods: {
      onSubmit () {
        if (!this.input) {
          return
        }
        this.$store.dispatch(addTodo(this.input))
        this.input = ''
      }
    }
  }
</script>
