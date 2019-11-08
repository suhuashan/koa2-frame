/*
 * @Author: suhuashan
 * @Date: 2019-11-04 21:44:58
 * @LastEditTime: 2019-11-07 11:37:12
 */
class BaseModel {
    constructor(data, message) {
        if (typeof data === 'string') {
            this.message = data;
            data = null;
            message = null;
        }
        if (data) {
            this.data = data;
        }
        if (message) {
            this.message = message;
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data, message = 'success') {
        super(data, message);
        this.code = 0;
    }
}

class ErrorModel extends BaseModel {
    constructor(data, message = 'failure') {
        super(data, message);
        this.code = -1;
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}