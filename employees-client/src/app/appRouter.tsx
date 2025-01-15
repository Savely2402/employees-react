import React from 'react'
import { AppRoutes } from '@/shared/config/appRoutes'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    { path: AppRoutes.home, element: <h1>Hello its home</h1> },
    { path: AppRoutes.login, element: <h1>LOGIN</h1> },
])
