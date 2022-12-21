const express = require('express')

const viagemRoutes = require('./routes/viagemRoutes')
const navioRoutes = require('./routes/navioRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()

const port = process.env.port || 8080

const cors = require('cors')
//access-control-allow-origin
app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

app.use('/user', userRoutes)
app.use('/navio', navioRoutes)
app.use('/viagem', viagemRoutes)

app.disable('x-power-by')
app.use(express.urlencoded({ extended: true }))

app.listen(port, () =>
    console.log(`Servidor a rodar em http://localhost:${port}`))

module.exports = app