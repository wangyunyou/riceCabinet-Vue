import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      showTab: true
    }
  },
  {
    path: '/Mine',
    name: 'Mine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Mine.vue'),
    meta: {
      showTab: true
    }
  },
  {
    path: '/Activity',
    name: 'Activity',
    component: () => import('../views/Activity.vue')
  },
  {
    path: '/ChooseActivity',
    name: 'ChooseActivity',
    component: () => import('../views/ChooseActivity.vue')
  },
  {
    path: '/Help',
    name: 'Help',
    component: () => import('../views/Help.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Money',
    name: 'Money',
    component: () => import('../views/Money.vue')
  },{
    path: '/Test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404'),
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new VueRouter({
  routes
})

export default router