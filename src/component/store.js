// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './Slics.js'

let store = configureStore({
    reducer:{
        todo : todoReducer
    }
})

export { store }