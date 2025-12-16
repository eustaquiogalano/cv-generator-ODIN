import { useState } from "react";
import style from "./PracticalExperienceContainer.module.css";

function PracticalExperienceEditor({
  isVisible,
  visibilityHandler,
  handleExperienceList,
}) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [jobDate, setJobDate] = useState("");

  function resetInputs() {
    setCompanyName("");
    setPositionTitle("");
    setResponsibilities("");
    setJobDate("");
  }

  return (
    <section
      className={`${style["cv-editor"]} ${
        isVisible ? "" : style["cv-editor--disabled"]
      }`}
    >
      <div>
        <label htmlFor="company-name">Company Name: </label>
        <input
          type="text"
          name="company-name"
          id="company-name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="position-title">Position Title: </label>
        <input
          type="text"
          name="position-title"
          id="position-title"
          placeholder=""
          value={positionTitle}
          onChange={(e) => setPositionTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="responsibilities">Responsibilities: </label>
        <textarea
          type="text"
          name="responsibilities"
          id="responsibilities"
          placeholder=""
          value={responsibilities}
          onChange={(e) => setResponsibilities(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="job-date">Job Date: </label>
        <input
          type="text"
          name="job-date"
          id="job-date"
          placeholder=""
          value={jobDate}
          onChange={(e) => setJobDate(e.target.value)}
        />
      </div>

      <div>
        <button
          onClick={() => {
            visibilityHandler();
            handleExperienceList({
              companyName,
              positionTitle,
              responsibilities,
              jobDate,
            });
            resetInputs();
          }}
        >
          Apply to CV
        </button>
      </div>
    </section>
  );
}

export default PracticalExperienceEditor;
