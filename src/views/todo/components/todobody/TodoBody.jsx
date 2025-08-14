import TodoItem from "../todoitem/TodoItem";

function TodoBody({ todos, handleChangeCheckbox, deleteTodoItemFromList }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          todoItem={todo}
          handleChangeCheckbox={handleChangeCheckbox}
          deleteTodoItemFromList={deleteTodoItemFromList}
        />
      ))}
    </div>
  );
}

export default TodoBody;
