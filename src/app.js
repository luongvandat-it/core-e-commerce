'use strict'
const compression = require('compression')
const express = require('express')
const helmet = require('helmet')

const app = express()

// middlewares
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())

// connect to database

// routes
const routers = require('./routes')
app.use('/', routers)

module.exports = app
