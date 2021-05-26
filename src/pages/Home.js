import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Button, Checkbox, Input } from "antd";

const Wrapper = styled.section`
  width: 28vw;
  max-width: 350px;
  min-width: 300px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const StyledInput = styled(Input)`
  width: 50%;
  display: inline-block;
  border-color: black;
`;

const Label = styled.label`
  position: absolute;
  left: 25px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  border-color: black;
`;

export const Home = () => {
  const history = useHistory();
  const [numOfSeats, setNumOfSeats] = useState("");
  const [nextTo, setNextTo] = useState(false);

  const handlenNumberInputChange = (e) => {
    const num = e.target.validity.valid ? e.target.value : numOfSeats;
    setNumOfSeats(num);
  };

  const handleCheckboxChange = () => {
    setNextTo((prevState) => !prevState);
  };

  const handleSubmit = () => {
    history.push("/reservation");
  };

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor="seats">Liczba miejsc:</label>
        <StyledInput
          id="seats"
          pattern="[0-9]*"
          onChange={handlenNumberInputChange}
          value={numOfSeats}
        />
      </InputWrapper>
      <InputWrapper>
        <Checkbox
          id="nextTo"
          checked={nextTo}
          onChange={handleCheckboxChange}
        />
        <Label htmlFor="nextTo">Czy miejsca mają być obook siebie?</Label>
      </InputWrapper>
      <StyledButton onClick={handleSubmit}>Wybierz miejsca</StyledButton>
    </Wrapper>
  );
};
