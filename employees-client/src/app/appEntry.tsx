import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { createRoot } from 'react-dom/client'
import store, { persistor } from './appStore'

const root = createRoot(document.getElementById('root')!)

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}></PersistGate>
    </Provider>
)
