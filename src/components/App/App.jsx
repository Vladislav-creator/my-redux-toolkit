import { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './App.module.css';
import TodoList from '../TodoList/TodoList';
import InputField from '../InputField/InputField'
export {addTodo} from '../../redux/todoSlice'

export const App = () => {

  const [text, setText] = useState('');
  const dispatch = useDispatch();
  //  const addTask = () => dispatch(addTodo(text));
  // const removeTodo = todoId => {
  //   setTodos(todos.filter(todo => todo.id !== todoId));
  // };
   const toggleTodoCompleted = todoId => {
  //   setTodos(
  //     todos.map(todo => {
  //       if (todo.id !== todoId) return todo;
  //       return {
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     })
  //   );
   };
  return (
    <div className={css.app}>
     {/* <InputField text={text} handleInput={setText} handleSubmit={addTask }/> */}
      <TodoList/>
    </div>
  );
};
