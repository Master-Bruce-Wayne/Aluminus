import React, { useState } from "react";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/solid";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    gradYear: "",
    company: "",
    sector: "",
    profilePic: "",
    quote: "",
  });

  const [errors, setErrors] = useState({});

  // Validate fields dynamically
  const validateField = (name, value) => {
    let message = "";

    switch (name) {
      case "name":
        if (!value) message = "Enter your full name";
        break;
      case "email":
        if (!value) message = "Enter an email";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          message = "Invalid email format";
        break;
      case "password":
        if (!value) message = "Enter a password";
        else if (value.length < 6)
          message = "Password must be at least 6 characters";
        break;
      case "gradYear":
        if (!value) message = "Enter your graduation year";
        else if (!/^\d{4}$/.test(value))
          message = "Enter a valid 4-digit year";
        break;
      case "company":
        if (formData.role === "alumni" && !value)
          message = "Company is required for alumni";
        break;
      case "sector":
        if (formData.role === "alumni" && !value)
          message = "Sector is required for alumni";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submit
    Object.keys(formData).forEach((field) =>
      validateField(field, formData[field])
    );

    // If no errors → proceed
    if (Object.values(errors).every((err) => !err)) {
      console.log("Register Data Submitted:", formData);
      // API call here
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Image/Illustration */}
      <div className="w-3/5 bg-gray-50 flex items-center justify-center">
        {/* Add your image/illustration here */}
      </div>

      {/* Right: Register Form */}
      <div className="w-2/5 flex flex-col justify-center px-12 py-8 bg-white shadow-lg">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Join us!</h1>
          <h3 className="font-medium text-gray-700">
            Create your account below
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none ${
                errors.name ? "border-red-800" : "border-gray-300"
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-800 text-sm mt-1 flex items-center gap-1">
                <XCircleIcon className="h-5 w-5 text-red-800" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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

          {/* Graduation Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Graduation Year *
            </label>
            <input
              type="number"
              name="gradYear"
              value={formData.gradYear}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none ${
                errors.gradYear ? "border-red-800" : "border-gray-300"
              }`}
              placeholder="2025"
            />
            {errors.gradYear && (
              <p className="text-red-800 text-sm mt-1 flex items-center gap-1">
                <XCircleIcon className="h-5 w-5 text-red-800" />
                {errors.gradYear}
              </p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role *
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
            >
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
            </select>
          </div>

          {/* Alumni-only fields */}
          {formData.role === "alumni" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none ${
                    errors.company ? "border-red-800" : "border-gray-300"
                  }`}
                  placeholder="Company Name"
                />
                {errors.company && (
                  <p className="text-red-800 text-sm mt-1 flex items-center gap-1">
                    <XCircleIcon className="h-5 w-5 text-red-800" />
                    {errors.company}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sector *
                </label>
                <input
                  type="text"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  className={`mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none ${
                    errors.sector ? "border-red-800" : "border-gray-300"
                  }`}
                  placeholder="IT / Finance / Education..."
                />
                {errors.sector && (
                  <p className="text-red-800 text-sm mt-1 flex items-center gap-1">
                    <XCircleIcon className="h-5 w-5 text-red-800" />
                    {errors.sector}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-xl py-2 hover:bg-blue-700 hover:cursor-pointer transition"
          >
            Register
          </button>
        </form>

        {/* Login link */}
        <p className="mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
