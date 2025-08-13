import TodoItem from "../todoitem/TodoItem";

function TodoBody({ todos, handleChangeCheckbox }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todoItem={todo} handleChangeCheckbox={handleChangeCheckbox} />
      ))}
      ;
    </div>
  );
}

export default TodoBody;
