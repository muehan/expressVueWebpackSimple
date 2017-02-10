<template>
    <div>
        <h3>see all the users</h3>
        <ul>
            <li v-for="user in users">{{user}}</li>
        </ul>    
    </div>
</template>

<script>
    export default {
        name: 'user',
        computed: {
            users() {
                return this.$store.getters.users
            }
        }
    }
</script>