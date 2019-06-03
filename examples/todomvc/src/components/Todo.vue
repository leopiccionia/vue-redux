<template>
  <li :style="{'text-decoration': completed ? 'line-through' : 'none' }" @click="$emit('click')">
    {{ text }}
  </li>
</template>

<script>
  export default {
    name: 'Todo',
    props: {
      completed: { type: Boolean, required: true },
      text: { type: String, required: true }
    }
  }
</script>
