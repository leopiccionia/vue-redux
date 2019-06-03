<template>
  <div>
    <AddTodo/>
    <TodoList/>
    <Footer/>
  </div>
</template>

<script>
  import AddTodo from './components/AddTodo.vue'
  import Footer from './components/Footer.vue'
  import TodoList from './components/TodoList.vue'

  export default {
    name: 'App',
    components: {
      AddTodo,
      Footer,
      TodoList
    }
  }
</script>
