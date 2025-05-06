<template>
    <nav class="nav">
        <router-link to="/huerto"> Plantas para huerto</router-link>
        <router-link to="/medicinal"> Plantas medicinales</router-link>
        <router-link to="/plagas"> Plantas antiplagas</router-link>
    </nav>
</template>

<script setup>
</script>

<style scoped>
    .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100vw;       
        padding: 10px;
    }
    nav *{
       
        color: #069f10;
        font-size: 1.2em;
       
    }
</style>