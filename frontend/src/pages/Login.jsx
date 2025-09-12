import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Data: ", data);
    // fetch api
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Login Form */}
      <div className="w-2/5 flex flex-col justify-center px-12 py-8 bg-white shadow-lg">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Hi there!</h1>
          <h3 className="font-medium text-gray-700">Have we met before?</h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Enter an email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="name@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
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
              {...register("password", {
                required: "Enter a password",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot password */}           {/* To implement the /forgot-password page*/}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot my password
            </Link>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-xl py-2 hover:bg-blue-700 transition"
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
          className="w-full border border-gray-400 rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
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
          <Link to="/signup" className="font-semibold text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>

      {/* Right: Image/Illustration */}
      <div className="w-3/5 bg-gray-50 flex items-center justify-center">
        {/* You’ll add your image/illustration/video here */}
      </div>
    </div>
  );
};

export default Login;
