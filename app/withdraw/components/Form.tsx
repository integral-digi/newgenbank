"use client"
import { useState } from "react";

const WithdrawForm = ({ withdrawAmt, setWithdrawAmt }: any) => {
    const [localWithdrawAmt, setLocalWithdrawAmt] = useState(withdrawAmt);
  
    const handleChange = (event: any) => {
      setLocalWithdrawAmt(event.target.value);
      setWithdrawAmt(event.target.value);
    };

    const currencies = {euros: "€", dollar: "$"};
    
    return (
        <div className="w-full h-full space-y-24 bg-slate-900 p-24 rounded-xl">
            <div className="flex items-center w-full space-x-7">
                <span className="">
                    <p className="text-white text-2xl font-black">{currencies.dollar}</p>
                </span>
                <input type="number" placeholder="0" className="w-full dark:text-white bg-transparent border-none text-slate-600 text-5xl font-black focus:outline-none selection:outline-none focus:border-none" />
            </div>
            <button id="withdrawal" className="w-full px-8 h-20 bg-transparent rounded-lg border-2 border-gray-300 border-dashed">
                <p className="text-center text-white font-bold text-base">
                    Add Wallet Address
                </p>
            </button>
        </div>
    );
};

export default WithdrawForm;