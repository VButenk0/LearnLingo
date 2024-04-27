import { useState } from "react";
import { useSelector } from "react-redux";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { selectSelectedTeacher } from "../../redux/selectors";
import { InputStyled, InputsWrpr } from "../AuthModals/AuthModals.styled";
import {
  BookingModalWrpr,
  StyledRadio,
  SubmitBtn,
  SupTextBook,
  TeacherBookWrpr,
  TeacherNameWrpr,
  TitleBooking,
} from "./BookingModal.styled";

const BookingModal = () => {
  const [value, setValue] = useState("Career and business");
  const { name, surname, avatar_url } = useSelector(selectSelectedTeacher);

  const handleChange = (event) => {
    setValue(event.target.value);
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
        <h3>What is your main reason for learning English?</h3>
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
            control={<Radio />}
            label="Lesson for kids"
          />
          <FormControlLabel
            value="Living abroad"
            control={<Radio />}
            label="Living abroad"
          />
          <FormControlLabel
            value="Exams and coursework"
            control={<Radio />}
            label="Exams and coursework"
          />
          <FormControlLabel
            value="Culture, travel or hobby"
            control={<Radio />}
            label="Culture, travel or hobby"
          />
        </RadioGroup>
      </div>
      <InputsWrpr>
        <InputStyled id="username" label="Name" />
        <InputStyled id="email" label="Email" />
        <InputStyled id="password" label="Password" type="password" />
      </InputsWrpr>
      <SubmitBtn>Book</SubmitBtn>
    </BookingModalWrpr>
  );
};

export default BookingModal;
