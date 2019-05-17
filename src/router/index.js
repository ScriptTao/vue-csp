import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import Animation from '../views/main/animation.vue'
import ManageTest from '../views/management/manageTest.vue'
import Login from '../views/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
        {
          path: 'animation',
          component: Animation
        },
        {
          path: 'manageTest',
          component: ManageTest
        }
      ]
    },
    {
      path:'/login',
      name:'登陆',
      component:Login,
    }
  ]
})
