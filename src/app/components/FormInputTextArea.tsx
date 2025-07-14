"use client";
import React from "react";

type Props = {
  label: string;
  placeholder: string;
};

export const Input = ({ label, placeholder }: Props) => {
  return (
    <div className="w-full">
      <label className="block mb-2">
        <span className="text-white text-sm font-semibold">{label}</span>
        <textarea
          placeholder={placeholder}
          rows={4}
          className="w-full mt-2 px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 backdrop-blur-sm resize-vertical min-h-[100px]"
        />
      </label>
    </div>
  );
};

export default Input;
