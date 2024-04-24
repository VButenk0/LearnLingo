import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { EyeWrpr } from "./RegistrModal.styled";

const RegistrModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    // Handle registration logic here
    console.log(values);
    setSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h2>Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
              />
              <EyeWrpr
                className={!showPassword && "slash"}
                onClick={togglePasswordVisibility}
              >
                <div />
                <div />
              </EyeWrpr>
              <ErrorMessage name="password" />
            </div>
            <button type="submit" disabled={formik.isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RegistrModal;
