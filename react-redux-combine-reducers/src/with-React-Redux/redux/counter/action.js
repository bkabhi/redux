import { DEC_COUNT, INC_COUNT, RESET_COUNT } from "./actionType"

export const incCount = (payload)=>{
    return {
            type: INC_COUNT,
            payload
        }
}

export const decCount = (payload)=>{
    return {
        type: DEC_COUNT,
        payload
    }
}

export const resetCount = ()=>{
    return {
        type: RESET_COUNT
    }
}
