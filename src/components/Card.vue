<template>
    <div class="img-container"
                 @click="toPlant(planta)"
                :style="{
                    backgroundImage: `url(${planta.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '300px',
                    height: '350px',
                    borderRadius: '8px', 
                                      
                }"
                role="img"
                :aria-label="`Imagen de la planta: ${planta.nombre}`">
                    <div class="card">               

                        <h2> {{ planta.nombre }} </h2>            
                        <h3>{{ planta.beneficios }}</h3>
            
                        
                    </div>
                    
    </div>
   
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const toPlant = (planta) => { 
        router.push({ name: 'Planta', params: { nombre: planta.nombre } });
    }

    defineProps({
        planta: Object
    })
</script>
    
<style  scoped>
    h2{ 
        font-size: 2.4rem;
        color: #2a6a15;
    }
    h3{
        font-size: 1.2rem;
        font-weight: 400;
    }
    .img-container{
        display: flex;
         position: relative;
    }
    .card{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 300px;
        height: 350px;        
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 24px 24px;
        gap: 24px;
        z-index: 2;
        
        cursor: pointer;
        overflow: hidden;
    }
    .img-container::before {
        content: "";
        position: absolute;
        inset: 0;
        background: white;
        filter: blur(5px)  ;
        z-index: 0;
        opacity: 0.8;
        
   
        width: 300px;
        height: 350px;  
        }
    .img-container:hover::before{
        opacity: 0;
       transition: opacity 0.5s ease;
       
    }
    .img-container:hover .card{
        opacity: 0;
       transition: opacity 0.5s ease;
    } 
</style>