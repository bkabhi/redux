import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decCount, incCount, resetCount } from '../../redux/counter/action';

const Counter = () => {
    const count = useSelector(state=>state.counterReducer.count);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={()=>dispatch(incCount(1))}>INC</button>
            <button onClick={()=>dispatch(decCount(1))}>DEC</button>
            <button onClick={()=>dispatch(resetCount())}>RESET</button>
        </div>
    )
}

export default Counter