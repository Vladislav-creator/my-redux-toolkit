import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo} from '../../redux/todoSlice'
import css from './TodoItem.module.css'
const TodoItem = ({id, completed, text}) => {
  const dispatch = useDispatch();
  return (
    <li className={css.liText}>
        <input type="checkbox" checked={completed} onChange={()=>dispatch(toggleComplete({id}))}/>
          <span>{text}</span>
          <button className={css.crossButton} onClick={()=>removeTodo(id)}><span className={css.crossinButton}>&times;</span></button>
    </li>
  )
}

export default TodoItem