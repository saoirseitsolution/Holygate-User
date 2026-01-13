"use client";

import React, { InputHTMLAttributes } from "react";

export const TextInput = ({
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  required = false,
  error = "",
}: InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
}) => {
  return (
    <div className="w-full mb-4">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded-lg border border-gray-300 px-4 py-2 text-sm bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};
