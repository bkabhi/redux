import { ERROR_TODOS, GET_TODOS_SUCCESS, LOADING_TODOS } from "./actionType"

const initialState = {
    isLoading: false,
    isError: false,
    todos :[]
}

export const todoReducer = (store=initialState, action)=>{
    switch(action.type){
        case LOADING_TODOS:
            return { ...store, isLoading: true, isError: false }
        case GET_TODOS_SUCCESS:
            return {...store, isLoading: false,  isError:false, todos: action.payload }
        case ERROR_TODOS:
            return {...store, isLoading: false, isError: true }
        default:
            return store;
    }
}