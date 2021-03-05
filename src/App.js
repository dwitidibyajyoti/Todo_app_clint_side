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

      setNewTodo('');
      gatData();
    } catch (error) {
      console.log(error);
    }
  };

  const TodoDelete = async (id) => {
    try {
      await api.delete(`/delete?id=${id}`);

      gatData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gatData();
  }, []);

  return (
    <div className="App">
      <header>
        <span> Todo list</span>
      </header>
      <TodoForm newTodo={newTodo} postData={postData} onInput={onInput} />
      {todo &&
        todo.map((todo) => (
          <TodoList
            gatData={gatData}
            key={todo._id}
            TodoDelete={TodoDelete}
            todo={todo}
          />
        ))}
    </div>
  );
}

export default App;
