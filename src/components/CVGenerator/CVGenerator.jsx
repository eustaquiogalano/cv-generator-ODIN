import CVDisplay from "./CVDisplay/CVDisplay";
import styles from "./CVGenerator.module.css";

function CVGenerator() {
  return (
    <div className={styles["cv-generator"]}>
      <CVDisplay />
    </div>
  );
}

export default CVGenerator;
