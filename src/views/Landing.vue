<template>
    <div class="intro-landing">
        <h1>Aprende a cultivar tu comida</h1>
        <h2>Descubre todos los beneficios que te pueden dar las plantas. Desde comida sana a remedios naturales.</h2>
        <!--<img :src="tomates.img" alt="Tomate" class="plant-image" />-->
       <div ref="sceneContainer" class="scene-container"></div>
    </div>
    <div>
        <h1>Tomate</h1>
        <p>El tomate es una planta herbácea de la familia de las solanáceas, originaria de América Central y del Sur. Es un cultivo muy importante en la agricultura mundial y se utiliza ampliamente en la cocina.</p>
        <img :src="tomates.img" alt="Tomate" class="plant-image" />
        <p>El tomate es rico en vitaminas y antioxidantes, y se consume fresco, en salsas, sopas y otros platos. Además, su cultivo es fundamental para la economía de muchos países.</p>
      </div>
</template>

<script setup>
    import plantas from '@/data.js';
    const tomates = plantas[0]
    console.log(tomates)


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
  scene.add(new THREE.AmbientLight(0xffffff, 0.8));
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
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
    model.scale.set(3, 3, 3);
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);
      model.position.x -= 2; // ajusta el valor según sea necesario
    rotatingGroup.add(model);
  });
  loader.load('/models/lime_01.glb', (gltf) => {
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

function animate() {
  requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();

  // Planta: rotación horizontal con inercia
  rotatingGroup.rotation.y = THREE.MathUtils.lerp(
    rotatingGroup.rotation.y,
    plantTargetY,
    0.1
  );

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
});

onBeforeUnmount(() => {
  window.removeEventListener('wheel', onWheel);
  window.removeEventListener('resize', onWindowResize);
});
</script>

<style scoped >
.intro-landing{
   height: 100%;
   text-shadow: 0 0px 6px  white;
   font-weight: bold;
   padding:0 48px;
}
.scene-container {
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
  width: 100%;
  height: 800px; /* Ocupa toda la altura de la ventana */
  margin: 0;
  padding: 0;
  overflow: hidden; /* Asegúrate de que no haya scroll */
}
h2{
  color: #333;
  font-size: 1.2em;
  text-align: left;
  margin-top: 20px;
}
</style>