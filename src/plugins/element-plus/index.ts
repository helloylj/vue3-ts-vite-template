import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import { App } from 'vue'

export default function (app: App<Element>) {
  app.use(ElementPlus, { locale })
}
