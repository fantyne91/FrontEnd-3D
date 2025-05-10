
<template>
    <section class="section-column">
        <h1>Plantas para huerto</h1>
        <button @click="clickFunction" class="filter btn-secondary">Filtrar fáciles</button>
        <div class= "card-container">
            <Card  v-for="(planta, index) in getPlantas" :key="index" :planta="planta" class="huerto-card">               
            </Card>
        </div>
    </section>
</template>
<script setup>
import { plantas, Plant } from '@/data.js';
import Card from '@/components/Card.vue';
import { ref, computed } from 'vue';


const plantasHuerto = Plant.filterCategoria(plantas, 'Comestible');
const plantasFilter = plantasHuerto.filter(plant => plant.categoria.includes("Facil"));
let filtrado = ref(false);

const clickFunction = () => {
    filtrado.value = !filtrado.value;
}

const getPlantas = computed(() => filtrado.value ? plantasFilter : plantasHuerto);

</script>
<style scoped>
section{
    justify-content: center;
    align-items: end;
}
    
  </style>