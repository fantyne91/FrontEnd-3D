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
        justify-content: space-evenly;
        align-items: center;
        width: 100%;       
        padding: 16px 48px;
    }
    nav *{
       
        color: #204722;
        font-size: 1em;
       
    }
</style>