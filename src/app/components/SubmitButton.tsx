import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
};

export const Button = ({ label }: Props) => {
  return (
    <StyledWrapper>
      <button
        className="hover:bg-secondary outline-2 outline-secondary bg-transparent"
        id="bottone1"
      >
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
    border: none;
    font-family: inherit;
    text-align: center;
    cursor: pointer;
    transition: 0.4s;
    color: #fff;
    width: 150px;
  }

  #bottone1:hover {
    background-color: --secondary;
    color: #000;
    transform: scale(1.05);
  }

  #bottone1:active {
    transform: scale(0.97);
  }
`;

export default Button;
