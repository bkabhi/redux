import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decCount, incCount, resetCount } from '../redux/counter/action';

const Counter = () => {
    const count = useSelector(state=>state.Count.count);
    const dispatch= useDispatch();
    return (
        <div className="App">
            <h1>Count: {count} </h1>
            <button onClick={()=>dispatch(incCount(1))}>INC</button>
            <button onClick={()=>dispatch(decCount(1))}>DEC</button>
            <button onClick={()=>dispatch(resetCount())}>RESET</button>
        </div>
    )
}

export default Counter