const {Router} = require('express')
const Link = require('../models/Link')
const router = Router()

router.post('/generate', async (req, resp) => {
    try {

    } catch (e) {
        resp.status(500).json({message: 'Something went wrong'})
    }
})
router.get('/', async (req, resp) => {
    try {
        const links = await Link.find({owner: null}) // ???
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