import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionType"

const initialState = {
    todos:[]
}
export const todoReducer = (store=initialState, action)=>{
    switch(action.type){
        case ADD_TODO: 
            return { ...store, todos: [ ...store.todos, action.payload ] }
        case DELETE_TODO:
            return {...store, todos: store.todos.filter(todo=>todo.id !== action.payload)}
        case TOGGLE_TODO:
            return {...store, todos: store.todos.map(todo=>todo.id===action.payload?{...todo, status: !todo.status}:todo)}
        default:
            return store
    }
}