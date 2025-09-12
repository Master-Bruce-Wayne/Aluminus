import React, { useState } from "react";
import { Link } from "react-router-dom";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  // validate a single field dynamically
  const validateField = (name, value) => {
    let message = "";

    if (name === "email") {
      if (!value) {
        message = "Enter an email";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = "Invalid email format";
      }
    }

    if (name === "password") {
      if (!value) {
        message = "Enter a password";
      } else if (value.length < 6) {
        message = "Password must be at least 6 characters";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateField("email", value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validateField("password", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // double-check before sending
    validateField("email", email);
    validateField("password", password);

    if (!errors.email && !errors.password) {
      console.log("Data submitted:", { email, password });
      // Call API here
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Login Form */}
      <div className="w-2/5 flex flex-col justify-center px-12 py-8 bg-white shadow-lg">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Hi there!</h1>
          <h3 className="font-medium text-gray-700">Have we met before?</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email *</label>
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={`mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none ${
                errors.email ? "border-red-800" : "border-gray-300"
                }`}
                placeholder="name@email.com"
            />
            {errors.email && (
                <p className="text-red-800 text-sm mt-1 flex items-center gap-1">
                <XCircleIcon className="h-5 w-5 text-red-800" />
                {errors.email}
                </p>
            )}
        
            </div>


          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password *
            </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className={`mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none ${
                errors.password ? "border-red-800" : "border-gray-300"
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
                <p className="text-red-800 text-sm mt-1 flex items-center gap-1">
                <XCircleIcon className="h-5 w-5 text-red-800" />
                {errors.password}
                </p>
            )}
          </div>

          {/* Forgot password */}  {/* To be developed */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-black font-semibold underline hover:text-blue-400"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-xl py-2 hover:bg-blue-700 hover:cursor-pointer transition"
          >
            Log in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google login */}
        <button
          type="button"
          className="w-full border border-gray-400 rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-gray-100 hover:cursor-pointer transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 font-medium">Log in with Google</span>
        </button>

        {/* Signup */}
        <p className="mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>

      {/* Right: Image/Illustration */}
      <div className="w-3/5 bg-gray-50 flex items-center justify-center">
        {/* You’ll add your image/illustration here */}
      </div>
    </div>
  );
};

export default Login;
