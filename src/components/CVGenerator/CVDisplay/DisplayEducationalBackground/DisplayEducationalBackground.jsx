import { useState } from "react";
import style from "./DisplayEducationalBackground.module.css";
import EducationCard from "./EducationCard/EducationCard";
import EducationalBackgroundEditor from "./EducationCard/EducationalBackgroundEditor/EducationalBackgroundEditor";

function DisplayEducationalBackground() {
  const [educationList, setEducationList] = useState([]);
  const [isAddVisible, setAddVisibility] = useState(false);

  function addVisibilityHandler() {
    if (!isAddVisible) {
      setAddVisibility(true);
    } else {
      setAddVisibility(false);
    }
  }

  function addEducation(
    { school, dateOfStudy, course },
    id = crypto.randomUUID()
  ) {
    setEducationList([
      ...educationList,
      {
        id,
        school,
        dateOfStudy,
        course,
      },
    ]);
  }

  function editEducation(education) {
    const newList = educationList.map((element) => {
      if (element.id === education.id) {
        return { ...education };
      }
      return element;
    });

    setEducationList(newList);
  }

  return (
    <section className={style["display-educational-background"]}>
      <h4>Educational Background</h4>
      <div className={style["display-educational-background__education-list"]}>
        {educationList.map((education) => {
          return (
            <EducationCard
              education={education}
              editEducationList={editEducation}
              key={education.id}
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
          Add Education
        </button>
      </div>

      <EducationalBackgroundEditor
        isVisible={isAddVisible}
        visibilityHandler={addVisibilityHandler}
        handleEducationList={addEducation}
      />
    </section>
  );
}

export default DisplayEducationalBackground;
