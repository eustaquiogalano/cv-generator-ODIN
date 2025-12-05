import { FormField } from "./FormField";

function GeneralInformationContainer() {
  return (
    <section className="general-information">
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
