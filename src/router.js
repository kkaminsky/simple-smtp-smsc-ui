import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import UserCabinet from './views/UserCabinet.vue'
import SignIn from './views/SignIn.vue'
import Confirm from './views/Confirm.vue'
import ResetPassword from './views/ResetPassword.vue'
import ConfirmReset from './views/ConfirmReset.vue'
import NewPassword from './views/NewPassword.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{requiresAuth:false}
    },
    {
      path: '/newpassword',
      name: 'newpassword',
      component: NewPassword,
      meta:{requiresAuth:false}
    },
    {
      path: '/confirmreset',
      name: 'confirmreset',
      component: ConfirmReset,
      meta:{requiresAuth:false}
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: ResetPassword,
      meta:{requiresAuth:false}
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confirm,
      meta:{requiresAuth:false}
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
      meta:{requiresAuth:false}
    },
    {
      path: '/usercabinet',
      name: 'usercabinet',
      component: UserCabinet,
      meta:{requiresAuth:true}

    },
    {
      path:'/register',
      name: 'register',
      component: Register,
      meta:{requiresAuth:false}
    },
    {
      path: '/about',
      name: 'about',
      meta:{requiresAuth:false},
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  mode:'history'
})


router.beforeEach((to, from, next) => {
  console.log(to.matched.some(record => record.meta.requiresAuth))
  if(to.matched.some(record => record.meta.requiresAuth))
  {
    if (localStorage.getItem('enable') == null) {
      next({
        name: 'signin',
      })
    }
    else {
      next()
    }

  }
  else {
    next()
  }
})

export default router
