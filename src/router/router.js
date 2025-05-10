//lazy iport
import { createRouter, createWebHistory } from "vue-router";
import Landing from "@/views/Landing.vue";
import Planta from "@/views/Planta.vue";
const Huerto = () => import("@/views/Huerto.vue");
const Medicinal = () => import("@/views/Medicinal.vue"); 
const Antiplagas = () => import("@/views/Antiplagas.vue"); 
// import Medicinal from "@/views/Medicinal.vue";
// import Antiplagas from "@/views/Antiplagas.vue";
const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/Planta/:nombre",
    name: "Planta",
    component: Planta,
  },
  {
    path: "/Huerto",
    
    component: Huerto,
  },
  {
    path: "/Medicinal",
    
    component: Medicinal,
  },
  {
    path: "/Antiplagas",
    
    component: Antiplagas,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
