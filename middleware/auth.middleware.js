const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, resp, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"
        if(!token) {
            return resp.status(401).json({message: 'Not authorized'})
        }
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded
        next()
    } catch (e) {
        resp.status(401).json({message: 'Not authorized'})
    }
}