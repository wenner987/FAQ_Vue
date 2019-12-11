import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import LoginPage from '@/components/LoginPage'
import ConcretePage from '@/components/ConcretePage'
import NewQuestionPage from '@/components/NewQuestionPage'
import UserCenterPage from '@/components/UserCenterPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/index',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/concrete',
      name: 'concrete',
      component: ConcretePage
    },
    {
      path: '/newquestion',
      name: 'newquestion',
      component: NewQuestionPage
    },
    {
      path: '/user',
      name: 'user',
      component: UserCenterPage
    }
  ]
})
