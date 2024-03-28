import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            terms: false,
            jobType: "",
          },
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("First name is required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Last name is required"),
          email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
          jobType: Yup.string()
            .required("Job type is required")
            .notOneOf(["it-jr"], "IT Jr is not allowed"),
          terms: Yup.boolean()
            .required("Terms and conditions are required")
            .oneOf([true], "You must accept the terms and conditions"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="First name"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last name"
            />
            <MyTextInput label="Email" name="email" placeholder="Email" />

            <MySelect name="jobType" label="Job Type">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="it-jr">IT Jr</option>
              <option value="other">Other</option>
            </MySelect>

            <MyCheckbox name="terms" label="Terms and conditions" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      {/* <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};
