import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import { InputStyled, InputsWrpr } from "../AuthModals/AuthModals.styled";

const BookingModal = () => {
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <h2>Book trial lesson</h2>
      <p>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div>{/* Teacher information */}</div>
      <div>
        <h3>What is your main reason for learning English?</h3>
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Career and business"
            control={<Radio />}
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
    </>
  );
};

export default BookingModal;
