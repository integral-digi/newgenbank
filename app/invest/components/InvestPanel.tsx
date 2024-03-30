"use client"
import { useState, useEffect } from "react";
import { formattedCurr } from "@/app/dashboard/components/Balances";
import { Popover } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const InvestPanel = () => {
    const [checkingBalance, setCheckingBalance] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchBalances = async () => {
        try {
          const response = await fetch('/api/balances'); // Fetch balances from backend
          if (!response.ok) {
            throw new Error('Failed to fetch balances');
          }
          const data = await response.json();
          setCheckingBalance(data.checkingBal);
        } catch (error:any) {
          setError(error.message);
        }
      };
  
      fetchBalances();
    }, []);

    const currencies = { euros: "€", dollar: "$" };

    return (
        <section className="w-full p-12 space-y-24 h-full min-h-screen mx-auto lg:w-full lg:px-6">
            <Popover.Button className="object-right">
                <XMarkIcon className="w-6 h-6 text-white" />
            </Popover.Button>
            <p className="text-white text-base font-medium">
                How much are you investing?
            </p>
            <section className="space-y-2">
                <section className="flex items-center space-x-7 w-full">
                    <span className="">
                        <p className="text-white text-2xl font-black">
                            {currencies.dollar}
                        </p>
                    </span>
                    <input
                        type="number"
                        className="w-full text-white bg-transparent border-none text-5xl font-black focus:outline-none selection:outline-none focus:border-none"
                    />
                </section>
                <hr className="w-full text-white" />
                {checkingBalance && (
                    <p className="text-sm text-white font-bold text-right">
                        Current Balance: {formattedCurr(checkingBalance)}
                    </p>
                )}
                {error && (
                    <p className="text-sm text-red-500 font-bold text-right">
                        Error: {error}
                    </p>
                )}
            </section>
            <section className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 border-slate-950 checked:bg-slate-950" />
                <p className="text-gray-300 text-sm leading-tight font-normal">
                    I agree to the <span className="underline text-indigo-400">Terms & Conditions</span>
                </p>
            </section>
            <section className="mx-auto justify-center flex">
                <button className="w-full bg-indigo-800 text-white h-12 px-8 rounded-md focus:outline-none flex items-center justify-center">
                    <p className="text-center text-base text-white font-bold">
                        Proceed
                    </p>
                </button>
            </section>
        </section>
    );
}

export default InvestPanel;
