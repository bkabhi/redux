import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { countReducer } from './counter/reducer.js';
import thunk from 'redux-thunk';
import { todoReducer } from './todo/reducer.js';


// const loggerMiddleware = (store) => (next) => (action) => {
//     if(typeof action === 'function'){
//         return action(store.dispatch);
//     }
//     return next(action);
// }

const rootReducers = combineReducers({
    // this contains All reducers
    Count: countReducer,
    Todo: todoReducer
})


const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

const middleware = applyMiddleware(thunk);
const enhancer = composeEnhancers(middleware);

export const store = createStore(rootReducers, enhancer);