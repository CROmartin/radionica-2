// src/components/TodoList.js
import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, updateTodo }) {
  return (
    <div className="list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
