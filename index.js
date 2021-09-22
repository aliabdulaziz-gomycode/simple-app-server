require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('server works!')
})

app.listen(process.env.PORT | 3300, () => {
    if (!process.env.PORT) {
        console.log('App is running at: http://localhost:3300')
    }
})