import { useState } from "react";
import style from "./ExperienceCard.module.css";
import EditPracticalExperienceContainer from "./PracticalExperienceContainer/EditPracticalExperienceContainer";

function ExperienceCard({ experience, editExperienceList }) {
  const [isVisible, setVisibility] = useState(false);

  function visibilityHandler() {
    if (!isVisible) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }

  return (
    <div key={experience.id} className={style["cv-display__div"]}>
      <p>
        Company Name: <span>{experience.companyName}</span>
      </p>
      <p>
        Position Title: <span>{experience.positionTitle}</span>
      </p>
      <p>
        Responsibilities: <span>{experience.responsibilities}</span>
      </p>
      <p>
        Job Date: <span>{experience.jobDate}</span>
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
      <EditPracticalExperienceContainer
        isVisible={isVisible}
        visibilityHandler={visibilityHandler}
        handleExperienceList={editExperienceList}
        experience={experience}
      />
    </div>
  );
}

export default ExperienceCard;
