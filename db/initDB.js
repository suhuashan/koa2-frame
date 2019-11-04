/*
 * @Author: suhuashan
 * @Date: 2019-10-28 12:40:48
 * @LastEditTime: 2019-10-28 13:08:03
 */
const model = require("./model.js");

for (let attribute in model) {
    model[attribute].sync();
}

console.log("init db OK!");
// process.exit(0);