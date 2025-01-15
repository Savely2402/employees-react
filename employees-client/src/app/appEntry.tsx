import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { createRoot } from 'react-dom/client'
import store, { persistor } from './appStore'
import { RouterProvider } from 'react-router-dom'
import { router } from './appRouter'
import '@/shared/base.css'

const root = createRoot(document.getElementById('root')!)

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router}></RouterProvider>
        </PersistGate>
    </Provider>
)
