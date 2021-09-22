const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('server works!')
})

app.listen(3300, () => {
    console.log('App is running at: http://localhost:3300')
})