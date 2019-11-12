/*
 * @Author: your name
 * @Date: 2019-11-04 13:10:04
 * @LastEditTime: 2019-11-12 21:06:57
 * @LastEditors: Please set LastEditors
 */

const { SuccessModel } = require('./response');
const model = require('../db/model');
const User = model.user;
const Book = model.book;

const getArticleList = async (ctx) => {

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