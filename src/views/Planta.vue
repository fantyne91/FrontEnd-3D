<script setup>
import { plantas, Plant } from '@/data.js';
import { useRoute } from 'vue-router';
   
const route = useRoute()
const plantaUrl = plantas.find(p => p.nombre === decodeURIComponent(route.params.nombre))
    
</script>
<template>
    <div class="planta-container">
         <div class="planta-card">
            <img :src="plantaUrl.img" alt="Planta" class="planta-image" />
            <h2>{{ plantaUrl.nombre }}</h2>
            <h3>{{ plantaUrl.beneficios }}</h3>
        </div> 
    </div>
</template>