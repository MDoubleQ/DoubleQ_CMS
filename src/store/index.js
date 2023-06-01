import { createStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import main from './main/main'
const store = createStore({
  modules: {
    login,
    system,
    main
  }
})

export default store
