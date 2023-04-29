const express = require('express')
const bcrypt = require('bcrypt')

const courseRoutes = require('./routes/courseRoutes')
const departmentRoutes = require('./routes/departmentRoutes')
const firmRoutes = require('./routes/firmRoutes')
const informationRoutes = require('./routes/informationRoutes')
const internshipRoutes = require('./routes/internshipRoutes')
const sciRoutes = require('./routes/sciRoutes')
const studentRoutes = require('./routes/studentRoutes')
const tokenRoutes = require('./routes/tokenRoutes')

const app = express()

const port = process.env.port || 8080

const cors = require('cors')
//access-control-allow-origin
app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

//app.use('/course/:key', userRoutes)
app.use('/course/', courseRoutes)
app.use('/department/', departmentRoutes)
app.use('/firm/', firmRoutes)
app.use('/information/', informationRoutes)
app.use('/internship/', internshipRoutes)
app.use('/sci/', sciRoutes)
app.use('/student/', studentRoutes)
app.use('/token/', tokenRoutes)



app.disable('x-power-by')
app.use(express.urlencoded({ extended: true }))

app.listen(port, () =>
    console.log(`Servidor a rodar em http://localhost:${port}`))

module.exports = app