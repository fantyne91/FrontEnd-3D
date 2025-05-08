
import { createRouter, createWebHistory } from "vue-router";
import Landing from "@/views/Landing.vue";
import Planta from "@/views/Planta.vue";
import Huerto from "@/views/Huerto.vue";
import Medicinal from "@/views/Medicinal.vue";
import Antiplagas from "@/views/Antiplagas.vue";
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
  {
    path: "/Medicinal",
    name: "Medicinal",
    component: Medicinal,
  },
  {
    path: "/Antiplagas",
    name: "Antiplagas",
    component: Antiplagas,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
