import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, checkTodo, delTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          checkTodo={checkTodo}
          id={todo.id}
          isCompleted={todo.isCompleted}
          delTodo={delTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
