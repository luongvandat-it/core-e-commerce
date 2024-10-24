'use strict'
require('dotenv').config()
const process = require('process')
const { gracefulShutdown } = require('./src/utils')
const app = require('./src/app')

const APP_HOST = process.env.APP_HOST || 'localhost'
const APP_PORT = process.env.APP_PORT || 3000

const server = app.listen(APP_PORT, () => {
    console.log(`Server is running at ${APP_HOST}:${APP_PORT}`)
})

process.on('SIGINT', gracefulShutdown(server))
process.on('SIGTERM', gracefulShutdown(server))
