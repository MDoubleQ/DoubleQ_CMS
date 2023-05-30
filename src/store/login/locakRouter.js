// 动态路由，也可以放在每个单独的文件夹中
const localRouter = [
  {
    path: '/main/analysis/overview',
    component: () => import('@/views/main/analysis/overview/overview.vue')
  },
  {
    path: '/main/analysis/dashboard',
    component: () => import('@/views/main/analysis/dashboard/dashboard.vue')
  },
  {
    path: '/main/product/category',
    component: () => import('@/views/main/product/category/category.vue')
  },
  {
    path: '/main/product/goods',
    component: () => import('@/views/main/product/goods/goods.vue')
  },
  {
    path: '/main/story/chat',
    component: () => import('@/views/main/story/chat/chat.vue')
  },
  {
    path: '/main/story/list',
    component: () => import('@/views/main/story/list/list.vue')
  },
  {
    path: '/main/system/user',
    component: () => import('@/views/main/system/user/user.vue')
  },
  {
    path: '/main/system/role',
    component: () => import('@/views/main/system/role/role.vue')
  },
  {
    path: '/main/system/menu',
    component: () => import('@/views/main/system/menu/menu.vue')
  },
  {
    path: '/main/system/department',
    component: () => import('@/views/main/system/department/department.vue')
  }
]

export default localRouter
