<template>
  <div>
    <!-- {{ todos }} -->
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <!-- {{ todo }} -->
        <!-- {{ todo.done }}  -->
        <!-- todo.createdに値があるときのみ描画される -->
        <span v-if="todo.created">
          <input type="checkbox"
          v-bind:checked="todo.done"
          @change="toggle(todo)">
          <!-- trueだったらdoneclassがついてfalseだったらつかない -->
          <span v-bind:class="{ done: todo.done }">
            {{ todo.name }} {{ todo.created.toDate() | dateFilter }}
          </span>
          <button v-on:click="remove(todo.id)">X</button>
        </span>
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
import moment from 'moment'

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
    },
    toggle(todo) {
      this.$store.dispatch('todos/toggle', todo)
    }
  },
  // 後でtodosの中身をかこうして取得したいのでcomputedでtodosを取得する
  computed: {
    todos() {
      return this.$store.state.todos.todos
    }
  },
  filters: {
    dateFilter(date) {
      return moment(date).format('YYYY/MM/DD HH:mm:ss')
    }
  }
}
</script>

<style>
li > span > span.done {
  text-decoration: line-through;
}
</style>