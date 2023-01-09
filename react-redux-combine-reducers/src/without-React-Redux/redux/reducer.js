import { DEC_COUNT, INC_COUNT, RESET_COUNT } from "./actionType";

const initialState = {
    count: 0,
}
export const reducer = (store=initialState, action)=>{
    switch(action.type){
        case INC_COUNT:
            return { ...store, count: store.count + action.payload }
        case DEC_COUNT:
            return { ...store, count: store.count - action.payload }
        case RESET_COUNT:
            return { ...store, count: 0 }
        default:
            return store;
    }
}