import React, {useState, useEffect} from 'react';
import './Update.css';

import api from '../../../api/contacts';

const Update = ({todo, setUpdate, gatData}) => {
  const [upDateTodo, setUpdateTodo] = useState('');
  const [buttonDown, setButtonDown] = useState(false);

  const updateTodo = async () => {
    const data = {id: todo._id, todo: upDateTodo};
    setButtonDown(true);

    console.log(data);
    try {
      const dta = await api.put('/update', data);
      console.log(dta);
      setButtonDown(false);
      gatData();
      setTimeout(() => {
        setUpdate(false);
      }, 400);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUpdateTodo(todo.todo);
  }, []);
  return (
    <div className="updateFild">
      <input
        className="updateINput"
        onChange={(e) => {
          setUpdateTodo(e.target.value);
        }}
        value={upDateTodo}
        type="text"
      />
      <button
        onClick={updateTodo}
        className={buttonDown ? 'updBtn buttonDown' : 'updBtn'}
      >
        Update
      </button>
    </div>
  );
};

export default Update;
