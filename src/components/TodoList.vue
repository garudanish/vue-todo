<template>
  <ul>
    <li v-bind:key="todoItem.id" v-for="todoItem in todoItems">
      {{ todoItem.content }}
    </li>
  </ul>
</template>

<script>
export default {
  data: function () {
    return {
      todoItems: [],
    };
  },
  created: function () {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push({ id: i, content: localStorage.key(i) });
      }
    }
  },
};
</script>

<style>
ul {
  padding: 0;
  margin: 0;
}
</style>
