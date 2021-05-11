const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

// Middleware
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3000, () => {
    console.log("Now listening on port 3000")
})