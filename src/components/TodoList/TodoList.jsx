import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import css from './TodoList.module.css'
const TodoList = () => {
  const todos = useSelector(state=> state.todos.todos);
  return (
    <ul className={css.ulText}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
