import React from "react";

type Props = {
  label: string;
  placeholder: string;
};

export const Input = ({ label, placeholder }: Props) => {
  return (
    <label className="flex flex-col w-full">
      <span className="text-neutral-300 text-md font-bold mb-2">{label}:</span>
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none border-b border-white p-1"
      />
    </label>
  );
};

export default Input;
