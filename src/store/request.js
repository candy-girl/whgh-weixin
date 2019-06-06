/**
 * @desc 网络请求的actions
 * @author candy <https://candy-1.github.io/>
 * @date 2018-10-28
 **/
import fetch from 'isomorphic-fetch'
import { API_URI } from './config'

export function request (route, params, dispatch, success = null, { method = 'GET', headers = {}, body = null } = {}, isAuto = false) {
  // 处理query
  var arr = Object.keys(params)
  // Object.entries方法是把对象转化成数组，方便map,encodeURI编码URI
  const p = (arr.length > 0) ? `?${Object.entries(params).map(i => `${i[0]}=${encodeURI(i[1])}`).join('&')}` : ''
  const uri = `${API_URI}${route}${p}`
  const data = { method, headers }
  if (method !== 'GET') data.body = body
  const promise = Promise.race([
    fetch(uri, data)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        return response
      })
      .catch((err) => {
        console.warn(err)
      })

  ])
  promise.then((res) => {
    // console.log('promise.then',res);
    success && success(res)
  })
  promise.catch(err => {
    console.log('promise.catch', err)
  })
}
export default request
