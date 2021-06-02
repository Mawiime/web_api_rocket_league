import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/moves',
    name: 'Moves',
    component: () => import('../views/Moves.vue')
  },
  {
    path: '/items',
    name: 'Items',
    component: () => import('../views/Items.vue')
  },
  {
    path: '/twitch',
    name: 'Twitch',
    component: () => import('../views/Twitch.vue')
  },
  {
    path: '/addmove',
    name : 'AddMove',
    component: () => import('../views/AddMove.vue')
  },
  {
    path: '/additem',
    name: 'AddItem',
    component: () => import('../views/AddItem.vue')
  },
  {
    path: '/addworkshop',
    name: 'AddWorkshop',
    component: () => import('../views/AddWorkshop.vue')
  },
  {
    path: '/workshop',
    name: 'Workshop',
    component: () => import('../views/Workshop.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
