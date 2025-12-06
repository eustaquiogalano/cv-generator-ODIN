import { useState } from "react";
import style from "./FormField.module.css";

function FormField({ label = "", type, name, id, placeholder = "" }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={style["form-field"]}>
      <label htmlFor={id} className={style["form-field__label"]}>
        {label}{" "}
      </label>
      <input
        value={value}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={style["form-field__input"]}
        onChange={handleChange}
      />
    </div>
  );
}

export { FormField };
