import { postUsersListData } from '@/service/index'
export default {
  namespaced: true,
  state: () => ({
    usersList: [],
    usersTotalCount: 0
  }),
  mutations: {
    setUsersList(state, data) {
      state.usersList = data
    },
    setUsersTotalCount(state, data) {
      state.usersTotalCount = data
    }
  },
  actions: {
    async postUsersListAction(context) {
      const usersListResult = await postUsersListData()
      const { totalCount, list } = usersListResult.data
      console.log(list)
      console.log(totalCount)
      context.commit('setUsersList', list)
      context.commit('setUsersTotalCount', totalCount)
    }
  }
}
