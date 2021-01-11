<template>
  <div>

  </div>
</template>

<script>
export default {
  // createのタイミングでinitが呼び込まれfirebaseの初期化が行われる
  created: function() {
    this.$store.dispatch('todos/init')
  }
}
</script>