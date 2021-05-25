import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Button, Checkbox, InputNumber } from "antd";

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

const StyledInput = styled(InputNumber)`
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

  const handleSubmit = () => {
    history.push("/reservation");
  };

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor="seats">Liczba miejsc:</label>
        <StyledInput
          id="seats"
          min={1}
          max={40}
          //   defaultValue={}
          onChange={() => alert("You must add a handler ;D")}
        />
      </InputWrapper>
      <InputWrapper>
        <Checkbox id="nextTo" />
        <Label htmlFor="nextTo">Czy miejsca mają być obook siebie?</Label>
      </InputWrapper>
      <StyledButton onClick={handleSubmit}>Wybierz miejsca</StyledButton>
    </Wrapper>
  );
};
