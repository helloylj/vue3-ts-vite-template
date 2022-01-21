import { AxiosRequestConfig } from 'axios'
import { Http } from './http'

const defaultConfig: AxiosRequestConfig = {
  baseURL: '',
  timeout: 10 * 1000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=UTF-8'
  }
}

export const http = new Http(defaultConfig)
