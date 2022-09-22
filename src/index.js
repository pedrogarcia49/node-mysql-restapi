import express from 'express'
import colors from 'colors'
import indexRoutes from './routes/index.routes.js'
import employeesRoutes from './routes/employees.routes.js'

import {APP_NAME, PORT} from './config.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found"
    })
})

app.listen(PORT)
console.log(`Server ${APP_NAME} listening on port ${PORT}`.bgMagenta)