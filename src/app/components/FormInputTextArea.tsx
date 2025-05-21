import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
  placeholder: string;
};

export const Input = ({ label, placeholder }: Props) => {
  return (
    <StyledWrapper>
      <label>
        <span className="text-neutral-300 text-md font-bold mb-20">
          {label}:
        </span>
        <textarea placeholder={placeholder} className="input mt-2" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
    border-radius: 10px;
    outline: 2px solid #febf00;
    border: 0;
    background-color: transparent;
    outline-offset: 3px;
    padding: 10px 1rem;
    transition: 0.25s;
    color: #fff;
    width: 100%;
  }

  .input:focus {
    outline-offset: 5px;
  }
`;

export default Input;
