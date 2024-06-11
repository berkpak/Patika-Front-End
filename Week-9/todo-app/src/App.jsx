import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = e => {
    if (e.key === 'Enter' && newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          onKeyPress={addTodo}
        />
      </header>
      <section className='main'>
        <ul className='todo-list'>
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
              <div className='view'>
                <input
                  className='toggle'
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => toggleTodo(index)}
                />
                <label>{todo.text}</label>
                <button className='destroy' onClick={() => deleteTodo(index)} />
              </div>
            </li>
          ))}
        </ul>
      </section>
      {todos.length > 0 && (
        <footer className='footer'>
          <span className='todo-count'>
            <strong>{todos.filter(todo => !todo.completed).length}</strong> item
            {todos.filter(todo => !todo.completed).length !== 1 && 's'} left
          </span>
          <button className='clear-completed' onClick={clearCompleted}>
            Clear completed
          </button>
        </footer>
      )}
    </section>
  );
}

export default App;
