import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo} from '../../redux/todoSlice';
import css from './TodoItem.module.css'
const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.liText}>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <span>{text}</span>
      <span className={css.crossButton} onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
  );
};

export default TodoItem;