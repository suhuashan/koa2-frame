/*
 * @Author: your name
 * @Date: 2019-11-11 13:07:01
 * @LastEditTime: 2019-11-11 13:08:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \koa2-frame\config\redis.js
 */
const Redis = require('ioredis');

const redisUrl = '127.0.0.1:6379';
const redis = new Redis(redisUrl);

module.exports =  redis;