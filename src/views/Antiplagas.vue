<template>
    <section class="section-column">
        <h1>Plantas antiplagas</h1>
        <div class="card-container">
            <Card v-for="(planta, index) in plantasAntiplagas" :key="index" :planta="planta" class="antiplagas-card" />
        </div>

    </section>
</template>

<script setup>
    import { plantas, Plant } from '@/data.js';
    import Card from '@/components/Card.vue';
    const plantasAntiplagas = Plant.filterCategoria(plantas, 'Antiplagas');
    
</script>

<style  scoped>

</style>