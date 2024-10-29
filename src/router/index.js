import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DisclaimerInfo from '../components/DisclaimerInfo.vue'
import Equipment from '../components/Equipment.vue'
import Guides from '../components/Guides.vue'
import Heroes from '../components/Heroes.vue'
import Talisman from '../components/Talisman.vue'
import UpgradeRequirements from '../components/UpgradeRequirements.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/heroes',
    name: 'heroes',
    component: Heroes
  },
  {
    path: '/upgrade',
    name: 'upgrade',
    component: UpgradeRequirements
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: Equipment
  },
  {
    path: '/talisman',
    name: 'talisman',
    component: Talisman
  },
  {
    path: '/guides',
    name: 'guides',
    component: Guides
  },
  {
    path: '/disclaimer',
    name: 'disclaimer',
    component: DisclaimerInfo
  }
]

const router = createRouter({
  history: createWebHashHistory('/HOC2/'),
  routes
})

export default router
