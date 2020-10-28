const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

const PORT = config.get('port') || 5000
app.listen(PORT, () => console.log(`App has started on port ${PORT}`))