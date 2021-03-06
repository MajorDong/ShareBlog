import axios from 'axios'
//请求失败弹出
import { Message } from 'element-ui'

axios.defaults.baseURL = 'https://blog-server.hunger-valley.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
//对于跨域的请求也带上cookie
axios.defaults.withCredentials = true;

export default function request(url,type = 'GET',data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    }
    if (type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    axios(option).then((res) => {
      if (res.data.status === 'ok') {
        resolve(res.data)
      } else {
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(() => {
      Message.error('网络异常')
      reject({ msg: '网络异常' })
    })
  })
}