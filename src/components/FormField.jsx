function FormField({
  label = "",
  type,
  name,
  id,
  placeholder = "",
  onChangeHandler,
}) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
        {label}{" "}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="form-field__input"
        onChange={onChangeHandler}
      />
    </div>
  );
}

export { FormField };
