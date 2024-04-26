// import { useState } from "react";
import {
  Formik,
  // Form, Field, ErrorMessage
} from "formik";
import * as Yup from "yup";
import {
  // EyeWrpr,
  FormStyled,
  InputStyled,
  InputsWrpr,
  SubmitBtn,
  TitleWrapper,
} from "./AuthModals.styled";

const RegistrModal = () => {
  // const [showPassword, setShowPassword] = useState(false);

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

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <>
      <TitleWrapper>
        <h2>Registration</h2>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      </TitleWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <FormStyled>
            <InputsWrpr>
              <InputStyled id="username" label="Name" />
              <InputStyled id="email" label="Email" />
              <InputStyled id="password" label="Password" type="password" />
            </InputsWrpr>
            {/* <div>
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
            </div> */}
            <SubmitBtn type="submit" disabled={formik.isSubmitting}>
              Sign Up
            </SubmitBtn>
          </FormStyled>
        )}
      </Formik>
    </>
  );
};

export default RegistrModal;
