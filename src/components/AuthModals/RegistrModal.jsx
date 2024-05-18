import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signUpThunk } from "../../redux/auth/operations";
import { closeModals } from "../../redux/modals/modalsSlice";
import {
  FormStyled,
  InputStyled,
  InputsWrpr,
  SubmitBtn,
  TitleWrapper,
} from "./AuthModals.styled";

const RegistrModal = () => {
  const dispatch = useDispatch();
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
    dispatch(signUpThunk(values));
    setSubmitting(false);
    dispatch(closeModals());
  };

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
          <FormStyled as={Form}>
            <InputsWrpr>
              <Field
                as={InputStyled}
                id="username"
                name="username"
                label="Name"
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <Field
                as={InputStyled}
                id="email"
                name="email"
                label="Email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              <Field
                as={InputStyled}
                id="password"
                name="password"
                label="Password"
                type="password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </InputsWrpr>
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
