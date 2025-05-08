<script setup>
    import { plantas, Plant } from '@/data.js';
    import Card from '@/components/Card.vue';
    const plantasHuerto = Plant.getHuerto(plantas);

</script>
<template>
    <section class="section-column">
        <h1>Plantas para huerto</h1>
        <div class= "card-container">
            <Card v-for="(planta, index) in plantasHuerto" :key="index" :planta="planta" class="huerto-card">
               
            </Card>
        </div>
    </section>
</template>
<style scoped>
    
  </style>