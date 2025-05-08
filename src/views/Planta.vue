<script setup>
import { plantas, Plant } from '@/data.js';
import { useRoute } from 'vue-router';
   
const route = useRoute()
const plantaUrl = plantas.find(p => p.nombre === decodeURIComponent(route.params.nombre))
    
</script>
<template>
    <section class="planta-container">
        <img :src="plantaUrl.img" alt="Planta" class="planta-image" />
         <div class="planta-card">            
            <h1>{{ plantaUrl.nombre }}</h1>
            <h2>{{ plantaUrl.beneficios }}</h2>         
            <h3> {{ plantaUrl.descripcion }} </h3>        
          
            <p> {{ plantaUrl.luz }} </p>
            <p> Cómo se usa: {{ plantaUrl.uso }} </p>            
        </div>  
    </section>
    <section class="datos-planta">
        <div>
            <h2>Cómo plantar?</h2>
            <p v-for= "(p , index) in plantaUrl.comoPlantar" :key="index">{{ p }} </p>
        </div>
        
    </section>    
</template>
<style scoped>
.planta-container{
    display: flex;    
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 32px;
}
.planta-card{
    display: flex;
    flex-direction: column;
    padding: 32px;
    text-align: start;
    gap:16px;
}
.datos-planta{
    justify-items: center;
}
.datos-planta > div{
    border-radius: 20px;
    display: flex;
    gap: 16px;
    flex-direction: column;
    padding: 32px;
    min-width: 300px;
    background-color: rgb(173, 238, 173);
    box-shadow: 0 0 8px rgb(131, 134, 131);
}
.datos-planta > div p{
    text-align: left;
}
/* Img */
.planta-image{
  width:70%;
  max-width: 450px;
  border-radius: 32px;
}
</style>