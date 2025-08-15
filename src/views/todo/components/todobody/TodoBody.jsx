import TodoItem from "../todoitem/TodoItem";
import "./TodoBody.css";
function TodoBody({ todos, handleChangeCheckbox, deleteTodoItemFromList }) {
  function showNoTodoItems() {
    if (todos.length === 0) {
      return <span>Keine Todo's</span>;
    }
  }
  return (
    <div class="todo-body">
      {todos.map((todo) => (
        <TodoItem
          todoItem={todo}
          handleChangeCheckbox={handleChangeCheckbox}
          deleteTodoItemFromList={deleteTodoItemFromList}
        />
      ))}
      {showNoTodoItems()}
    </div>
  );
}

export default TodoBody;
