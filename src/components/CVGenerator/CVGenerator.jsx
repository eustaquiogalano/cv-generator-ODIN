import CVDisplay from "./CVDisplay/CVDisplay";
import CVEditor from "./CVEditor/CVEditor";
import styles from "./CVGenerator.module.css";

function CVGenerator() {
  return (
    <div className={styles["cv-generator"]}>
      <CVEditor />
      <CVDisplay />
    </div>
  );
}

export default CVGenerator;
