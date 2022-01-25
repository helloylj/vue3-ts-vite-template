import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
// import ElementPlus from '@/plugins/element-plus'
import Dayjs from '@/plugins/dayjs'
import '@/core/styles'
import '@/assets/styles'

const app = createApp(App)
app.use(router)
// app.use(ElementPlus)
app.use(Dayjs)
app.mount('#app')
