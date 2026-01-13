"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";



const AuthCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  interface AuthFormValues {
    email: string;
    password: string;
  }

  type ButtonEvent = React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>;

  const handleSubmit = (e: ButtonEvent): void => {
    e.preventDefault();
    const payload: AuthFormValues = { email, password };
    console.log("Login attempt:", payload);
  };

  return (
    <div className="w-[60vh] h-[50%] bg-[#567C8E] rounded-lg p-8 shadow-xl ">
      <h2 className="text-2xl font-normal text-white text-center mb-8">
        Login Or Sign In
      </h2>
      
      <div className="space-y-4">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Phone Number/Username/Email"
          className="w-full px-4 py-3 rounded bg-white text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-3 rounded bg-white text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded bg-[#405D6B] hover:bg-[#4a6a7a] text-white font-medium transition-colors"
        >
          Log in
        </button>
      </div>

      <div className="text-center text-white text-sm my-4">
        or
      </div>

      <button className="w-full py-3 rounded bg-white hover:bg-gray-50 text-gray-700 font-medium flex items-center justify-center gap-3 transition-colors">
        <FcGoogle className="w-5 h-5" />
        continue with google
      </button>

      <div className="flex justify-between items-center mt-6 text-xs">
        <button className="text-white/90 hover:text-white transition-colors">
          Forgot password ?
        </button>
        <button className="text-[#9DD4E8] hover:text-[#b3dded] transition-colors">
          Don't have an account?
        </button>
      </div>
    </div>
  );
};

export default AuthCard
