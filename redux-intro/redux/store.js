import { legacy_createStore as createStore } from 'redux'
import { reducer } from './reducer.js'

const initialState = { count: 0, todos: [] }
export const store = new createStore(reducer, initialState)