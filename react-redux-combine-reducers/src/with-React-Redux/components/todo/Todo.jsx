import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo } from '../../redux/todo/action';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
    const [title, setTitle] = useState("")

    const todos = useSelector(state=>state.todoReducer.todos);
    const dispatch = useDispatch()

    const handleAdd = ()=>{
        const payload = {
            id: uuidv4(),
            title: title,
            status: false
        }
        dispatch(addTodo(payload))
    }
    
    return (
        <div>
            <h1>Todo</h1>
            <div>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <button onClick={handleAdd}>ADD</button>
            </div>
            <div>
                {
                    todos.map(todo=>(
                        <div key={todo.id} style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                            <p>{todo.title}</p>
                            <p>{todo.status?"Done":"not Done"}</p>
                            <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
                            <button onClick={()=>dispatch(toggleTodo(todo.id))}>Toggle</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo