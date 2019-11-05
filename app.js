/*
 * @Author: suhuashan
 * @Date: 2019-10-22 12:48:13
 * @LastEditTime: 2019-11-05 22:08:17
 */

const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser')

const logger = require('./middlewares/logger');
const isDev = require('./config/env');
const routes = require('./routes');
const { HttpException } = require('./middlewares/exception/http_exception');

const PORT = 8000;
const staticPath = './static';


const app = new Koa();

app.use(bodyParser());

app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    logger.resLogger(ctx, ms)
});

app.use(async (ctx, next)=>{
    try {
        await next()
    } catch (error) {
        const isHttpException = error instanceof HttpException
        
        if(isDev && !isHttpException) {
            throw error
        }

        if(isHttpException) {
            ctx.body = {
                msg:error.msg,
                error_code:error.errorCode,
                request:`${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        } else {
            ctx.body = {
                msg: 'we made a mistake',
                error_code: 999,
                request:`${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }

        ctx.app.emit('error', error, ctx);
    }
});

app.use(static(
    path.join( __dirname,  staticPath)
));

app.use(routes());

app.on('error', (err, ctx) => {
    logger.errLogger(ctx, err)
    console.error('server error', err, ctx)
});

app.listen(PORT);
console.log(`The server is listening on the port ${PORT}`);