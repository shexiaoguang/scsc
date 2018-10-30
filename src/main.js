import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './vuex/store'													
import fillter from './fillter'
//vue轮播图插件,提供了最常见的左右滑动以及淡入淡出两种效果
//npm install vue-slide-mini --save
//import VueSlideMini from 'vue-slide-mini'
//Vue.use(VueSlideMini)
Vue.use(Vuex)
Vue.config.productionTip = false
//vue-resource 模块
import VueResource from 'vue-resource'
Vue.use(VueResource)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



// //vuex加载配置
//const store=new Vuex.Store({
//       state:{ //state  保存共享数据保存(驱动应用的数据源),state 映射到视图(view--template)
//         cartCount:0,
//         name:"sxg",
//         age:"22"
//       },
//       mutations:{   //mutations操作共享数据方法
//         
//       },
//       getters:{   //getters 获取共享数据,监听数据变化
//           person(state){
//           	  return `${state.name} + ${state.age}`
//           }
//       }
// })

//设置全局ajax访问基础路径
Vue.http.options.root="http://127.0.0.1:3000/";
Vue.http.options.emulateJSON=true;