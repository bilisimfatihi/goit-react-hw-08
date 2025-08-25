import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { addContact } from "../../redux/contacts/operations";

import styles from "./ContactForm.module.css";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  number: Yup.string()
    .matches(/^\d+$/, "Only numbers are allowed")
    .required("Number is required"),
});

const ContactsFrom = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form1}>
        <div className={styles.form}>
          <Field placeholder="Name" type="text" name="name" />
          <Field placeholder="Tel" type="text" name="number" />
          <button type="submit">Add Contact</button>
        </div>
        <div className={styles.error}>
          <ErrorMessage name="name" component="p" />
          <ErrorMessage name="number" component="p" />
        </div>
      </Form>
    </Formik>
  );
};

export default ContactsFrom;
