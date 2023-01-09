import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AppContext = createContext()
const AppContextProvider = ({children, store}) => {
    const { dispatch, getState } = store;
    
    const[state, setState] = useState(0);
    const forceUpdate = ()=>setState(prev=>prev+1);

    store.subscribe(forceUpdate);

    const val = {dispatch, getState};
    return (
        <AppContext.Provider value={val}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider