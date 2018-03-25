import Vue from 'vue'
import Router from 'vue-router'

import Manager from '@/components/Manager/Manager'
import DailyLog from '@/components/Manager/DailyLog/DailyLog'
import DeliveryForm from '@/components/Manager/DeliveryForm/DeliveryForm'
import AddStock from '@/components/Manager/AddStock/AddStock'
import EditStockForm from '@/components/Manager/AddStock/EditStockForm'

import Public from '@/components/Public/Index'
import Home from '@/components/Public/Home'
import SignUp from '@/components/Public/SignUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Public,
      children: [
        { path: '', name: 'Home', component: Home },
        { path: 'sign-up', name: 'SignUp', component: SignUp }
      ]
    },
    {
      path: '/manager',
      component: Manager,
      children: [
        { path: '', name: 'Daily Log', component: DailyLog },
        { path: 'stock', name: 'Add Stock', component: AddStock },
        { path: 'daily-log/:date?', name: 'Daily Log History', component: DailyLog, props: true },
        { path: 'delivery-form/:id?', name: 'Delivery Form', component: DeliveryForm, props: true },
        { path: 'edit-stock-form/:id?', name: 'Edit Stock Form', component: EditStockForm, props: true },
        { path: '*', redirect: '/manager' }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
