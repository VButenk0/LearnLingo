import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  FormStyled,
  InputStyled,
  InputsWrpr,
  SubmitBtn,
  TitleWrapper,
} from "./AuthModals.styled";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../redux/auth/operations";
import { closeModals } from "../../redux/modals/modalsSlice";

const LoginModal = () => {
  const dispatch = useDispatch();

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
    dispatch(signInThunk(values));
    setSubmitting(false);
    dispatch(closeModals());
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
          <FormStyled as={Form}>
            <InputsWrpr>
              <Field as={InputStyled} id="email" name="email" label="Email" />
              <ErrorMessage name="email">
                {(msg) => (
                  <div
                    style={{
                      color: "red",
                      position: "absolute",
                      right: "10px",
                    }}
                  >
                    {msg}
                  </div>
                )}
              </ErrorMessage>
              <Field
                as={InputStyled}
                id="password"
                name="password"
                label="Password"
                type="password"
              />
              <ErrorMessage name="password">
                {(msg) => (
                  <div
                    style={{
                      color: "red",
                      position: "absolute",
                      right: "10px",
                    }}
                  >
                    {msg}
                  </div>
                )}
              </ErrorMessage>
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

export default LoginModal;
