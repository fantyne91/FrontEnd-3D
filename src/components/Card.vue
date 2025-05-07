<template>
    <div class="card">
        <h1> {{ planta.nombre }} </h1>
        <img :src= "planta.imagen" />
        <p>Explora las diferentes secciones para descubrir más sobre el mundo de las plantas.</p>
        <router-link to="/huerto">Ir a Plantas para huerto</router-link>
    </div>
</template>

<script setup>

    import defineProps  from 'vue'
    defineProps({
        planta: Object
    })
</script>

<style  scoped>

</style>