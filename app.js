/*
 * @Author: suhuashan
 * @Date: 2019-10-22 12:48:13
 * @LastEditTime: 2019-11-12 21:30:25
 */

const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const onerror = require('koa-onerror');
const cors = require('koa2-cors');
const session = require('koa-session')

const logger = require('./middlewares/logger');
const login = require('./middlewares/login');
const routes = require('./routes');
const redis = require('./config/redis');
const sessionStore = require('./util/sessionStore');

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
app.keys = ['suhuashan']
app.use(session({
    key: 'sid',                     //cookie键名
    maxAge: 1000 * 60 * 10,         // session的失效时间,设置为5分钟
    store: new sessionStore(redis), 
    signed: true
}, app));

//解析post请求参数中间件
app.use(bodyParser({
    enableTypes:['json', 'form', 'text']
}));

//记录响应日志
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    logger.resLogger(ctx, ms)
});

//登录中间件
app.use(async (ctx, next) => {
    await login(ctx, next)
});

//静态资源中间件
app.use(static(
    path.join( __dirname,  staticPath)
));

//加载路由
app.use(routes());

//异常处理（写入错误日志）
app.on('error', (err, ctx) => {
    logger.errLogger(ctx, err);
    console.error('server error', err, ctx);
});

app.listen(PORT);
console.log(`The server is listening on the port ${PORT}`);