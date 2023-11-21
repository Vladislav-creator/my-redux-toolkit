import css from './NewTodoForm.module.css'
const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <label>
      <input className={css.inputChange} 
        placeholer='new todo'
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button className={css.buttonChange} onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default NewTodoForm;