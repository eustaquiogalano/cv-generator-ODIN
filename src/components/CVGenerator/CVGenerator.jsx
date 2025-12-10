import { useState } from "react";
import CVDisplay from "./CVDisplay/CVDisplay";
import CVEditor from "./CVEditor/CVEditor";
import styles from "./CVGenerator.module.css";

function CVGenerator() {
  const [isCVEditorVisible, setIsCVEditorVisible] = useState(false);

  console.log(isCVEditorVisible);

  function editCVVisibility() {
    if (isCVEditorVisible) {
      setIsCVEditorVisible(false);
    } else {
    setIsCVEditorVisible(true);
    }
  }

  return (
    <div className={styles["cv-generator"]}>
      <CVEditor isVisible={isCVEditorVisible} />
      <CVDisplay clickHandler={editCVVisibility} />
    </div>
  );
}

export default CVGenerator;
