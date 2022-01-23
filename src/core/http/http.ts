import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { RequestMethods } from './types'

export class Http {
  private axiosInstance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = Axios.create(config)
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest(): void {
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token = 'test token'
        if (token) {
          config.headers = config.headers || {}
          config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
  }

  private interceptorsResponse(): void {
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      error => {
        return Promise.reject(error)
      }
    )
  }

  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: AxiosRequestConfig
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const config = {
        method,
        url,
        ...param,
        ...axiosConfig
      } as AxiosRequestConfig

      this.axiosInstance
        .request(config)
        .then((response: any) => {
          return resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  public get<T>(
    url: string,
    params?: T,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.request<T>('get', url, params, config)
  }

  public post<T>(
    url: string,
    params?: T,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.request<T>('post', url, params, config)
  }

  public put<T>(
    url: string,
    params?: T,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.request<T>('put', url, params, config)
  }

  public delete<T>(
    url: string,
    params?: T,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.request<T>('delete', url, params, config)
  }
}
