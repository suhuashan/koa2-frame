/*
 * @Author: your name
 * @Date: 2019-11-04 13:10:04
 * @LastEditTime: 2019-11-05 22:15:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa2-frame\controller\article.js
 */

const { successResModel } = require('./response');
const model = require('../db/model');
const User = model.user;
const Book = model.book;

const getArticleList = async (ctx) => {
    let data = await User.findAll({
        includes: [{
            model: Book
        }]
    })
    ctx.body = {
        ...successResModel,
        data: data
    };
}

module.exports = {
    'GET /article/list': getArticleList
}