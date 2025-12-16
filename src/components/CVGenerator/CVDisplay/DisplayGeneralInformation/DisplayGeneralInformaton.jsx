import { useState } from "react";
import { GeneralInformationEditor } from "./GeneralInformationEditor/GeneralInformationEditor";
import style from "./../CVDisplay.module.css";

function DisplayGeneralInformation() {
  const [applicantName, setApplicantName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState(0);
  const [isVisible, setVisibility] = useState(false);

  function visibilityHandler() {
    if (!isVisible) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }

  function generalInformationHandler(name, email, contactNumber) {
    setApplicantName(name);
    setEmail(email);
    setContactNumber(contactNumber);
  }

  return (
    <section className={style["cv-display__section"]}>
      <h3>{applicantName}</h3>
      <div className={style["cv-display__div"]}>
        <p>
          email: <span>{email}</span>
        </p>
        <p>
          Contact #: <span>{contactNumber}</span>
        </p>
      </div>
      <div>
        <button onClick={visibilityHandler}>Edit</button>
      </div>
      <GeneralInformationEditor
        isVisible={isVisible}
        visibilityHandler={visibilityHandler}
        clickHandler={generalInformationHandler}
      />
    </section>
  );
}

export default DisplayGeneralInformation;
