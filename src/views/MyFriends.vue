<template>
<div>
    <h1 v-if="Globals.user">{{Globals.user.name}} Friends Page</h1>
    <ul>
        <li v-for="friend in friends" :key="friend.id">{{friend.firstName}}</li>
    </ul>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { GetFriends } from "@/models/users.js";

GetFriends();

export default {
    data: ()=> ({
        Globals: Globals,
        friends: []
    }),
    async mounted(){
        this.friends = await GetFriends()
        console.log(this.friends)
    }
}
</script>

<style>

</style>
