import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { App } from 'vue'

export default function (app: App<Element>) {
  dayjs.locale('zh-cn')
}
