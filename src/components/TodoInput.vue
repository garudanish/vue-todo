<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <span class="addContainer" @click="addTodo">
      <i class="fa-solid fa-plus addBtn" />
    </span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem.trim().length > 0) {
        const obj = { completed: false, item: this.newTodoItem };
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  height: 50px;
  border-radius: 5px;
  background-color: #fff;
  line-height: 50px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  display: block;
  width: 3rem;
  float: right;
  border-radius: 0 5px 5px 0;
  background: linear-gradient(to right, #6478fb, #8763fb);
}

.addBtn {
  color: #fff;
  vertical-align: middle;
}
</style>
