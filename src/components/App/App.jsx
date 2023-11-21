import {useState} from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../redux/todoSlice';
import NewTodoForm from '../NewTodoForm/NewTodoForm.jsx';
import TodoList from '../TodoList/TodoList';

 import css from './App.module.css';


function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
  }

  return (
    <div className={css.app}>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;