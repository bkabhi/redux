import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { countReducer } from './reducer';
import thunk from 'redux-thunk';


const loggerMiddleware = (store) => (next) => (action) => {
    // you will have access to store, action object in your middleware function
    if(typeof action === 'function'){
        return action(store.dispatch);
    }
    // console.log("1 enter loggerMiddleware", action);
    // invoking next invokes next middleware if any in the pipeline or invokes reducer;
    return next(action);
    // console.log("1 e exit loggerMiddleware", action);
}
// const updateMiddleware = (store) => (next) => (action) => {
//     // console.log("2 enter loggerMiddleware", action);
//     // action.payload = 3
//     next(action);
//     // console.log("2 e enter loggerMiddleware", action);
// }


const rootReducers = combineReducers({
    // this contains All 
    Count: countReducer
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