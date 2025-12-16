import style from "./GeneralInformationEditor.module.css";
import { useState } from "react";

function GeneralInformationEditor({
  isVisible,
  clickHandler,
  visibilityHandler,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState(0);

  function nameHandler(event) {
    setName(event.target.value);
  }

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function contactnumberHandler(event) {
    setContactNumber(event.target.value);
  }

  return (
    <section
      className={`${style["cv-editor"]} ${
        isVisible ? "" : style["cv-editor--disabled"]
      }`}
    >
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={nameHandler}
        />
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={emailHandler}
        />
      </div>

      <div>
        <label htmlFor="contact-number">Contact Number: </label>
        <input
          type="number"
          name="contact-number"
          id="contact-number"
          value={contactNumber}
          onChange={contactnumberHandler}
        />
      </div>

      <div>
        <button
          onClick={() => {
            visibilityHandler();
            clickHandler(name, email, contactNumber);
          }}
        >
          Apply to CV
        </button>
      </div>
    </section>
  );
}

export { GeneralInformationEditor };
