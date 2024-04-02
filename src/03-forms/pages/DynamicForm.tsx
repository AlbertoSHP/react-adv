import { MySelect, MyTextInput } from "../components";
import FormJson from "../data/custom-form.json";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of FormJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required(rule.message);
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        rule.message ?? "Min length is 2"
      );
    }

    if (rule.type === "email") {
      schema = schema.email(rule.message ?? "Invalid email format");
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object().shape(requiredFields);

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {FormJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    name={name}
                    type={type as any}
                    placeholder={placeholder ?? ""}
                    label={label}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} name={name} label={label}>
                    <option value="default">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={label}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
