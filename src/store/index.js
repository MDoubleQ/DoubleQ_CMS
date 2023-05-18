import { createStore } from 'vuex'
import login from './login/login'
const store = createStore({
  modules: {
    login
  }
})

export default store
