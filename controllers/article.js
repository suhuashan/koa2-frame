/*
 * @Author: your name
 * @Date: 2019-11-04 13:10:04
 * @LastEditTime: 2019-11-04 21:59:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa2-frame\controller\article.js
 */

const { successResModel } = require('./response');
const getArticleList = (ctx) => {
    ctx.body = {
        ...successResModel,
        data: {
            list: [{id:1,title:'天秀','content':'确实天秀'}],
            total: 1
        }
    };
}

module.exports = {
    'GET /article/list': getArticleList
}