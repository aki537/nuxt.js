<template>
  <div>
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
    }
  }
}
</script>