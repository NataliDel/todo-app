function Checkbox({ todoItem, handleChangeCheckbox }) {
  function handleChangeCheckboxEvent(event) {
    const updatedTodoItem = { ...todoItem };
    updatedTodoItem.done = event.target.checked;
    handleChangeCheckbox(updatedTodoItem);
  }
  return (
    <div>
      <input
        id={todoItem.id}
        type="checkbox"
        checked={todoItem.done}
        onChange={handleChangeCheckboxEvent}
      />
      <label for={todoItem.id}>{todoItem.content}</label>
    </div>
  );
}

export default Checkbox;
