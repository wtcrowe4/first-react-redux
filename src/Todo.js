import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, toggleItem, clearAll } from './features/todoSlice';

const Todo = () => {
    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [inputTodo, setInputTodo] = useState('')
    
    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <div key={index}>
                    <input type="checkbox" onChange={() => dispatch(toggleItem(index))} checked={item.completed} />
                    <span style={{color:"#282c34", fontSize:"1.5rem", textDecoration: item.completed ? 'line-through' : 'none' }}>{item}</span>
                    <button onClick={() => dispatch(removeItem(index))} 
                        style={{fontSize: ".5rem", 
                        paddingTop: "2px", 
                        paddingBottom: "2px"}
                        }>Remove</button>
                </div>
            )
        }).reverse()
    }
    const inputTodoSubmit = (e) => {
        e.preventDefault()
        dispatch(addItem(inputTodo))
        setInputTodo('')
    }

    return (
        <div>
            <h1 style={{color: "#282c34"}}>
                Todo List
            </h1>
            <ul>
                {renderItems()}
            </ul>
            <form onSubmit={e => inputTodoSubmit(e)}>
                <input type="text" onChange={e => setInputTodo(e.target.value)} value={inputTodo} />
                <button type="submit" style={{fontSize: "1rem", 
                        paddingTop: "4px", 
                        paddingBottom: "4px"}
                    }>Add Todo</button>
            </form>
            
            <button onClick={() => dispatch(clearAll())}>Clear Todos</button>
        </div>
    )
}

export default Todo;