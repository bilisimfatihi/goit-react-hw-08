import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

import styles from "./LoginForm.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir e-posta giriniz")
    .required("E-posta gerekli"),
  password: Yup.string()
    .min(6, "En az 6 karakter olmalı")
    .required("Şifre gerekli"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(logIn(values));
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <label>
            Email:
            <Field type="email" name="email" />
            <ErrorMessage
              className={styles.error}
              name="email"
              component="div"
            />
          </label>
          <label>
            Password:
            <Field type="password" name="password" />
            <ErrorMessage
              className={styles.error}
              name="password"
              component="div"
            />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
