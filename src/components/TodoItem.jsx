import React from 'react'

const TodoItem = ({ id, text, completed, toggleTodoComplete, removeTodo }) => {
    return (
        <li>
            <input type='checkbox' onChange={() => toggleTodoComplete(id)} checked={completed} />
            <span>{text}</span>
            <span className='delete' onClick={() => removeTodo(id)}>&times;</span>
        </li>
    )
}

export default TodoItem
