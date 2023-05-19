import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenuByRoleId
} from '@/service/index'

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

      // 页面跳转
      router.push('/main')
    }
  }
}
