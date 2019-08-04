import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/view/login/login'
import error from '@/view/error/error'
import zhu from '@/view/zhu/zhu'
Vue.use(Router)
export default new Router({
  routes: [

    {
      path:'/view/error/error',
      name:'error',
      component: error,
      meta:{
        require:true//该路径的访问需要登录
      },
    },
    {
      path:'/view/zhu/zhu',
      name:'zhu',
      component: zhu,
      meta:{
        require:true//该路径的访问需要登录
      },
    },
    {
      path: '/',
      name: 'login',
      component: login,
      meta:{
        require:false//该路径的访问不需要登录
      }
    }
  ]
})
