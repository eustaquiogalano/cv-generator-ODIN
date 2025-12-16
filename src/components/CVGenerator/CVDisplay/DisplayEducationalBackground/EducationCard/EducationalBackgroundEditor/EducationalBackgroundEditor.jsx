import { useState } from "react";
import style from "./EducationalBackgroundEditor.module.css";

function EducationalBackgroundEditor({
  isVisible,
  visibilityHandler,
  handleEducationList,
}) {
  const [school, setSchool] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");
  const [course, setCourse] = useState("");

  function resetInputs() {
    setSchool("");
    setDateOfStudy("");
    setCourse("");
  }

  return (
    <section
      className={`${style["cv-editor"]} ${
        isVisible ? "" : style["cv-editor--disabled"]
      }`}
    >
      <div>
        <label htmlFor="school">School:</label>
        <input
          type="text"
          name="schools"
          id="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="date-of-study">Date of Study: </label>
        <input
          type="text"
          name="date-of-study"
          id="date-of-study"
          placeholder="2023-2024"
          value={dateOfStudy}
          onChange={(e) => setDateOfStudy(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="course">Course:</label>
        <input
          type="text"
          name="course"
          id="course"
          placeholder="BSIS"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>

      <div>
        <button
          onClick={() => {
            visibilityHandler();
            handleEducationList({ school, dateOfStudy, course });
            resetInputs();
          }}
        >
          Apply to CV
        </button>
      </div>
    </section>
  );
}

export default EducationalBackgroundEditor;
