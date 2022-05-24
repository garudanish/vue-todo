<template>
  <ul>
    <li
      v-for="(todoItem, index) in todoItems"
      v-bind:key="todoItem.item"
      class="shadow"
    >
      <i
        v-on:click="toggleComplete(todoItem, index)"
        class="checkBtn fas fa-check"
        v-bind:class="{ checkBtnCompleted: todoItem.completed }"
      />
      <span v-bind:class="{ textCompleted: todoItem.completed }">
        {{ todoItem.item }}
      </span>
      <span class="removeBtn" v-on:click="removeTodo(todoItem)">
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
        this.todoItems.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
  },
  methods: {
    removeTodo: function (todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function (todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
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
  cursor: pointer;
}

.checkBtn {
  margin-right: 5px;
  color: #62acde;
  line-height: 45px;
  cursor: pointer;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  color: #b3adad;
  text-decoration: line-through;
}
</style>
