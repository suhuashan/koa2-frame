/*
 * @Author: your name
 * @Date: 2019-11-04 13:10:04
 * @LastEditTime: 2019-11-07 13:17:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa2-frame\controller\article.js
 */

const { SuccessModel } = require('./response');
const model = require('../db/model');
const User = model.user;
const Book = model.book;

const getArticleList = async (ctx) => {
    ctx.session.user_id = 'suhuashan';

    let id = ctx.request.query.id || '',
        data = await User.findAll({
        where: {
            id
        },
        include: [{
            model: Book
        }]
    })
    ctx.body = new SuccessModel(data);
}

module.exports = {
    'GET /article/list': getArticleList
}