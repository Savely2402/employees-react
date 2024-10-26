import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

/**
 *
 * @route GET api/employees
 * @desc Получение всех сотрудников
 * @access Private
 */
export const getAll = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany()

        res.status(200).json(employees)
    } catch (err) {
        res.status(400).json({ message: 'Не удалось получить сотрудников' })
    }
}

/**
 *
 * @route POST api/employees/add
 * @desc Добавление сотрудника
 * @access Private
 */
export const add = async (req, res) => {
    try {
        const { data } = req.body

        if (!data.firstName || !data.lastName || !data.adress || !data.age) {
            res.status(400).json({ message: 'Все поля обязательные' })
        }
        const employee = await prisma.user.update({
            where: {
                id: req.user.id,
            },
            data: {
                createdEmployee: {
                    create: data,
                },
            },
        })

        return res.status(201).json(employee)
    } catch (err) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
}
