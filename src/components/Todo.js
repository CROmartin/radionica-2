// src/components/Todo.js
import React from "react";

function Todo({ todo, removeTodo, updateTodo }) {
  return (
    <div className="todoHolder">
      <input
        value={todo.text}
        onChange={(e) => updateTodo(todo.id, e.target.value)}
      />

      <button className="delete" onClick={() => removeTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
