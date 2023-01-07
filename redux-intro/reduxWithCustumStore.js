const reducer = (store, action) => {
    switch (action.type) {
        case 'INC_COUNT':
            return { ...store, count: store.count + action.payload }
        case 'DEC_COUNT':
            return { ...store, count: store.count - action.payload }
        case 'ADD_TODO':
            return { ...store, todos :[ ...store.todos, action.payload] }
        default:
            return store
    }
}

class Store{
    constructor(reducer, initialState){
        this.reducer = reducer
        this.state = initialState
    }
    getState(){
        return this.state
    }
    dispatch(action){
        this.state = this.reducer(this.state, action)
    }
}

const initialState = { count: 0, todos: [] }

const store = new Store(reducer, initialState)


const INC_COUNT = 'INC_COUNT'
const DEC_COUNT = 'DEC_COUNT'
const ADD_TODO = 'ADD_TODO'

const incCount = (payload)=>({ type: INC_COUNT, payload: payload });
const decCount = (payload)=>({ type: DEC_COUNT, payload: payload})
const addTodo = (payload)=>({ type: ADD_TODO, payload: payload})

store.dispatch(incCount(1))
store.dispatch(incCount(1))
store.dispatch(incCount(1))
store.dispatch(incCount(1))
store.dispatch(decCount(1))
store.dispatch(addTodo({ id: 1, title: "10lakh+ job", status: true}))

console.log(store.getState());
