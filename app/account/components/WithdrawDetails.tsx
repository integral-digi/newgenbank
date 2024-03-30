"use client"
import { useState, Fragment } from "react";
import { inputStyle, pStyle, sectionStyle }  from "./Personal";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const withdrawOptions = [
    { id: 1, name: "Bitcoin", available: true },
    { id: 2, name: "Ethereum", available: true },
    { id: 3, name: "USDT", available: true },
    { id: 4, name: "Bank Transfer", available: false },
]

const WithdrawInfo = () => {
    const [selectedoption, setSelectedoption] = useState(withdrawOptions[0]);
    return (
        <section className="w-[60%] space-y-8 lg:w-full">
            <section className={sectionStyle}>
                <p className={pStyle}>Withdrawal Method</p>
                <Listbox value={selectedoption} onChange={setSelectedoption}>
                <section className="relative">
                    <Listbox.Button className="relative h-12 w-full cursor-default font-medium rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">{selectedoption.name}</Listbox.Button>
                    <ChevronDownIcon className="h-4 w-4 text-slate-700 absolute right-4 top-4" />
                </section>    
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-[46%] lg:w-[80%] overflow-auto rounded-md bg-white py-1 text-base font-medium shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {withdrawOptions.map((option) => (
                            <Listbox.Option
                                className={({ active }) =>
                                `relative font-medium cursor-default select-none py-2 pl-10 pr-4 ${
                                active ? 'bg-indigo-800 text-white' : 'text-slate-900'
                                }`
                            }
                                key={option.id}
                                value={option}
                                disabled={!option.available}
                            >
                                {option.name}
                            </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </Listbox>
            </section>
            <section className={sectionStyle}>
                <p className={pStyle}>Wallet Address</p>
                <input type="text" className={inputStyle} />
            </section>
            <button className="text-white text-lg font-bold bg-indigo-800 w-48 h-12 rounded-lg">Save Changes</button>
        </section>
    )
}

export default WithdrawInfo;