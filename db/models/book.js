/*
 * @Author: your name
 * @Date: 2019-10-31 19:07:27
 * @LastEditTime: 2019-11-04 11:46:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \koa2-frame\db\models\book.js
 */
var Sequelize = require("sequelize");
var sequelize = require("../index.js");

module.exports = sequelize.define(
    "buyBookList",
    {
        nid: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        username: Sequelize.STRING(),
        avatar: Sequelize.STRING(),
        bookName: Sequelize.STRING(),
        bookDesc: Sequelize.STRING(),
        position: Sequelize.STRING(),
        time: Sequelize.STRING(),
        buyer: Sequelize.STRING()
    },
    {
        charset: 'utf8',
        timestamps: false,
        freezeTableName: true
    }
);