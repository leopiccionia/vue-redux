<template>
  <span>
    <h1>{{ value }}</h1>
    <select :value="value" @change="$emit('change', $event.target.value)">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
  </span>
</template>

<script>
  export default {
    name: 'Picker',
    props: {
      options: { type: Array, required: true },
      value: { type: String, required: true }
    }
  }
</script>
