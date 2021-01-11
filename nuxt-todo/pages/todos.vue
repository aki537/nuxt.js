<template>
  <div>
    <!-- {{ todos }} -->
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <!-- {{ todo }} -->
        {{ todo.done }} {{ todo.name}} {{ todo.created}}
        <button v-on:click="remove(todo.id)">X</button>
      </li>
    </ul>
    <div class="form">
      <!-- v-on:submitでボタンが押された時にaddメソッドが呼ばれる
      .preventをつけることでAddボタンを押した時にページがリロードされないようにする -->
      <form v-on:submit.prevent="add">
        <input v-model="name">
        <button>Add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // 新規登録されるtodoのデータを一時的に格納しておくデータを用意
  data: function() {
    return {
      name: '',
      done: false
    }
  },
  // createのタイミングでinitが呼び込まれfirebaseの初期化が行われる
  created: function() {
    this.$store.dispatch('todos/init')
  },
  // addが呼ばれたらstoreのtodos/addを呼び出しfirebaseに登録（引数にnameを取る)
  methods: {
    add() {
      this.$store.dispatch('todos/add', this.name)
      this.name = ''
    },
    // removeを呼び出しfirebaseに登録してるtodosを削除する
    remove(id) {
      // このidはfirestoreのドキュメントidを取得している
      this.$store.dispatch('todos/remove', id)
    }
  },
  // 後でtodosの中身をかこうして取得したいのでcomputedでtodosを取得する
  computed: {
    todos() {
      return this.$store.state.todos.todos
    }
  }
}
</script>