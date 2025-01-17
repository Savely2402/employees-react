import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({})

const persistConfig = {
    key: 'root',
    storage,
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)
