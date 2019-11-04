/*
 * @Author: your name
 * @Date: 2019-10-28 12:40:48
 * @LastEditTime: 2019-10-28 12:52:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa2-frame\db\model.js
 */
const fs = require("fs");
const db = require("./index.js");

let files = fs.readdirSync(__dirname + "/models");

let js_files = files.filter( (f) => {
    return f.endsWith(".js");
},files);

module.exports = {};

for(let f of js_files){
    console.log(`import model from file ${f}...`);
    let name = f.substring(0, f.length - 3);
    module.exports[name] = require(__dirname + '/models/' + f);
}