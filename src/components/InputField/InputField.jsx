import React from 'react'
import css from './InputField.module.css'
const InputField = ({text, handleInput, handleSubmit}) => {
  return (
    <label>
    <input
      className={css.inputChange}
      value={text}
      onChange={e => handleInput(e.target.value)}
    />
    <button className={css.buttonChange} onClick={handleSubmit}>
      Add todo
    </button>
  </label>
  )
}

export default InputField