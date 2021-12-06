import axios from 'axios'
import store from '../store/index'
// 上线后更改
// axios.defaults.baseURL = 'http://127.0.0.1:3000/';
axios.defaults.baseURL = 'http://127.0.0.1:3000/';
export default function setAxios() {
  //请求拦截
  axios.interceptors.request.use(
    config => {
      if (store.state.token) {
        // 将token设置在headers ['Authorization'] 上面
        config.headers['Authorization'] = `Bearer ${store.state.token}`
      }
      return config
    }
  )
}