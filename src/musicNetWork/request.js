// import axios from 'axios'
// import {
//   requestConfig,
//   PublishMessage,
//   PageConfig
// } from './requestConfig'
// export function getnotedetail(path) {
//   return requestConfig(path)
// }
// export function PostMessage(path, data) {
//   return PublishMessage(path, data)
// }
// export function PageSizeChange(path, parmas) {
//   return PageConfig(path, parmas)
// }



export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}