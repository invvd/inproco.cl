"use client";
import React from "react";

type Props = {
  label: string;
  placeholder: string;
};

export const Input = ({ label, placeholder }: Props) => {
  return (
<<<<<<< HEAD
    <div className="w-full">
      <label className="block mb-2">
        <span className="text-white text-sm font-semibold">{label}</span>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full mt-2 px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 backdrop-blur-sm"
        />
      </label>
    </div>
=======
    <label className="flex flex-col w-full">
      <span className="text-neutral-300 text-md font-bold mb-2">{label}:</span>
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none border-b border-secondary p-1"
      />
    </label>
>>>>>>> 163b8d7eee36ff247c4c83e6a3fbab0549307d26
  );
};

export default Input;
