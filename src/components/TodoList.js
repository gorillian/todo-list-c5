import { useState } from "react";
import TodoItems from "./TodoItems";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [focusedTodo, setFocusedTodo] = useState("");

  function handleDeleteClick(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function handleSubmit(e) {
    const newTodo = {
      id: todos.at(-1)?.id + 1 || 1,
      title: `${focusedTodo}`,
      done: false,
    };
    e.preventDefault();
    setTodos((todos) => [...todos, newTodo]);
    setFocusedTodo("");
  }

  function renderTodos() {
    return todos.map((todo) => {
      console.log(todo.id);
      return (
        <div key={todo.id}>
          <TodoItems todo={todo} handleDeleteClick={handleDeleteClick} />
        </div>
      );
    });
  }

  return (
    <>
      <h1>TODO LIST</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="add-todo"
          placeholder="Add Todo"
          value={focusedTodo}
          onChange={(e) => setFocusedTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {renderTodos()}
    </>
  );
}

// Todo List: Add todo items, complete todo items, delete todos, and render todos

// todo:
// {id: int, unique,
//  title: str,
//  done:boolean} algorithm to create an id thats greater than the last one.
