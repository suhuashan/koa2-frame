/*
 * @Author: suhuashan
 * @Date: 2019-11-11 13:10:23
 * @LastEditTime: 2019-11-11 13:11:32
 * @LastEditors: Please set LastEditors
 */
function getSession(sid) {
    return `sid:${sid}`
}

class sessionStore {
    constructor (client) {
        this.client = client
    }

    async get (sid) {
        let id = getSession(sid)
        let result = await this.client.get(id)
        if (!result) {
            return null
        } else {
            try{
                return JSON.parse(result)
            }catch (err) {
                console.error(err)
            }
        }
    }

    async set (sid, value, ttl) {
        let id = getSession(sid)

        try {
            let sessStr = JSON.stringify(value)
            if(ttl && typeof ttl === 'number') {
                await this.client.set(id, sessStr, "EX", ttl)
            } else {
                await this.client.set(id, sessStr)
            }
        } catch (err) {
            console.log('session-store', err)
        }
    }

    async destroy (sid) {
        let id = getSession(sid)
        await this.client.del(id)
    }
}

module.exports = sessionStore