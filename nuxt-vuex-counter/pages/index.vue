<template>
  <div class="container">
    <div>
      <h1>Counter App</h1>
      <p style="display:inline">counter:{{ $store.state.counter.count }}</p>
      <button v-on:click="$store.commit('counter/countUp')">+1</button>
      <button>reset</button>
      <hr>
    </div>
    <div>
      <h1>Counter App</h1>
      <p style="display:inline">counter:{{ $store.state.counter.count }}</p>
      <button v-on:click="$store.commit('counter/countUp')">+1</button>
      <button>reset</button>
      <hr>
    </div>
    <div>
      <h1>Counter App</h1>
      <p style="display:inline">counter:{{ $store.state.counter.count }}</p>
      <button v-on:click="$store.commit('counter/countUp')">+1</button>
      <button>reset</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
