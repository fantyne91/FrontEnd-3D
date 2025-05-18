

<script setup>
import {plantas, Plant} from '@/data.js';
import Card from '@/components/Card.vue';

const plantaRecomendada = Plant.filterCategoria(plantas, "Facil")
   


//3D Scene
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { onMounted, onBeforeUnmount, ref, reactive } from 'vue';



const sceneContainer = ref(null);
let renderer, scene, camera;
let rotatingGroup, floatingGroup;
let plantTargetY = 0;

// Variables de rotación objetivo para la fruta
let fruitTargetX = 0;
let fruitTargetY = 0;
let fruitTargetZ = 0;

const clock = new THREE.Clock();

function init3DScene() {
  // Escena con fondo blanco
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // Cámara más cerca
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1, 3);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  sceneContainer.value.appendChild(renderer.domElement);

  // Iluminación
  scene.add(new THREE.AmbientLight(0xffffff,1.2));
  const dirLight = new THREE.DirectionalLight(0xffffff, 4);
  dirLight.position.set(5, 10, 7.5);
  scene.add(dirLight);

  // Grupos
  rotatingGroup = new THREE.Object3D();
  scene.add(rotatingGroup);
  floatingGroup = new THREE.Object3D();
  scene.add(floatingGroup);

  const loader = new GLTFLoader();

  

  // Planta rotatoria
  loader.load('/models/leave3D.glb', (gltf) => {
    const model = gltf.scene;
    model.scale.set(5, 5, 5);
      // Centrar el modelo en su propio eje
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);
      // Crear un pivot que contiene el modelo para posicionarlo izq
      const pivot = new THREE.Object3D();
    pivot.add(model); // el modelo ahora gira sobre su eje
    pivot.position.set(-2, -0.5, 0); // mover el grupo hacia la izquierda

    rotatingGroup.add(pivot);
  });
  loader.load('/models/lime2.glb', (gltf) => {
    const model = gltf.scene;
    model.scale.set(3, 3, 3);
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);
    model.position.y = 1;
    floatingGroup.add(model);
  });
  // Fruta flotante y rotatoria
  loader.load('/models/lemon_4k.glb', (gltf) => {
    const model = gltf.scene;
    model.scale.set(5, 5, 5);
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());

    model.position.y = 0;
    floatingGroup.add(model);
  });


  animate();
}
//animacion y stop
let animationFrameId;
let isVisible = true;

function animate() {

  if (!isVisible) return; // Detener la animación si no es visible

  animationFrameId = requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();
  // console.log('Animando...');
  // Planta: rotación horizontal con inercia
 rotatingGroup.children.forEach((pivot) => {
  pivot.rotation.y = THREE.MathUtils.lerp(
    pivot.rotation.y,
    plantTargetY,
    0.1
  );
});

  // Frutas: flotan + rotan libremente en 3 ejes
  floatingGroup.children.forEach((fruit, i) => {
    // Parámetros de flotación para no cruzarse
    const phaseX = i * Math.PI / 2;
    const phaseZ = i * Math.PI / 3;
    const ampX = 1 + 0.2 * i;
    const ampZ = 0.5 + 0.3 * i;
    const floatAmp = 0.2 + 0.1 * i;

    // Flotación vertical
    fruit.position.y = 2 + Math.sin(elapsed * 1.2 + phaseX) * floatAmp;

    // Movimiento horizontal en X/Z
    fruit.position.x = Math.sin(elapsed * 0.2 + phaseX) * ampX;
    fruit.position.z = Math.cos(elapsed * 0.4 + phaseZ) * ampZ;

    // **Rotación continua en las tres direcciones**  
    fruit.rotation.x += 0.01 + 0.002 * i;  
    fruit.rotation.y += 0.015 + 0.002 * i;  
    fruit.rotation.z += 0.01 + 0.002 * i;  
  });

  renderer.render(scene, camera);
}
// Detectar si el elemento está visible en la ventana
const observer = new IntersectionObserver(([entry]) => {
  isVisible = entry.isIntersecting;

  if (isVisible) {
    animate();
  } else {
    cancelAnimationFrame(animationFrameId);
    console.log('Animación detenida');
  }
});

 
function onWheel(event) {
  // Planta: scroll vertical → rotación Y
  plantTargetY += event.deltaY * 0.005;

  // Fruta: scroll vertical → rotaciones en X,Y,Z
  const delta = event.deltaY * 0.009;
  fruitTargetX += delta;
  fruitTargetY += delta;
  fruitTargetZ += delta;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

onMounted(() => {
  init3DScene();
  window.addEventListener('wheel', onWheel);
  window.addEventListener('resize', onWindowResize);
   const offContainer = document.querySelector('.scene-container');
  observer.observe(offContainer);

});

onBeforeUnmount(() => {
  window.removeEventListener('wheel', onWheel);
  window.removeEventListener('resize', onWindowResize);
});
</script>
<template>
  <section class="intro-landing">
    <div class="intro-text">
      <h1>Descubre el poder de las plantas y sus beneficios</h1>
      <h2>Siéntete mejor cultivando comida sana y remedios naturales.</h2>
      
      <router-link to="/huerto" class="btn-primary"> Comienza a plantar</router-link>
    </div>

    <!--<img :src="tomates.img" alt="Tomate" class="plant-image" />-->
    <div ref="sceneContainer" class="scene-container"></div>
  </section>
  <section class="recomendadas">
    <h3>Plantas de fácil cuidado</h3>
    <div class="card-container">
      <Card v-for="(planta, index) in plantaRecomendada" :key="index" :planta="planta" :recomendada="true" />
    </div>
  </section>

</template>
<style scoped >
 /* scene */
.scene-container {
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
  width: 100%;
  border-bottom: 16px solid #1e4f0e;
  margin: 0;
  height: 100%;
  padding: 0px;
  overflow: hidden; 
  min-height: 600px;
}
.scene-container canvas{
 height: 100%;
  
  display: block;
 
}
.intro-landing{
   font-weight: bold;
min-height: 650px;
   justify-items: end;
   max-height: 100vh;
   align-content: center;  
}
.intro-text{
    display: flex;
    flex-direction: column;
    gap:clamp(0px,4vh,32px);
   max-width: 650px;
   color: #2a6a15;  
   align-items: center; 
   height: 100%;
   justify-content: center;  
}
h1{text-shadow: 0 0 3px white;}
h2{ 
  font-size: 1.4em;
  text-shadow: 0 0 3px white;   
  
}
/* seccion recomendadas */
h3{
  font-size: 2em;  
 color: #215310;
}
.recomendadas{
  justify-items: start; 
  display: flex;
  flex-direction: column;
  gap: 24px; 
 padding-top:48px;
}
@media  (max-width: 700px){
  
.intro-landing{
  align-content: start;
}
  
}
</style>