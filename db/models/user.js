/*
 * @Author: your name
 * @Date: 2019-10-31 19:07:19
 * @LastEditTime: 2019-10-31 19:10:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \koa2-frame\db\models\user.js
 */
var Sequelize = require("sequelize");
var sequelize = require("../index.js");

const User = sequelize.define(
    "buyBookList",
    {
        user_id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        user_name: Sequelize.STRING,
        user_age: Sequelize.INTEGER
    },
    {
        charset: 'utf8',
        timestamps: false,
        freezeTableName: true
    }
);

User.associate = function (models) {    

};

module.exports = User;