import Vue from 'vue'
import Router from 'vue-router'
import Bitcoin from '../components/bitcoin/Bitcoin'
import Ethereum from '../components/Ethereum'
import Litcoin from '../components/Litcoin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/bitcoin',
      name: 'Bitcoin',
      component: Bitcoin
    },
    {
      path: '/ethereum',
      name: 'Ethereum',
      component: Ethereum
    },
    {
      path: '/litcoin',
      name: 'Litcoin',
      component: Litcoin
    }
  ]
})
