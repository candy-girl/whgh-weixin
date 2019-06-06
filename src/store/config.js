/**
 * @desc 网络请求的actions
 * @author candy <https://candy-1.github.io/>
 * @date 2018-10-28
 **/

// export const API_URI = '/api/'//开发环境的api
export const API_URI = '' // 部署上线环境的api

export const USER_KEY = '@PAERTPET:USER'

export const HEADERS = {
  Accept: 'application/json', // 请求报头用于指定客户端接受哪些类型的信息
  'Content-Type': 'application/json; charset=UTF-8', // http协议传输json数据类型的数据对象,编码是UTF-8
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36',
  Host: API_URI, // host表示合法的主机名或者ip地址，主要用于指定被请求资源的Internet主机和端口号
  Referer: `http://${API_URI}/`
}

export const BASIC_INFO = {
  logo: '/logo.png',
  name: '贵州项目demo版本',
  version: 'v1.0.0'
}
