import { useState } from "react";
import "./FormField.css";

function FormField({ label = "", type, name, id, placeholder = "" }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
        {label}{" "}
      </label>
      <input
        value={value}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="form-field__input"
        onChange={handleChange}
      />
    </div>
  );
}

export { FormField };
