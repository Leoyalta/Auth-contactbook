import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations.js";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),
  number: Yup.number()
    .typeError("Phone number must be a valid number")
    .integer("Phone number must not contain decimals")
    .min(100000, "Phone number must have at least 6 digits")
    .max(999999999999999, "Phone number must not exceed 15 digits")
    .required("Phone number is required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const id = useId();
  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };

    dispatch(addContact(newContact));

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.FormWrapper}>
        <div className={css.InputBox}>
          <label htmlFor={`name${id}`}>Name</label>
          <Field id={`name${id}`} name="name" placeholder="Name" />
          <ErrorMessage
            className={css.ErrorMessage}
            name="name"
            component="span"
          />
        </div>

        <div className={css.InputBox}>
          <label htmlFor={`number${id}`}>Number</label>
          <Field id={`number${id}`} name="number" placeholder="Number" />
          <ErrorMessage
            className={css.ErrorMessage}
            name="number"
            component="span"
          />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
