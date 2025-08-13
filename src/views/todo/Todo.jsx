import TodoItem from "./components/todoitem/TodoItem";
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    { id: Math.random(), content: "Wäsche waschen", done: true },
  ]);

  function handleChangeCheckbox(todoItem) {
    console.log(todoItem);
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    console.log(todoItemIndex);
    const updatedTodos = [...todos];
    console.log(updatedTodos);
    console.log(todos);
    updatedTodos.splice(todoItemIndex, 1, todoItem);
    console.log(updatedTodos);
    setTodos(updatedTodos);
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todoItem={todo} handleChangeCheckbox={handleChangeCheckbox} />
      ))}
    </div>
  );
}

export default Todo;
