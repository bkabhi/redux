import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos, handleAddTodo, handleDeleteTodo, handleUpdateTodo } from '../redux/todo/action'

const Todos = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const { todos, isLoading, isError } = useSelector(state=>state.Todo);
    // console.log(todos, isLoading, isError, " in todo ");
    
    useEffect(()=>{
        dispatch(getTodos())
    },[])

    return (
        <div>
            <h1>Todos</h1>
            <input type="text" placeholder='add todo' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={()=>dispatch(handleAddTodo(title))}>ADD</button>
            <div>
                {
                    isLoading?<h1>Loading...</h1>:isError?<h1>Error...</h1>:
                    todos.map((todo) => (
                        <div key={todo.id} className='todosList'>
                            <input type="checkbox" 
                                checked={todo.status} 
                                onChange={()=>dispatch(handleUpdateTodo(todo.id, todo.status))}
                                />
                            <label>{todo.name}</label>
                            <button onClick={()=>dispatch(handleDeleteTodo(todo.id))}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Todos