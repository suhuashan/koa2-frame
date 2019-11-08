/*
 * @Author: your name
 * @Date: 2019-11-07 13:08:40
 * @LastEditTime: 2019-11-07 13:12:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa2-frame\config\session.js
 */

const MysqlSession = require('koa-mysql-session')

// 配置存储session信息的mysql
let store = new MysqlSession({
    user: 'root',
    password: 'aa1234',
    database: 'test',
    host: 'localhost',
})

// 存放sessionId的cookie配置
let cookie = {
    maxAge: '', // cookie有效时长
    expires: '',  // cookie失效时间
    path: '', // 写cookie所在的路径
    domain: '', // 写cookie所在的域名
    httpOnly: '', // 是否只用于http请求中获取
    overwrite: '',  // 是否允许重写
    secure: '',
    sameSite: '',
    signed: '',
}

module.exports = {
    store,
    cookie
}
  