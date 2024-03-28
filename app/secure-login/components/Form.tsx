"use client"
import { useState } from "react";
import axios from "axios"; 
import Link from "next/link";

interface LoginFormData {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null); // State for error message

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    const { email, password } = formData;

    try {
      const response = await axios.post("/login", { email, password });
      console.log("Login successful:", response.data);
      // Handle successful login
      window.location.href = '/dashboard';
    } catch (error: any) {
      console.error("Error logging in:", error.response.data);
      setError(error.response.data?.message || "Login failed"); 
    }
  };

  return (
    <section className="w-80 space-y-8 mx-auto py-16 lg:w-full">
      <section className="left-0 block pb-8">
        <img src="/assets/logo.svg" alt="logo" className="h-12 w-auto lg:h-8" />
      </section>
      <section className="w-max h-20 relative space-y-4">
        <h2 className="text-slate-950 text-4xl font-black leading-10">Welcome Back!</h2>
        <p className="text-gray-300 text-base font-normal leading-tight">Login to access to your account</p>   
      </section>
      {error && <p className="text-red-500 text-center text-base font-medium">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <section className="w-full space-y-4">
          <section className="w-full space-y-4">
            <p className="font-bold text-white text-sm">Email Address</p>
            <section className="w-full relative">
              <input
                className="w-full h-12 pl-4 bg-transparent text-white rounded-lg border border-slate-800 font-medium"
                id="email"
                type="email"
                name="email" // Added name for form data
                value={formData.email}
                onChange={handleInputChange}
              />
              <img src="/assets/mailicon.svg" className="h-4 w-4 absolute right-6 top-4" alt="mail" />
            </section>
          </section>
          <section className="w-full space-y-4">
            <p className="font-bold text-white text-sm">Password</p>
            <section className="w-full relative">
              <input
                className="w-full h-12 pl-4 bg-transparent text-white rounded-lg border border-slate-800 font-medium"
                id="password"
                type={showPassword ? "text" : "password"} // Toggle password visibility
                name="password" //
                value={formData.password}
                onChange={handleInputChange}
              />
              <img
                src="/assets/Eye-open.svg"
                className="h-4 w-4 absolute right-6 top-4 cursor-pointer"
                alt="eye"
                onClick={() => setShowPassword(!showPassword)} 
              />
            </section>
          </section>
        </section>
        <section className="flex items-center justify-between py-4">
          <section className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 border-slate-950 checked:bg-slate-950" />
            <p className="text-gray-300 text-sm leading-tight font-normal">Remember me</p>
          </section>
          <Link className="text-right text-indigo-400 text-sm font-normal" href="#">
            Forgot Password?
          </Link>
        </section>
        <button type="submit" className="w-full h-12 bg-indigo-800 rounded-lg">
          <p className="w-max text-white text-center text-base font-bold justify-center mx-auto">Login</p>
        </button>
      </form>
      <section className="w-full flex items-center mx-auto justify-center">
        <p className="text-white text-center text-base font-medium">No account yet?</p>
        <Link href="/create-account">
          <p className="text-indigo-400 text-base font-medium">&nbsp; Create Account</p>
        </Link>
      </section>
    </section>
  );
};

export default SignInForm;
