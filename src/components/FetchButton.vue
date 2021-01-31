<template>
  <div>
    <button @click="getData" class="button">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'FetchButton',
  props: {
    title: {
      type: String,
      default: 'Fetch data'
    },
    getData: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  padding: 5px 30px;
  margin: 20px 0;
  border: 1px solid #d1d1d1;
  cursor: pointer;
  outline: none;
  background-color: #f1eeee;
  transition: background-color .2s ease-in-out;
  &:hover {
    background-color: lightgray;
  }
}
</style>