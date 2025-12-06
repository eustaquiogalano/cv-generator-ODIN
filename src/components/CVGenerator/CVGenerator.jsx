import CVDisplay from "./CVDisplay/CVDisplay";
import CVEditor from "./CVEditor/CVEditor";
import "./CVGenerator.css";

function CVGenerator() {
  return (
    <div className="cv-generator">
      <CVEditor />
      <CVDisplay />
    </div>
  );
}

export default CVGenerator;
