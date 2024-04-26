import { Formik } from "formik";
import * as Yup from "yup";
import {
  FormStyled,
  InputStyled,
  InputsWrpr,
  SubmitBtn,
  TitleWrapper,
} from "./AuthModals.styled";

const RegistrModal = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <TitleWrapper>
        <h2>Log In</h2>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
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
              <InputStyled id="email" label="Email" />
              <InputStyled id="password" label="Password" type="password" />
            </InputsWrpr>
            <SubmitBtn type="submit" disabled={formik.isSubmitting}>
              Log In
            </SubmitBtn>
          </FormStyled>
        )}
      </Formik>
    </>
  );
};

export default RegistrModal;
