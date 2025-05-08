
import { createRouter, createWebHistory } from "vue-router";
import Landing from "@/views/Landing.vue";
import Planta from "@/views/Planta.vue";
import Huerto from "@/views/Huerto.vue";
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
    name: "Huerto",
    component: Huerto,
  },
  // Puedes añadir más rutas aquí
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
