/*
 * @Author: suhuashan
 * @Date: 2019-10-22 12:48:13
 * @LastEditTime: 2019-11-07 14:13:57
 */

const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const onerror = require('koa-onerror');
const cors = require('koa2-cors');
const session = require('koa-session-minimal')

const logger = require('./middlewares/logger');
const routes = require('./routes');
const sessionConfig = require('./config/session');

const PORT = 8000;
const staticPath = './static';


const app = new Koa();

onerror(app);

// 配置跨域资源共享
app.use(cors({
    origin: function(ctx) {
        const ALLOW_ORIGIN = ['http://localhost:8000', 'http://localhost:8080'];
      if (ALLOW_ORIGIN.includes(ctx.request.header.origin)) {
        return ctx.request.header.origin;
      }
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
  })
);

// 使用session中间件
app.use(session({
    key: 'SESSION_ID',
    store: sessionConfig.store,
    cookie: sessionConfig.cookie
}));

app.use(bodyParser({
    enableTypes:['json', 'form', 'text']
}));

app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    logger.resLogger(ctx, ms)
});


app.use(static(
    path.join( __dirname,  staticPath)
));



app.use(routes());

// error-handling
app.on('error', (err, ctx) => {
    logger.errLogger(ctx, err)
    console.error('server error', err, ctx)
});

app.listen(PORT);
console.log(`The server is listening on the port ${PORT}`);