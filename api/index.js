const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const startTime = new Date().getTime()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        uptime: new Date().getTime() - startTime,
    })
})

module.exports = app