import { legacy_createStore as  createStore, combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'
import { todoReducer } from './todo/reducer';

// Redux - combine Reducers & Debugging
const rootReducer = combineReducers({
    todoReducer: todoReducer,
    counterReducer: counterReducer,
})

export const store  = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

store.subscribe(()=>{
    console.log('store changed', store.getState());
})