import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (index) => {
    setTodos(todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleDeleteTodo = (index) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      setTodos(todos.filter((_, i) => i !== index));
    }
  };

  const handleEditTodo = (index) => {
    setIsEditing(true);
    setCurrentTodo(index);
    setNewTodo(todos[index].text);
  };

  const handleUpdateTodo = () => {
    if (newTodo.trim()) {
      setTodos(todos.map((todo, i) => (i === currentTodo ? { ...todo, text: newTodo } : todo)));
      setNewTodo("");
      setIsEditing(false);
      setCurrentTodo(null);
    }
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add or edit a todo"
        />
        {isEditing ? <button onClick={handleUpdateTodo}>Update</button> : <button onClick={handleAddTodo}>Add</button>}
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(index)} />
            <span>{todo.text}</span>
            <div>
              <button onClick={() => handleEditTodo(index)}>Edit</button>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
