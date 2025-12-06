import { EducationalBackgroundContainer } from "./EducationalBackgroundContainer/EducationalBackgroundContainer";
import { GeneralInformationContainer } from "./GeneralInformationContainer/GeneralInformationContainer";
import { PracticalExperienceContainer } from "./PracticalExperienceContainer/PracticalExperienceContainer";
import style from "./CVEditor.module.css";

function CVEditor() {
  return (
    <div className={style["cv-editor"]}>
      <GeneralInformationContainer sectionName={style["cv-editor__section"]} />
      <EducationalBackgroundContainer
        sectionName={style["cv-editor__section"]}
      />
      <PracticalExperienceContainer sectionName={style["cv-editor__section"]} />
    </div>
  );
}

export default CVEditor;
