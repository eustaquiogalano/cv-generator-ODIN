import { FormField } from "./FormField";

function PracticalExperienceContainer() {
  return (
    <section className="practical-experience">
      <FormField
        label="Company Name: "
        type="text"
        name="company-name"
        id="company-name"
      />
      <FormField
        label="Position Title: "
        type="text"
        name="position-title"
        id="position-title"
      />
      <FormField
        label="Responsibilities: "
        type="text"
        name="responsibilities"
        id="responsibilities"
      />
      <FormField label="Job Date: " type="date" name="job-date" id="job-date" />
    </section>
  );
}

export { PracticalExperienceContainer };
