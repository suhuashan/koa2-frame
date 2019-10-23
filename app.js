/*
 * @Author: suhuashan
 * @Date: 2019-10-22 12:48:13
 * @LastEditTime: 2019-10-22 14:28:24
 */

const Koa = require('koa');
const logger = require('./middlewares/logger');
const PORT = 8000;


const app = new Koa();

app.on('error', (err, ctx) => {
    logger.errLogger(ctx, err)
    console.error('server error', err, ctx)
});

app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    logger.resLogger(ctx, ms)
});

app.use(ctx => {
    ctx.body = 'success';
});

app.listen(PORT);
console.log(`The server is listening on the port ${PORT}`);