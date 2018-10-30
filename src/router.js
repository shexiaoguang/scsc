import Vue from 'vue'
import Router from 'vue-router'
//import Index from './views/index.vue'
import Mgbody from '@/components/Index/mgBody'
import group from '@/components/group_timeLimit/group.vue'
import timeLimit from '@/components/group_timeLimit/timeLimit.vue'
import ProductDetails  from '@/components/details/productdetails.vue'
Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //{path: '/',name: 'index',component: Index},
  
  {
  path: '/',
  name: 'mgbody',
  component: Mgbody,
  },
  {
    path:'/group',
    nema:'group',
    component:group
  },
  {
    path:'/timeLimit',
    nema:'timeLimit',
    component:timeLimit
  },
  {
    path:'/details',
    name:'details',
    component:ProductDetails,
    props:{
      bool:false
    }
  }
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})