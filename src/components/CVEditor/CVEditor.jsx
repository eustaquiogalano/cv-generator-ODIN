import { EducationalBackgroundContainer } from "./EducationalBackgroundContainer";
import { GeneralInformationContainer } from "./GeneralInformationContainer";
import { PracticalExperienceContainer } from "./PracticalExperienceContainer";

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
