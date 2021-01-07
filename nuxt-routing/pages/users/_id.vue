<template>
  <section>
    <h1>{{ message }}</h1>
    <!-- this.$route.params.idでURLに売った/users/1の1が取得できる -->
    <p>id: {{ this.$route.params.id }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: '/users/_id.vueを表示中'
    }
  }
}
</script>