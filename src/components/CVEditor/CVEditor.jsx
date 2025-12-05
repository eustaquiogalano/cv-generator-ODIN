import { EducationalBackgroundContainer } from "../EducationalBackgroundContainer/EducationalBackgroundContainer";
import { GeneralInformationContainer } from "../GeneralInformationContainer/GeneralInformationContainer";
import { PracticalExperienceContainer } from "../PracticalExperienceContainer/PracticalExperienceContainer";

function CVEditor() {
  return (
    <div>
      <GeneralInformationContainer />
      <EducationalBackgroundContainer />
      <PracticalExperienceContainer />
    </div>
  );
}

export default CVEditor;
