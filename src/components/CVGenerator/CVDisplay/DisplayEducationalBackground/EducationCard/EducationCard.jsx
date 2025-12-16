import { useState } from "react";
import EditEducationalBackgroundEditor from "./EducationalBackgroundEditor/EditEducationalBackgroundEditor";
import style from "./EducationCard.module.css";

function EducationCard({ education, editEducationList }) {
  const [isVisible, setVisibility] = useState(false);

  function visibilityHandler() {
    if (!isVisible) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }

  return (
    <div key={education.id} className={style["cv-display__div"]}>
      <p>
        School: <span>{education.school}</span>
      </p>
      <p>
        Date of Study: <span>{education.dateOfStudy}</span>
      </p>
      <p>
        Course: <span>{education.course}</span>
      </p>
      <div>
        <button
          onClick={() => {
            visibilityHandler();
          }}
        >
          Edit
        </button>
      </div>
      <EditEducationalBackgroundEditor
        isVisible={isVisible}
        visibilityHandler={visibilityHandler}
        handleEducationList={editEducationList}
        education={education}
      />
    </div>
  );
}

export default EducationCard;
