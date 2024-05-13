import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FormControlLabel, RadioGroup } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { selectIsLogged, selectSelectedTeacher } from "../../redux/selectors";
import { closeModals } from "../../redux/modals/modalsSlice";
import {
  FormStyled,
  InputStyled,
  InputsWrpr,
  OneInputWrpr,
} from "../AuthModals/AuthModals.styled";
import {
  BookingModalWrpr,
  StyledRadio,
  SubmitBtn,
  SupTextBook,
  TeacherBookWrpr,
  TeacherNameWrpr,
  TitleBooking,
} from "./BookingModal.styled";
import { signUpThunk } from "../../redux/auth/operations";

const BookingModal = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("Career and business");
  const { name, surname, avatar_url } = useSelector(selectSelectedTeacher);
  const isLogged = useSelector(selectIsLogged);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const makeCorrectMessage = () => {
    let newValue = "";
    if (value === "Career and business") {
      newValue = `With ${
        name + " " + surname
      }, your career will gain more perspective and your business will be more successful.`;
    } else if (value === "Lesson for kids") {
      newValue = `Your child will love studying with ${name + " " + surname}.`;
    } else if (value === "Living abroad") {
      newValue = `After studying with ${
        name + " " + surname
      }, you will be able to easily communicate abroad.`;
    } else if (value === "Exams and coursework") {
      newValue = `${
        name + " " + surname
      } will prepare you for any exam or coursework with top marks.`;
    } else {
      newValue = `No matter what your main reason for learning is, ${
        name + " " + surname
      } will help you achieve it.`;
    }
    return newValue;
  };

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
    toast.success(`Booking successful! ${makeCorrectMessage()}`);
  };

  const onBookClick = () => {
    dispatch(closeModals());
    toast.success(`Booking successful! ${makeCorrectMessage()}`);
  };

  return (
    <BookingModalWrpr>
      <TitleBooking>Book trial lesson</TitleBooking>
      <SupTextBook>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </SupTextBook>
      <TeacherBookWrpr>
        <img
          src={avatar_url}
          alt={name + " " + surname + " avatar"}
          width={44}
          height={44}
        />
        <TeacherNameWrpr>
          <p>Your teacher</p>
          <p>{name + " " + surname}</p>
        </TeacherNameWrpr>
      </TeacherBookWrpr>
      <div>
        <h3>What is your main reason for learning new language?</h3>
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Career and business"
            control={<StyledRadio />}
            label="Career and business"
          />
          <FormControlLabel
            value="Lesson for kids"
            control={<StyledRadio />}
            label="Lesson for kids"
          />
          <FormControlLabel
            value="Living abroad"
            control={<StyledRadio />}
            label="Living abroad"
          />
          <FormControlLabel
            value="Exams and coursework"
            control={<StyledRadio />}
            label="Exams and coursework"
          />
          <FormControlLabel
            value="Culture, travel or hobby"
            control={<StyledRadio />}
            label="Culture, travel or hobby"
          />
        </RadioGroup>
      </div>
      {!isLogged && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <FormStyled as={Form}>
              <InputsWrpr>
                <OneInputWrpr>
                  <Field
                    as={InputStyled}
                    id="username"
                    name="username"
                    label="Name"
                  />
                  <ErrorMessage name="username">
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
                </OneInputWrpr>
                <OneInputWrpr>
                  <Field
                    as={InputStyled}
                    id="email"
                    name="email"
                    label="Email"
                  />
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
                </OneInputWrpr>
                <OneInputWrpr>
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
                </OneInputWrpr>
              </InputsWrpr>
              <SubmitBtn
                type="submit"
                onClick={formik.handleSubmit}
                disabled={formik.isSubmitting}
              >
                Book
              </SubmitBtn>
            </FormStyled>
          )}
        </Formik>
      )}
      {isLogged && <SubmitBtn onClick={onBookClick}>Book</SubmitBtn>}
    </BookingModalWrpr>
  );
};

export default BookingModal;
