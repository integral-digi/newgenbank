"use client"
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

interface SignUpFormProps {}

interface SignUpFormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  error: string | null;
}

const SignUpForm: React.FC<SignUpFormProps> = () => {
  const [formData, setFormData] = useState<SignUpFormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: null,
  });

  const { name, email, password, confirmPassword, error } = formData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData((prevState) => ({ ...prevState, error: null }));

    if (password !== confirmPassword) {
      setFormData((prevState) => ({
        ...prevState,
        error: "Passwords do not match!",
      }));
      return;
    }

    // Implement more robust email validation
    if (!email || !email.includes("@") || !email.includes(".")) {
      setFormData((prevState) => ({
        ...prevState,
        error: "Please enter a valid email address",
      }));
      return;
    }

    try {
      const response = await axios.post('././backend/routes/signup', { name, email, password });
      console.log(response.data);
      // Redirect to dashboard on successful signup
      window.location.href = '/dashboard';
    } catch (error) {
      console.error("Error signing up:", error.response.data);
      setFormData((prevState) => ({
        ...prevState,
        error: error.response.data?.message || "Signup failed",
      }));
    }
  };

  return (
    <section className="w-full space-y-8 mx-auto py-16 lg:w-full">
      <section className="left-0 block pb-8">
        <img src="/assets/logo.svg" alt="logo" className="h-12 w-auto lg:h-8" />
      </section>
      <section className="w-max h-20 relative space-y-4">
        <h2 className="text-white text-4xl font-black leading-10">Apply now!</h2>
        <p className="text-white text-base font-normal leading-tight">Apply and get a functional account in minutes</p>   
      </section>
      {error && (
        <p className="text-red-500 text-center text-base font-medium">{error}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="font-bold text-white text-sm">Full Name</p>
        <input
          type="text"
          name="name"
          id="fullname"
          className="w-full h-12 pl-4 bg-transparent text-white rounded-md border border-slate-800 font-normal"
          value={name}
          onChange={handleInputChange}
          placeholder="Full Name"
        />
        <p className="font-bold text-white text-sm">Email Address</p>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full h-12 pl-4 bg-transparent text-white rounded-md border border-slate-800 font-normal"
          value={email}
          onChange={handleInputChange}
          placeholder="Email Address"
        />
        <p className="font-bold text-white text-sm">Password</p>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full h-12 pl-4 bg-transparent text-white rounded-md border border-slate-800 font-normal"
          value={password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <p className="font-bold text-white text-sm">Confirm Password</p>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="w-full h-12 pl-4 bg-transparent text-white rounded-md border border-slate-800 font-normal"
          value={confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm Password"
        />
        <button type="submit" className="w-full h-12 bg-indigo-800 rounded-md">
          <p className="text-white text-center text-base font-bold justify-center mx-auto">
            Sign Up
          </p>
        </button>
      </form>
      <section className="w-full flex items-center mx-auto justify-center">
        <p className="text-white text-center text-base font-medium">Already own an account?</p>
        <Link href="/secure-login">
          <p className="text-indigo-400 text-base font-medium">&nbsp; Login</p>
        </Link>
      </section>
    </section>
  );
};

export default SignUpForm;
