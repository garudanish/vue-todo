<template>
  <ul>
    <li v-bind:key="todoItem.id" v-for="todoItem in todoItems" class="shadow">
      {{ todoItem.content }}
      <span class="removeBtn" v-on:click="removeTodo">
        <i class="fas fa-trash-alt" />
      </span>
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
  methods: {
    removeTodo: function () {},
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  padding: 0 0.9rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  line-height: 50px;
  background-color: #fff;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.checkBtn {
  margin-right: 5px;
  color: #62acde;
  line-height: 45px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  color: #b3adad;
  text-decoration: line-through;
}
</style>
