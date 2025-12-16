import style from "./CVDisplay.module.css";
import DisplayEducationalBackground from "./DisplayEducationalBackground/DisplayEducationalBackground";
import DisplayGeneralInformation from "./DisplayGeneralInformation/DisplayGeneralInformaton";
import DisplayPracticalExperience from "./DisplayPracticalExperience/DisplayPracticalExperience";

function CVDisplay() {
  return (
    <div className={style["cv-display"]}>
      <DisplayGeneralInformation />
      <hr />
      <DisplayEducationalBackground />
      <hr />
      <DisplayPracticalExperience />
    </div>
  );
}

export default CVDisplay;
