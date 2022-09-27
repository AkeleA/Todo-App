import React, { useState } from "react";
import "./App.css";
import { v4 } from "uuid";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const checkTodo = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
        console.log(todo.isCompleted);
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const newTodo = (text) => {
    const addTodo = {
      id: v4(),
      title: text,
      isCompleted: false,
    };
    setTodos([...todos, addTodo]);
  };

  return (
    <div className="wrapper">
      <h1> Let's list our tasks out! </h1>
      <div className="eating">
        <TodoForm newTodo={newTodo} />
        <TodoList todos={todos} checkTodo={checkTodo} delTodo={delTodo} />
      </div>
    </div>
  );
};

export default App;
