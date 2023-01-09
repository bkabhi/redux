import { ERROR_TODOS, GET_TODOS_SUCCESS, LOADING_TODOS } from "./actionType"
import axios from 'axios';
const baseUrl = 'https://bkabhi-mock-server-app.onrender.com/todos'
export const getLoadingTodos = ()=>{
    return {
        type: LOADING_TODOS,
    }
}

export const getTodosSuccess = (data)=>{
    return {
        type: GET_TODOS_SUCCESS,
        payload: data
    }
}

export const getTodosError = ()=>{
    return {
        type: ERROR_TODOS
    }
}


export const getTodos = () => async(dispatch) => {
    try {
        dispatch(getLoadingTodos());
        const res = await axios.get(baseUrl);
        dispatch(getTodosSuccess(res.data));
    } catch (error) {
        dispatch(getTodosError(error));
    }
}

export const handleAddTodo = (title) => async(dispatch) => {
    const payload = {
        name: title,
        status: false,
    }
    try {
        dispatch(getLoadingTodos());
        await axios.post(baseUrl, payload);
        dispatch(getTodos())
    } catch (error) {
        dispatch(getTodosError(error));
    }
}

export const handleUpdateTodo = (id, status) => async(dispatch) => {
    const payload = {
        status: !status,
    }
    try {
        dispatch(getLoadingTodos());
        axios.patch(baseUrl+"/"+id, payload);
        dispatch(getTodos())
    } catch (error) {
        dispatch(getTodosError(error));
    }
}

export const handleDeleteTodo = (id) => async(dispatch) => {
    try {
        dispatch(getLoadingTodos());
        await axios.delete(baseUrl + "/" + id);
        dispatch(getTodos())
    } catch (error) {
        dispatch(getTodosError(error));
    }
}