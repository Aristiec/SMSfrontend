import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../../redux/authSlice";
import { useLoginMutation } from "../../../redux/api";
import LoginImage from "../../../assets/login_image.svg";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login({ userName : email, password }).unwrap();
      dispatch(setToken(result.token));
      navigate("/student/dashboard"); // Change to your desired route
    } catch (err) {
      // error handled by RTK Query
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left Side */}
      <div className="w-1/2 flex justify-center items-center bg-[#FAFCFD]">
        <img
          src={LoginImage}
          alt="Login Visual"
          className="max-w-[520px] max-h-[460px]"
        />
      </div>

      {/* Right Side (Form) */}
      <div className="w-1/2 flex justify-center items-center bg-[#E9EEF4]">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[450px] bg-white shadow-md rounded-lg p-10 flex flex-col gap-6"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#04203E] font-[Archivo]">
              Welcome Back
            </h1>
            <p className="text-xs text-[#04203E] font-[Inter]">
              Sign in to access your account
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 font-[Inter]">
            <label className="text-sm font-medium text-[#04203E]">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="h-10 px-3 rounded border border-[#717171] text-sm italic text-[#717171] focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 font-[Inter]">
            <label className="text-sm font-medium text-[#04203E]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="h-10 px-3 rounded border border-[#717171] text-sm italic text-[#717171] focus:outline-none"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm text-center">
              {error.data?.message || "Login failed"}
            </p>
          )}

          {/* Sign In Button */}
          <button
            type="submit"
            className="bg-[#04203E] text-white text-sm font-bold py-2 rounded"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>

          {/* Forgot Password */}
          <p
            onClick={() => navigate("/resetpassword")}
            className="text-sm text-center text-[#04203E] cursor-pointer hover:underline"
          >
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;