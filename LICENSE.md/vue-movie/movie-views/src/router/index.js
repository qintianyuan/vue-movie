import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import index from '@/views/index'
import movieList from '@/views/movieList'
import movieDetail from '@/views/movieDetail'
import newDetail from '@/views/newDetail'
import loginPage from '@/views/loginPage'
import registerPage from '@/views/registerPage'
import findPasswordPage from '@/views/findPasswordPage'
import userInfo from '@/views/userInfo'

Vue.use(Router)
Vue.use(VueAxios,axios);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path: '/movieList',
    	name: 'movieList',
    	component: movieList
    },
    {
    	path: '/movieDetail',
    	name: 'movieDetail',
    	component: movieDetail
    },
    {
      path: '/newDetail',
      name: 'newDetail',
      component: newDetail
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage
    },
    {
      path: '/registerPage',
      name: 'registerPage',
      component: registerPage
    },
    {
      path: '/findPasswordPage',
      name: 'findPasswordPage',
      component: findPasswordPage
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: userInfo
    }
  ]
})
