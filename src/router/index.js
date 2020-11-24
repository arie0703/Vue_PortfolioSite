import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Profile from '@/components/Profile'
import Experience from '@/components/Experience'
import Output from '@/components/Output' //①import


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },

    {
      path: '/Experience',
      name: 'Experience',
      component: Experience
    },

    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },

   {
      path: '/outputs',
      name: 'Output',
      component: Output
    }
  ]
})