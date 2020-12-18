const {Router} = require('express')
const Link = require('../models/Link')
const config = require('config')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate', async (req, resp) => {
    try {
        const baseUrl = config.get('baseUrl')
        const {from} = req.body
    } catch (e) {
        resp.status(500).json({message: 'Something went wrong'})
    }
})
router.get('/', auth, async (req, resp) => {
    try {
        const links = await Link.find({owner: req.user.userId})
        resp.json(links)
    } catch (e) {
        resp.status(500).json({message: 'Something went wrong'})
    }
})
router.get('/:id', async (req, resp) => {
    try {
        const link = await Link.findById(req.params.id)
        resp.json(link)
    } catch (e) {
        resp.status(500).json({message: 'Something went wrong'})
    }
})
module.exports = router