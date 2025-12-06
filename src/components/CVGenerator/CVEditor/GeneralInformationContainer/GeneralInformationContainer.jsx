import { FormField } from "../FormField/FormField";

function GeneralInformationContainer({ sectionName }) {
  return (
    <section className={sectionName}>
      <FormField label="Name: " type="text" name="name" id="name" />
      <FormField label="Email: " type="email" name="email" id="email" />
      <FormField
        label="Contact#: "
        type="number"
        name="contact-number"
        id="contact-number"
      />
    </section>
  );
}

export { GeneralInformationContainer };
