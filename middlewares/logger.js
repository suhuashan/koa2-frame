/*
 * @Author: your name
 * @Date: 2019-10-22 14:19:10
 * @LastEditTime: 2019-10-22 14:28:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /d:\nodejs\koa2-frame\middlewares\logger.js
 */
const logger = require('koa-logger');
const Moment = require('moment');

const koa_logger = logger((str) => {
    console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + str);
});

module.exports = koa_logger;
