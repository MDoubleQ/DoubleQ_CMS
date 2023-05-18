import { accountLoginRequest } from '@/service/index'
import router from '@/router'
import { localCache } from '@/utils/cache'
export default {
  namespaced: true,
  state: () => ({
    id: '',
    token: '',
    name: ''
  }),
  mutations: {
    setUsers(state, data) {
      ;(state.id = data.id),
        (state.token = data.token),
        (state.name = data.name)
    }
  },
  actions: {
    async fetchAccountLogin(context, account) {
      console.log(account)
      const res = await accountLoginRequest(account)
      console.log(res.data)
      context.commit('setUsers', res.data)

      localCache.setCache('token', res.data.token)

      router.push('/main')
    }
  }
}
