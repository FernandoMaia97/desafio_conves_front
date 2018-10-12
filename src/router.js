import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tipos',
      name: 'tipos',
      component: () =>import('./views/Tipos.vue')
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: () =>import('./views/Cadastrar.vue')
    },
    {
      path: '/pesquisar',
      name: 'pesquisar',
      component: () =>import('./views/Pesquisar.vue')
    }
  ],
  mode: 'history'
})
