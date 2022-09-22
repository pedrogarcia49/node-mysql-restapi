import {Router} from 'express'
const router = Router()
import {getEmployees, getEmployee, createEmployees, updateEmployee, deleteEmployee} from '../controllers/employees.controller.js'

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployees)

router.patch('/employees/:id', updateEmployee)

router.delete('/employees/:id', deleteEmployee)

export default router