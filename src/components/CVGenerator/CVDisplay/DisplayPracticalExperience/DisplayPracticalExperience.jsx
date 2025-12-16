import { useState } from "react";
import style from "./DisplayPracticalExperience.module.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import PracticalExperienceEditor from "./ExperienceCard/PracticalExperienceContainer/PracticalExperienceContainer";

function DisplayPracticalExperience() {
  const [experienceList, setExperienceList] = useState([]);
  const [isAddVisible, setAddVisibility] = useState(false);

  function addVisibilityHandler() {
    if (!isAddVisible) {
      setAddVisibility(true);
    } else {
      setAddVisibility(false);
    }
  }

  function addExperience(
    { companyName, positionTitle, responsibilities, jobDate },
    id = crypto.randomUUID()
  ) {
    setExperienceList([
      ...experienceList,
      {
        id: id,
        companyName,
        positionTitle,
        responsibilities,
        jobDate,
      },
    ]);
  }

  function editExperience(experience) {
    const newList = experienceList.map((element) => {
      if (element.id === experience.id) {
        return { ...experience };
      }
      return element;
    });

    setExperienceList(newList);
  }

  return (
    <section className={style["display-practical-experience"]}>
      <h4>Practical Experience</h4>
      <div className={style["display-practical-experience__experience-list"]}>
        {experienceList.map((experience) => {
          return (
            <ExperienceCard
              experience={experience}
              editExperienceList={editExperience}
              key={experience.id}
            />
          );
        })}
      </div>

      <div>
        <button
          onClick={() => {
            addVisibilityHandler();
          }}
        >
          Add Experience
        </button>
      </div>

      <PracticalExperienceEditor
        isVisible={isAddVisible}
        visibilityHandler={addVisibilityHandler}
        handleExperienceList={addExperience}
      />
    </section>
  );
}

export default DisplayPracticalExperience;
