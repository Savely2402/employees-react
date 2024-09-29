import express from 'express'
const router = express.Router()
import { login, register, current } from '../controllers/users.js'

/* GET users listing. */
router.post('/login', login)

router.post('/register', register)

router.get('/current', current)

export { router as usersRouter }
