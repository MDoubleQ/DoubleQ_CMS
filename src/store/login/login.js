import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenuByRoleId
} from '@/service/index'

// 导入路由配置
import localRouter from './locakRouter'

import router from '@/router'
import { localCache } from '@/utils/cache'

export default {
  namespaced: true,
  state: () => ({
    token: localCache.getCache('user-token') ?? '',
    userInfo: localCache.getCache('userInfo') ?? {},
    userMenu: localCache.getCache('userMenu') ?? []
  }),
  mutations: {
    // 保存token等信息到store
    setUsers(state, data) {
      state.id = data.id
      state.token = data.token
      state.name = data.name
    },

    setUserInfoResult(state, data) {
      state.userInfo = data
    },
    setUserMenuResult(state, data) {
      state.userMenu = data
    },
    setLocalCache(state, data) {
      state.token = data.token
      state.userInfo = data.userInfo
      state.userMenu = data.userMenu
    }
  },
  actions: {
    async fetchAccountLogin(context, account) {
      console.log(account)
      // 登陆帐号，获取token等信息
      const res = await accountLoginRequest(account)
      context.commit('setUsers', res.data)
      // 浏览器本地缓存token
      localCache.setCache('login-token', res.data.token)

      // 获取登录用户的详细信息（role）信息
      console.log(res.data.id)
      const userInfoResult = await getUserInfoById(res.data.id)

      // 储存登录用户详细信息（role）信息
      context.commit('setUserInfoResult', userInfoResult.data)
      console.log(userInfoResult.data)
      // 浏览器本地缓存用户详细信息（role）信息
      localCache.setCache('userInfo', userInfoResult.data)

      // 根据角色请求用户的权限（菜单Menu）
      const userMenuResult = await getUserMenuByRoleId(
        userInfoResult.data.role.id
      )
      context.commit('setUserMenuResult', userMenuResult.data)
      console.log(userMenuResult.data)
      // 浏览器本地缓存用户的权限（菜单Menu）
      localCache.setCache('userMenu', userMenuResult.data)

      console.log(userMenuResult.data)
      console.log(localRouter)

      // 根据userMenu数据进行动态路由配置
      for (const menu of userMenuResult.data) {
        console.log(menu)
        for (const submenu of menu.children) {
          console.log(submenu)
          const route = localRouter.find((item) => item.path === submenu.url)
          if (route) {
            router.addRoute('main', route)
          }
        }
      }

      // 页面跳转
      router.push('/main')
    },
    // 用户进行刷新后，默认加载数据
    localCacheAction(context) {
      const token = localCache.getCache('login-token')
      const userInfo = localCache.getCache('userInfo')
      const userMenu = localCache.getCache('userMenu')
      const localCacheMessage = {
        token,
        userInfo,
        userMenu
      }

      if (token && userInfo && userMenu) {
        context.commit('setLocalCache', localCacheMessage)
        // 根据userMenu数据进行动态路由配置
        for (const menu of localCacheMessage.userMenu) {
          console.log(menu)
          for (const submenu of menu.children) {
            console.log(submenu)
            const route = localRouter.find((item) => item.path === submenu.url)
            if (route) {
              router.addRoute('main', route)
            }
          }
        }
      }
    }
  }
}
