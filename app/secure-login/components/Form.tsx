"use client"
import Link from "next/link";
import { useState } from "react"

const SignInForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here, if needed
      console.log('Submitted value: ' + inputValue);
    };
    return (
        <div className="w-80 space-y-8 mx-auto py-16">
            <div className="left-0 block pb-8">
                <img src="/images/logo.svg" alt="logo" className="h-12 w-auto" />
            </div>
            <div className="w-max h-20 relative space-y-4">
                <h2 className="text-slate-950 text-4xl font-black leading-10">Welcome Back!</h2>
                <p className="text-gray-500 text-base font-normal leading-tight">Login to access to your account</p>   
            </div>
            <div className="space-y-4">
                <div className="space-y-4">
                    <div className="w-full space-y-4">
                        <p className="font-bold text-slate-600 text-sm">Email Address</p>
                        <div className="w-full relative">
                            <input className="w-full h-12 pl-4 bg-transparent rounded-lg border border-gray-300 font-medium" id="email" type="email" />
                            <img src="/assets/mailicon.svg" className="h-4 w-4 absolute right-6 top-4" alt="dial" />
                        </div>
                    </div>
                    <div className="w-full space-y-4">
                        <p className="font-bold text-slate-600 text-sm">Password</p>
                        <div className="w-full relative">
                            <input className="w-full h-12 pl-4 bg-transparent rounded-lg border border-gray-300 font-medium" id="password" type="password" />
                            <img src="/assets/Eye-open.svg" className="h-4 w-4 absolute right-6 top-4" alt="eye" onClick={()=>(setShowPassword(!showPassword))} />
                        </div>    
                    </div>
                </div>
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 border-slate-950 checked:bg-slate-950" />
                        <p className="text-gray-600 text-sm leading-tight font-normal">Remember me</p>
                    </div>
                    <Link className="text-right text-slate-950 text-sm font-normal" href="#">Forgot Password?</Link>
                </div>
                <button type="submit" onClick={handleSubmit} className="w-full h-12 bg-slate-950 rounded-lg">
                    <p className="w-max text-white text-center text-base font-bold justify-center mx-auto">Login</p>
                </button>
                <div className="w-full flex items-center mx-auto justify-center">
                    <p className="text-slate-600 text-center text-base font-medium">No account yet?</p><Link href="/create-account"><p className="text-slate-950 text-base font-medium">&nbsp; Create Account</p></Link>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;