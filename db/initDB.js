/*
 * @Author: suhuashan
 * @Date: 2019-10-28 12:40:48
 * @LastEditTime: 2019-11-05 19:10:47
 */
const model = require("./model.js");

// for (let attribute in model) {
//     model[attribute].sync();
// }

model.sequelize.sync({
    force: false
}).done(() => {
    console.log('wait for one minute and ctrl c to exit ');
})

console.log("init db OK!");
// process.exit(0);