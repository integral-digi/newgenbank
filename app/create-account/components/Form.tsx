"use client"
import Link from "next/link";
import { useState } from "react";

const SignUpForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here, if needed
      console.log('Submitted value: ' + inputValue);
    };
    return (
        <div className="w-full space-y-8 mx-auto py-16">
            <div className="left-0 block pb-8">
                <img src="/images/logo.svg" alt="logo" className="h-12 w-auto" />
            </div>
            <div className="w-max h-20 relative space-y-4">
                <h2 className="text-slate-950 text-4xl font-black leading-10">Apply now!</h2>
                <p className="text-slate-700 text-base font-normal leading-tight">create a functional account in minutes</p>   
            </div>
            <div className="space-y-4">
                <div className="space-y-4">
                    <div className="w-full space-y-4">
                        <p className="font-bold text-slate-600 text-sm">Email Address</p>
                        <div className="w-full relative">
                            <input className="w-full h-12 pl-4 bg-transparent rounded-md border border-gray-300" id="mobile" type="email" />
                            <img src="/assets/mailicon.svg" className="h-4 w-4 absolute right-6 top-4" alt="mail" />
                        </div>
                    </div>                    
                    <div className="w-full space-y-4">
                        <p className="font-bold text-slate-600 text-sm">Tel Number</p>
                        <div className="w-full relative">
                            <input className="w-full h-12 pl-4 bg-transparent rounded-md border border-gray-300" id="mobile" type="number" />
                            <img src="/assets/dialpad.svg" className="h-4 w-4 absolute right-6 top-4" alt="dial" />
                        </div>
                    </div>
                    <div className="w-full space-y-4">
                        <p className="font-bold text-slate-600 text-sm">Password</p>
                        <div className="w-full relative">
                            <input className="w-full h-12 pl-4 bg-transparent rounded-md border border-gray-300" id="password" type="password" />
                            <img src="/assets/Eye-open.svg" className="h-4 w-4 absolute right-6 top-4" alt="eye" />
                        </div>    
                    </div>
                    <div className="w-full space-y-4">
                        <p className="font-bold text-slate-600 text-sm">Confirm Password</p>
                        <div className="w-full relative">
                            <input className="w-full h-12 pl-4 bg-transparent rounded-md border border-gray-300" id="password" type="password" />
                            <img src="/assets/Eye-open.svg" className="h-4 w-4 absolute right-6 top-4" alt="eye" />
                        </div>    
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit} className="w-full h-12 bg-slate-950 rounded-md">
                    <p className="w-max text-white text-center text-base font-bold justify-center mx-auto">Login</p>
                </button>
                <div className="w-full flex items-center mx-auto justify-center">
                    <p className="text-slate-600 text-center text-base font-medium">Already own an account?</p><Link href="/secure-login"><p className="text-slate-950 text-base font-medium">&nbsp; Login</p></Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;