import { ADD_TODO, DEC_COUNT, INC_COUNT } from "./actionType.js";

export const incCount = (payload)=>({ type: INC_COUNT, payload: payload });
export const decCount = (payload)=>({ type: DEC_COUNT, payload: payload})
export const addTodo = (payload)=>({ type: ADD_TODO, payload: payload})