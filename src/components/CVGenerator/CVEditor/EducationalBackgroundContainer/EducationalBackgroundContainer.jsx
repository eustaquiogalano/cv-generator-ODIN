import { FormField } from "../FormField/FormField";

function EducationalBackgroundContainer({ sectionName }) {
  return (
    <section className={sectionName}>
      <FormField label="School: " type="text" name="school" id="school" />
      <FormField
        label="Date of Study: "
        type="date"
        name="date-of-study"
        id="date-of-study"
      />
      <FormField label="Course: " type="text" name="course" id="course" />
    </section>
  );
}

export { EducationalBackgroundContainer };
