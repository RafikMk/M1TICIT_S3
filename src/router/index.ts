import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import TestPage from '../views/TestPage.vue'
import CameraPage from '../views/CameraPage.vue'
import ContratPage from '../views/Contrat/ContratPage.vue'
import mapPage from '../views/Map/mapPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/test'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/map',
    name: 'map',
    component: mapPage
  },
  {
    path: '/camera',
    name: 'Camera',
    component: CameraPage
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage
  },
  {
    path: '/Contrat',
    name: 'Contrat',
    component: ContratPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
