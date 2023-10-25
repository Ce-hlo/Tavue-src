import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import compte from '../views/compte.vue'
import personnaliser from '../views/personnaliser.vue'
import compteHisto from '../views/compte-historique.vue'
import inscription from '../views/inscription.vue'
import connexion from '../views/connexion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "index", component: index },
    { path: "/compte", name: "compte", component: compte },
    { path: "/personnaliser", name: "personnaliser", component: personnaliser },
    { path: "/compteHisto", name: "compteHisto", component: compteHisto },
    { path: "/inscription", name: "inscription", component: inscription },
    { path: "/connexion", name: "connexion", component: connexion },
  ],
});

export default router
