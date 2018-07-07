import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Details from '@/pages/details'
import Car from '@/pages/detail/car'
import Hill from '@/pages/detail/hill'
import Earth from '@/pages/detail/earth'
import Loud from '@/pages/detail/loud'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
      redirect: '/details/earth',
      children: [
        {
          name: 'Car',
          path: 'car',
          component: Car
        },
        {
          name: 'Hill',
          path: 'hill',
          component: Hill
        },
        {
          name: 'Earth',
          path: 'earth',
          component: Earth
        },
        {
          name: 'Loud',
          path: 'loud',
          component: Loud
        }
      ]
    }
  ]
})
