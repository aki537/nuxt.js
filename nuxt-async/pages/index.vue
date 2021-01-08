<template>
  <div class="container">
    <div>
      {{ users[0].id }}, {{ users[0].name }}
    </div>
  </div>
</template>

<script>
const axios = require('axios');
let url = 'https://jsonplaceholder.typicode.com/users'

export default {
  asyncData({ params }) {
    return axios.get(url)
      .then((res) => {
        return { users: res.data }
      })
  }
}
</script>

<style>

</style>
