import React from 'react'
import css from './TodoItem.module.css'
const TodoItem = ({id, completed, text, removeTodo, toggleTodoCompleted}) => {
  return (
    <li className={css.liText}>
        <input type="checkbox" checked={completed} onChange={()=>toggleTodoCompleted(id)}/>
          <span>{text}</span>
          <button className={css.crossButton} onClick={()=>removeTodo(id)}><span className={css.crossinButton}>&times;</span></button>
    </li>
  )
}

export default TodoItem