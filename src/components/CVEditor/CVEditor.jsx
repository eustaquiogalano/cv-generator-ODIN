import { EducationalBackgroundContainer } from "../EducationalBackgroundContainer/EducationalBackgroundContainer";
import { GeneralInformationContainer } from "../GeneralInformationContainer/GeneralInformationContainer";
import { PracticalExperienceContainer } from "../PracticalExperienceContainer/PracticalExperienceContainer";
import "./CVEditor.css";

function CVEditor() {
  return (
    <div className="cv-editor">
      <GeneralInformationContainer sectionName="cv-editor__section" />
      <EducationalBackgroundContainer sectionName="cv-editor__section" />
      <PracticalExperienceContainer sectionName="cv-editor__section" />
    </div>
  );
}

export default CVEditor;
