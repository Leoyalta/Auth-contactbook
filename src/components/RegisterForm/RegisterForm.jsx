import { register } from "../../redux/auth/operations.js";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import css from "./RegisterForm.module.css";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
});
export default function RegisterForm() {
  const dispatch = useDispatch();
  const id = useId();

  const handleSubmit = (values, actions) => {
    const newUser = { ...values };

    dispatch(register(newUser))
      .unwrap()
      .then(() => {
        toast.success("Registration successful!");
      })
      .catch((error) => {
        toast.error(error?.message || "Registration failed");
      });

    actions.resetForm();
  };
  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        <Form className={css.form}>
          <div className={css.fieldBox}>
            <label htmlFor={`name${id}`}>Name</label>
            <Field id={`name${id}`} name="name" placeholder="Name" />
            <ErrorMessage
              className={css.ErrorMessage}
              name="name"
              component="span"
            />
          </div>

          <div className={css.fieldBox}>
            <label htmlFor={`email${id}`}>Email</label>
            <Field
              id={`email${id}`}
              name="email"
              type="email"
              placeholder="Email"
            />
            <ErrorMessage
              className={css.ErrorMessage}
              name="email"
              component="span"
            />
          </div>

          <div className={css.fieldBox}>
            <label htmlFor={`password${id}`}>Password</label>
            <Field
              id={`password${id}`}
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage
              className={css.ErrorMessage}
              name="password"
              component="span"
            />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
