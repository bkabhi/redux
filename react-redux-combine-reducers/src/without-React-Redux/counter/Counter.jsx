import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider';
import { decCount, incCount, resetCount } from '../redux/action';

const Counter = () => {
    const { dispatch, getState } = useContext(AppContext)
    const count = getState();
    // console.log(getState());
    return (
        <div>
            <h2>Counter: {count.count}</h2>
            <button onClick={()=>dispatch(incCount(1))}>INC</button>
            <button onClick={()=>dispatch(decCount(1))}>DEC</button>
            <button onClick={()=>dispatch(resetCount())}>RESET</button>
        </div>
    )
}

export default Counter