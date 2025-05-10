<template>
    <section class="section-column">
        <h1>Plantas medicinales</h1>
        <div class="card-container">
            <Card v-for = "(planta , index) in plantaMedicinal" :key="index" :planta="planta"   />
        </div>
    </section>
</template>

<script setup>
import { plantas, Plant } from '@/data.js';
import Card from '@/components/Card.vue';

const plantaMedicinal= Plant.filterCategoria(plantas, 'Medicinal');
</script>

<style  scoped>

</style>