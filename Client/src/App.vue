<template>
  <div id="app">
      <user />>
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
        }
    }
</script>

<style>

</style>