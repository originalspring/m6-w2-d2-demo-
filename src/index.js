import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'
import App from './App'

import './api/server'

import {fetchTodos} from `./features/todos/tosoSlice`
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

store.dispatch(fetchTodos())
ReactDOM.render(
  <React.StrictMode>
    <Provider store=(store)>
    <App />
    </Provider>
    <React.StrictMode>,
    document.getElementById('root')
)
