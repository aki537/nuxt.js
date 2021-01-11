<template>
  <div class="container">
    <div>
      <p>{{ $store.state.message }}</p>
      <button v-on:click="$store.commit('updateMessage')">Update</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
