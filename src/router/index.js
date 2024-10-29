import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DisclaimerInfo from '../components/DisclaimerInfo.vue'
import Equipment from '../components/Equipment.vue'
import Guides from '../components/Guides.vue'
import Heroes from '../components/Heroes.vue'
import Talisman from '../components/Talisman.vue'
import UpgradeRequirements from '../components/UpgradeRequirements.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/disclaimer', name: 'disclaimer', component: DisclaimerInfo },
  { path: '/equipment', name: 'equipment', component: Equipment },
  { path: '/guides', name: 'guides', component: Guides },
  { path: '/heroes', name: 'heroes', component: Heroes },
  { path: '/talisman', name: 'talisman', component: Talisman },
  { path: '/upgrade', name: 'upgrade', component: UpgradeRequirements }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
