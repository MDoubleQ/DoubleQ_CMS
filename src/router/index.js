import { createRouter, createWebHashHistory } from 'vue-router'
import { localCache } from '@/utils/cache'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/main',
      component: () => import('@/views/main/main.vue')
    },
    {
      path: '/:pathMath(.*)',
      component: () => import('@/views/not-found/not-found.vue')
    }
  ]
})

// 导航守卫
// 参数: to(跳转到的位置)/from(从哪里跳转过来)
// 返回值: 返回值决定导航的路径(不返回或者返回undefined, 默认跳转)
// 举个栗子: / => /main
// to: /main from: / 返回值: /abc
router.beforeEach((to) => {
  const token = localCache.getCache('login-token')
  // if (to.path === '/main') {
  //   // 只有登陆成功（token），才能真正进入到main页面
  //   if (!token) return '/login'
  // }

  // 优化代码
  if (to.path === '/main' && !token) {
    return '/login'
  }
})

export default router
