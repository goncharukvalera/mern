const {Router} = require('express')
const bcrypt = require('bcryptjs')
const validator = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Email is not correct').isEmail(),
        check('password', 'Min length of password is 6 chars')
            .isLength({min: 6})
    ],
    async (req, resp) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return resp.status(400).json({
                    errors: errors.array(),
                    message: 'Wrong email or password'
                })
            }
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
router.post(
    '/login',
    [
        check('email', 'Email is not correct').normalizeEmail().isEmail(),
        check('password', 'Enter password').exists()
    ],
    async (req, resp) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return resp.status(400).json({
                    errors: errors.array(),
                    message: 'Wrong email or password'
                })
            }
            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                resp.status(400).json({message: 'User is not found'})
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                resp.status(400).json({message: 'Password is not correct'})
            }

        } catch (e) {
            resp.status(500).json({message: 'Something went wrong'})
        }
    })
module.exports = router