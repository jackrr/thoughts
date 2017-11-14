import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './state/reducers'

let store = createStore(rootReducer)

render(
  <Provider store={store}>
    <h1>Hello world</h1>
  </Provider>,
  document.getElementById('main')
)
