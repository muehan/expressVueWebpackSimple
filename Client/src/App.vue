<template>
  <div id="app">
      <h1>example</h1>
      <user />
  </div>
</template>

<script>
    import User from './Components/User.vue';

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            User
        },
        created() {
            this.$store.dispatch('addUsers');
        },
    }
</script>

<style>

</style>