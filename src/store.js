import { configureStore } from "@reduxjs/toolkit";

import todoReducer from './features/todos/todoSlice'
import filterReducer from './features/filters/filterSlice'

const store = configureStore({
  reducer:{
    todos: todoReducer,
    filter:filterReducer,
  },
})

export default store