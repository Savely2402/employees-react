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
        const data = req.body

        if (!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({ message: 'Все поля обязательные' })
        }

        const employee = await prisma.employee.create({
            data: {
                userId: req.user.id,
                ...data,
            },
        })

        return res.status(201).json(employee)
    } catch (err) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
}

/**
 *
 * @route POST api/employees/remove/:id
 * @desc Удаление сотрудника
 * @access Private
 */
export const remove = async (req, res) => {
    try {
        const { id } = req.params
        const employee = await prisma.employee.delete({
            where: {
                id,
            },
        })

        return res.status(201).json(employee)
    } catch (err) {
        res.status(500).json('Не удалось удалить сотрудника')
    }
}

/**
 *
 * @route PUT api/employees/edit/:id
 * @desc Редактирование сотрудника
 * @access Private
 */
export const edit = async (req, res) => {
    try {
        const data = req.body
        const { id } = req.params

        const employee = await prisma.employee.update({
            where: {
                id,
            },
            data,
        })

        res.status(201).json(employee)
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось отредактировать сотрудника',
        })
    }
}

/**
 *
 * @route PUT api/employees/:id
 * @desc Получение сотрудника
 * @access Private
 */

export const getOne = async (req, res) => {
    try {
        const { id } = req.params

        const employee = await prisma.employee.findUnique({
            where: {
                id,
            },
        })

        return res.status(200).json(employee)
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось получить сотрудника',
        })
    }
}
