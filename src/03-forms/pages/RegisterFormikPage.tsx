import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          initialValues: {
            name: "",
            email: "",
            password1: "",
            password2: "",
          },
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Must be 2 characters or more")
            .required("Name is required"),
          email: Yup.string()
            .min(6, "Must be 6 characters or more")
            .email("Invalid email format")
            .required("Email is required"),
          password1: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Password is required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Passwords must match")
            .required("Password2 is required"),
        })}
      >
        {({ handleReset, resetForm }) => (
          <Form>
            <MyTextInput name="name" label="Name" placeholder="Type a name" />
            <MyTextInput
              name="email"
              label="Email"
              placeholder="Type a email"
            />
            <MyTextInput
              name="password1"
              label="Password"
              placeholder="Type a password"
              type="password"
            />
            <MyTextInput
              name="password2"
              label="Password"
              placeholder="Repeat password"
              type="password"
            />

            <button type="submit">Submit</button>
            <button type="button" onClick={() => resetForm}>
              Reset form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
