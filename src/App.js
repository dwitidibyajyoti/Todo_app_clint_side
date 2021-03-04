import React, {useState, useEffect} from 'react';
import TodoForm from './components/Form/Form';
import TodoList from './components/Todo/Todo';

import api from './api/contacts';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todo, setTodo] = useState([]);

  const onInput = (e) => {
    setNewTodo(e.target.value);
  };

  const gatData = async () => {
    try {
      const {data} = await api.get('/');
      setTodo(data);
    } catch (error) {
      console.log(error);
    }
  };
  const postData = async (e) => {
    e.preventDefault();
    try {
      const {data} = await api.post('/post', {todo: newTodo});
      console.log(data);
      setNewTodo('');
      gatData();
    } catch (error) {
      console.log(error);
    }
  };

  const TodoDelete = async (id) => {
    const ddata = {
      id: id,
    };
    const jsonD = JSON.stringify(ddata);
    console.log(ddata);
    try {
      const {data} = await api.delete(`/delete?id=${id}`);
      // console.log(data);
      // console.log(id);
      gatData();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(todo);
  useEffect(() => {
    gatData();
  }, []);

  return (
    <div className="App">
      <header>
        <h1> Todo list</h1>
      </header>
      <TodoForm newTodo={newTodo} postData={postData} onInput={onInput} />
      {todo &&
        todo.map((todo) => <TodoList TodoDelete={TodoDelete} todo={todo} />)}
    </div>
  );
}

export default App;
