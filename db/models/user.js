/*
 * @Author: your name
 * @Date: 2019-10-31 19:07:19
 * @LastEditTime: 2019-11-05 19:27:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa2-frame\db\models\user.js
 */
var Sequelize = require("sequelize");
var sequelize = require("../index.js");

const User = sequelize.define(
    "user",
    {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        userName: Sequelize.STRING,
        userAge: Sequelize.INTEGER,
    },
    {
        charset: 'utf8',
        timestamps: false,
        freezeTableName: true
    }
);

User.associate = function (models) { 
    models.user.hasMany(models.book, {
        foreignKey: 'userId',
        targetKey: 'id'
    });
};
module.exports = User;

