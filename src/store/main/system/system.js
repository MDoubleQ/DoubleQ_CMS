import {
  postUsersListData,
  createNewUserData,
  editUserData
} from '@/service/index'
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
    // 请求用户列表
    async postUsersListAction(context) {
      const usersListResult = await postUsersListData({ offset: 0, size: 10 })
      const { totalCount, list } = usersListResult.data
      // console.log(list)
      // console.log(totalCount)
      context.commit('setUsersList', list)
      context.commit('setUsersTotalCount', totalCount)
    },
    // 创建新的用户
    async newUserDataAction(context, userInfo) {
      const newUserDataResult = await createNewUserData(userInfo)
      console.log(newUserDataResult)

      // 创建新的用户后，重新请求用户列表
      await context.dispatch('postUsersListAction')
    },
    // 修改用户
    async editUserDataAction(context, { id, userInfo }) {
      // 更新用户的数据
      const editUserDataResult = await editUserData(id, userInfo)
      console.log(editUserDataResult.data)

      // 修改用户后，重新请求用户列表
      await context.dispatch('postUsersListAction')
    }
  }
}
