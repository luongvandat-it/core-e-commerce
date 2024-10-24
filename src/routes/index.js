'use strict'
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!'.repeat(100000))
})

module.exports = router
