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
      name: 'main',
      component: () => import('@/views/main/main.vue')
      // children: [
      //   {
      //     path: '/main/analysis/overview',
      //     component: () => import('@/views/main/analysis/overview/overview.vue')
      //   },
      //   {
      //     path: '/main/analysis/dashboard',
      //     component: () =>
      //       import('@/views/main/analysis/dashboard/dashboard.vue')
      //   },
      //   {
      //     path: '/main/product/category',
      //     component: () => import('@/views/main/product/category/category.vue')
      //   },
      //   {
      //     path: '/main/product/goods',
      //     component: () => import('@/views/main/product/goods/goods.vue')
      //   },
      //   {
      //     path: '/main/story/chat',
      //     component: () => import('@/views/main/story/chat/chat.vue')
      //   },
      //   {
      //     path: '/main/story/list',
      //     component: () => import('@/views/main/story/list/list.vue')
      //   },
      //   {
      //     path: '/main/system/user',
      //     component: () => import('@/views/main/system/user/user.vue')
      //   },
      //   {
      //     path: '/main/system/role',
      //     component: () => import('@/views/main/system/role/role.vue')
      //   },
      //   {
      //     path: '/main/system/menu',
      //     component: () => import('@/views/main/system/menu/menu.vue')
      //   },
      //   {
      //     path: '/main/system/department',
      //     component: () =>
      //       import('@/views/main/system/department/department.vue')
      //   }
      // ]
    },
    {
      path: '/:pathMath(.*)',
      component: () => import('@/views/not-found/not-found.vue')
    }
  ]
})

// 动态路由，也可以放在每个单独的文件夹中
// const localRouter = [
//   {
//     path: '/main/analysis/overview',
//     component: () => import('@/views/main/analysis/overview/overview.vue')
//   },
//   {
//     path: '/main/analysis/dashboard',
//     component: () => import('@/views/main/analysis/dashboard/dashboard.vue')
//   },
//   {
//     path: '/main/product/category',
//     component: () => import('@/views/main/product/category/category.vue')
//   },
//   {
//     path: '/main/product/goods',
//     component: () => import('@/views/main/product/goods/goods.vue')
//   },
//   {
//     path: '/main/story/chat',
//     component: () => import('@/views/main/story/chat/chat.vue')
//   },
//   {
//     path: '/main/story/list',
//     component: () => import('@/views/main/story/list/list.vue')
//   },
//   {
//     path: '/main/system/user',
//     component: () => import('@/views/main/system/user/user.vue')
//   },
//   {
//     path: '/main/system/role',
//     component: () => import('@/views/main/system/role/role.vue')
//   },
//   {
//     path: '/main/system/menu',
//     component: () => import('@/views/main/system/menu/menu.vue')
//   },
//   {
//     path: '/main/system/department',
//     component: () => import('@/views/main/system/department/department.vue')
//   }
// ]

// 动态添加路由，但是并没有根据服务器获取的数据进行动态路由的匹配
// localRouter.forEach((route) => {
//   router.addRoute('main', route)
//   // console.log(route)
// })

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
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }

  // 第一次进入页面，匹配显示页面
  if (to.path === '/main') {
    return '/main/system/user'
  }
})

export default router
