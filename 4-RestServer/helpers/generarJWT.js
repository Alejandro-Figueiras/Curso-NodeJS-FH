const jwt = require('jsonwebtoken')

module.exports = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid
        }
        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '72h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject(err)
                return;
            }
            resolve(token)
            
        })
    })
}