import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
};

export const Button = ({ label }: Props) => {
  return (
    <StyledWrapper>
      <button id="bottone1">
        <strong>{label}</strong>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #bottone1 {
    padding-left: 33px;
    padding-right: 33px;
    padding-bottom: 16px;
    padding-top: 16px;
    border-radius: 9px;
    background: #febf00;
    border: none;
    font-family: inherit;
    text-align: center;
    cursor: pointer;
    transition: 0.4s;
    color: #000;
    width: 100%;
  }

  #bottone1:hover {
    box-shadow: 7px 5px 56px -14px #c3d900;
  }

  #bottone1:active {
    transform: scale(0.97);
    box-shadow: 7px 5px 56px -10px #c3d900;
  }
`;

export default Button;
