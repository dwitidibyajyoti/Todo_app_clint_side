import React from 'react';
import './Todo.css';

const Todo = ({todo, TodoDelete}) => {
  return (
    <div key={todo._id} className="todo_list">
      <div
        key={todo.date}
        onClick={() => {
          TodoDelete(todo._id);
        }}
        className="deleteIcon"
      >
        <i class="fas fa-trash-alt"></i>
      </div>
      <div className="todoTask">
        <h1>{todo.todo} </h1>
      </div>
      <div className="updateIcon">
        <i class="far fa-edit"></i>
      </div>
    </div>
  );
};

export default Todo;
