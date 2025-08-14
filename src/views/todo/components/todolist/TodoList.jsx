import TodoHeader from "../todoheader/TodoHeader";
import TodoBody from "../todobody/TodoBody";
import { useState } from "react";
import "./TodoList.css";

function TodoList({}) {
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

  function addTodoItemToList(todoItem) {
    const updatedTodos = [...todos];
    updatedTodos.push(todoItem);
    setTodos(updatedTodos);
  }

  function deleteTodoItemFromList(todoId) {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
  }

  return (
    <div class="todo-list">
      <TodoHeader addTodoItemToList={addTodoItemToList} />
      <TodoBody
        todos={todos}
        handleChangeCheckbox={handleChangeCheckbox}
        deleteTodoItemFromList={deleteTodoItemFromList}
      />
    </div>
  );
}

export default TodoList;
