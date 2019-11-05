/*
 * @Author: your name
 * @Date: 2019-10-31 19:07:27
 * @LastEditTime: 2019-11-05 19:27:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa2-frame\db\models\book.js
 */
var Sequelize = require("sequelize");
var sequelize = require("../index.js");

const Book = sequelize.define(
    "book",
    {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        bookName: Sequelize.STRING,
        bookAuthor: Sequelize.STRING
    },
    {
        charset: 'utf8',
        timestamps: false,
        freezeTableName: true
    }
);

Book.associate = function (models) {
    models.book.belongsTo(models.user);
};

module.exports = Book;

