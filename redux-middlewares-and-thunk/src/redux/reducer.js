import { DEC_COUNT, INC_COUNT } from "./actionType"

const init = {
    count:0
}

export const countReducer = (store=init, action)=>{
    switch(action.type){
        case INC_COUNT:
            return {...store, count: store.count+action.payload}
        case DEC_COUNT:
            return {...store, count: store.count-action.payload}
        default:
            return store
    }
}