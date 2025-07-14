"use client";
import React from "react";

type Props = {
  label: string;
};

export const Button = ({ label }: Props) => {
  return (
<<<<<<< HEAD
    <button
      type="submit"
      className="w-full px-6 py-4 cursor-pointer bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-[0.98] group"
    >
      <span className="flex items-center justify-center gap-2">
        {label}
        <svg
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </span>
    </button>
  );
};

=======
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

>>>>>>> 163b8d7eee36ff247c4c83e6a3fbab0549307d26
export default Button;
