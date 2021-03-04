import React from 'react';
import './Form.css';

const Form = ({onInput, postData, newTodo}) => {
  return (
    <form onSubmit={postData}>
      <input
        type="text"
        className="todo_input"
        onChange={(e) => {
          onInput(e);
        }}
        onClick={(e) => {
          e.target.value = '';
        }}
        value={newTodo}
      />

      <button className="button_main" type="submit">
        <i className="fas fa-angle-double-right"></i>
      </button>
    </form>
  );
};

export default Form;
