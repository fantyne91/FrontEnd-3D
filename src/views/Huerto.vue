<script setup>
import { plantas, Plant } from '@/data.js';
    import Card from '@/components/Card.vue';
    const plantasHuerto = Plant.getHuerto(plantas);

</script>
<template>
    <div class="huerto-container">
        <h1>Plantas para huerto</h1>
        <div class= "card-container">
            <Card v-for="(planta, index) in plantasHuerto" :key="index" :planta="planta" class="huerto-card">
                <!-- <router-link :to="{ name: 'planta', params: { nombre: planta.nombre } }">
                    <img :src="planta.img" alt="Planta" class="huerto-image" />
                    <h2>{{ planta.nombre }}</h2>
                    <h3>{{ planta.beneficios }}</h3>
                </router-link> -->
            </Card>
        </div>
    </div>
</template>
<style scoped>
h1{
    font-size: 2.4rem;
    color: #215310;
    text-align: center;
    margin-top: 20px;
}
  </style>