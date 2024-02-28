import { useEffect, useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import "./index.css"

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if(localValue == null) return []
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos])

  const toggleTodo = (id, completed) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed};
      }
      return todo;
    }));
  }

  const addTodo = (title) => {
    setTodos([...todos, { id: crypto.randomUUID(), title: title, completed: false }]);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <h1>What are you doing today?</h1>
      <NewTodoForm onSubmit={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </>
  );
}