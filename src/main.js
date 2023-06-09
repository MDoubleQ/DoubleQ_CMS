import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'

// CSS样式
import 'normalize.css'
import '@/assets/CSS/index.less'

// element-plus引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// icon引入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// app注册
app.use(router)
app.use(store)

app.use(ElementPlus, {
  locale: zhCn
})

store.dispatch('login/localCacheAction').then(() => {
  app.mount('#app')
  // console.log(store.state.login.userMenu)
})
