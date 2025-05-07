<template>
    
         <div class="card">
            <h1> {{ planta.nombre }} </h1>            
            <h2>{{ planta.beneficios }}</h2>
            <router-link to="/huerto">Ver más</router-link>
        
    </div>
   
</template>

<script setup>


    defineProps({
        planta: Object
    })
</script>
    
<style  scoped>
    h1{ 
        color: #2a6a15;
    }
    h2{
        font-size: 1.2rem;
        font-weight: 500;
    }
    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 400px;
        background-color: #f0f0f0;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 16px 24px;
    }
</style>