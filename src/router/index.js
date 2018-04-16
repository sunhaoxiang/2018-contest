import Vue from 'vue'
import Router from 'vue-router'
const Play = () => import('@/views/Play')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Play',
      component: Play
    }
  ]
})
