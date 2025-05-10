<template>
    <section class="section-column">
        <h1>Plantas {{ titulo }}</h1>
        <button @click="clickFunction" :class="filtrado ? ' btn-primary' : 'btn-secondary'" class="filter">Filtrar
            fáciles</button>
        <div class="card-container">
            <Card v-for="(planta, index) in getPlantas" :key="index" :planta="planta" >
            </Card>
        </div>
    </section>
</template>
<script setup>
    import { plantas, Plant } from '@/data.js';
    import Card from '@/components/Card.vue';
    import { ref, computed } from 'vue';

    const props = defineProps({
        titulo:  String,  
        categoria: String,
    });
    const plantasBase = Plant.filterCategoria(plantas, props.categoria);
    const plantasFilter = plantasBase.filter(plant => plant.categoria.includes("Facil"));
    let filtrado = ref(false);

    const clickFunction = () => {
        filtrado.value = !filtrado.value;
    }

    const getPlantas = computed(() => filtrado.value ? plantasFilter : plantasBase);

</script>
<style scoped>
section {
    justify-content: center;
    align-items: end;
}
</style>