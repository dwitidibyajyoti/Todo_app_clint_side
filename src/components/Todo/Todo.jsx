import React, {useState} from 'react';
import './Todo.css';
import Update from './Update/Update';
const Todo = ({todo, TodoDelete, gatData}) => {
  const [update, setUpdate] = useState(false);

  return (
    <>
      <div key={todo._id} className="todo_list">
        <div className="deleteIconp">
          <div
            key={todo.date}
            onClick={() => {
              TodoDelete(todo._id);
              setUpdate(false);
            }}
            className="deleteIcon"
          >
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
        <div className="todoTask">
          <h1>{todo.todo} </h1>
        </div>
        <div className="updateIconp">
          <div
            className="updateIcon"
            onClick={() => {
              if (update) {
                setUpdate(false);
              } else {
                setUpdate(true);
              }
            }}
          >
            <i class="far fa-edit"></i>
          </div>
        </div>
      </div>
      {update && <Update gatData={gatData} setUpdate={setUpdate} todo={todo} />}
    </>
  );
};

export default Todo;
