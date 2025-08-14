function Checkbox({ id, checked, content, handleChangeCheckbox }) {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChangeCheckbox}
      />
      <label for={id}>{content}</label>
    </div>
  );
}

export default Checkbox;
