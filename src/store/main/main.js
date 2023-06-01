import { getEntireDepartment, getEntireRoles } from '@/service/index'
export default {
  namespaced: true,
  state: () => ({
    entireDepartments: [],
    entireRoles: []
  }),
  mutations: {
    setEntireDepartments(state, data) {
      state.entireDepartments = data
    },
    setEntireRoles(state, data) {
      state.entireRoles = data
    }
  },
  actions: {
    async fetchEntireDateAction(context) {
      const departmentsResult = await getEntireDepartment()
      context.commit('setEntireDepartments', departmentsResult.data.list)
      console.log(departmentsResult.data.list)

      const rolesResult = await getEntireRoles()
      context.commit('setEntireRoles', rolesResult.data.list)
      console.log(rolesResult.data.list)
    }
  }
}
