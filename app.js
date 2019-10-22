/*
 * @Author: suhuashan
 * @Date: 2019-10-22 12:48:13
 * @LastEditTime: 2019-10-22 14:28:24
 */

const Koa = require('koa');

const config = require('./config/port');
const koa_logger = require('./middlewares/logger');

const app = new Koa();

app.use(koa_logger);

app.listen(config.SERVER_PORT);
console.log(`The server is listening on the port ${config.SERVER_PORT}`);