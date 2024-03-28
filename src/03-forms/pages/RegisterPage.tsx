import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    name,
    email,
    password1,
    password2,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es válido</span>}
        <input
          type="password"
          placeholder="Password"
          value={password1}
          name="password1"
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña tiene que tener 6 caracteres</span>
        )}
        <input
          type="password"
          placeholder="Repeat password"
          value={password2}
          name="password2"
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>La contraseñas debe ser iguales</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
