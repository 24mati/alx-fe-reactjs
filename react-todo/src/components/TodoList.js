import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
  ]);
  const [inputText, setInputText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <form onSubmit={handleAddTodo} data-testid="todo-form">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add new todo"
          data-testid="todo-input"
        />
        <button type="submit" data-testid="add-button">Add</button>
      </form>
      
      <ul data-testid="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span
              onClick={() => handleToggleTodo(todo.id)}
              data-testid={`todo-text-${todo.id}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              data-testid={`delete-button-${todo.id}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;