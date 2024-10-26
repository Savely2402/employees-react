import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { config } from 'dotenv'
import { usersRouter } from './routes/users.js'
import { employeesRouter } from './routes/employees.js'

config()

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/user', usersRouter)
app.use('/api/employees', employeesRouter)

export default app
