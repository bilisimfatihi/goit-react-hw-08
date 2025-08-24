import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, "İsim çok kısa").required("İsim gerekli"),
  email: Yup.string()
    .email("Geçerli bir e-posta giriniz")
    .required("E-posta gerekli"),
  password: Yup.string()
    .min(7, "En az 7 karakter olmalı")
    .required("Şifre gerekli"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            Name:
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Email:
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password:
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
