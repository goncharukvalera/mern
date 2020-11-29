const {Router} = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post('/register', async (req, resp) => {
    try {
        const {email, password} = req.body
        const candidate = await User.findOne({email})
        if (candidate) {
            return resp.status(400).json({message: 'User with this email already exist'})
        }
        const hashedPassword = await bcrypt.hash(password, 'VH')
        const user = new User({email, password: hashedPassword})
        await user.save()
        resp.status(201).json({message: 'User was successfully created'})
    } catch (e) {
        resp.status(500).json({message: 'Something went wrong'})
    }
})
// /api/auth/login
router.post('/login', async (req, resp) => {

})
module.exports = router