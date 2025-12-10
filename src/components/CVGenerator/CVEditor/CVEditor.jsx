import { EducationalBackgroundContainer } from "./EducationalBackgroundContainer/EducationalBackgroundContainer";
import { GeneralInformationContainer } from "./GeneralInformationContainer/GeneralInformationContainer";
import { PracticalExperienceContainer } from "./PracticalExperienceContainer/PracticalExperienceContainer";
import style from "./CVEditor.module.css";

function CVEditor({ isVisible, clickHandler }) {
  return (
    <div
      className={`${style["cv-editor"]} ${
        isVisible ? "" : style["cv-editor--disabled"]
      }`}
    >
      <GeneralInformationContainer sectionName={style["cv-editor__section"]} />
      <EducationalBackgroundContainer
        sectionName={style["cv-editor__section"]}
      />
      <PracticalExperienceContainer sectionName={style["cv-editor__section"]} />
      <div>
        <button onClick={clickHandler}>Apply and Exit</button>
      </div>
    </div>
  );
}

export default CVEditor;
