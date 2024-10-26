import express from 'express'
const router = express.Router()
import { login, register, current } from '../controllers/users.js'
import { auth } from '../middleware/auth.js'
import { add, getAll } from '../controllers/employees.js'

/* api/employees */
router.get('/', auth, getAll)

/* api/employees/:id */
router.get('/:id', auth, () => console.log('Get single employee'))

/* api/employees/add */
router.post('/add', auth, add)

/* api/employees/remove/:id */
router.delete('/remove/:id', auth, () => console.log('Delete employee'))

/* api/employees/edit/:id */
router.put('/edit/:id', auth, () => console.log('Update employee'))

export { router as employeesRouter }
