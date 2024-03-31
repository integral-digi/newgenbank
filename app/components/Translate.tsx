"use client"
import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const languageOptions = [
    { id: 1, name: "EN", available: true },
    { id: 2, name: "ESP", available: true },
    { id: 3, name: "POR", available: true },
    { id: 4, name: "RU", available: false },
]

const TranslateBox = () => {
    const [selectedoption, setSelectedoption] = useState(languageOptions[0]);
    return (
        <section className="w-18">
            <Listbox value={selectedoption} onChange={setSelectedoption}>
                <section className="relative">
                    <Listbox.Button className="relative h-12 w-full cursor-default font-medium text-white rounded-lg bg-transparent py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">{selectedoption.name}</Listbox.Button>
                    <ChevronDownIcon className="h-4 w-4 text-white absolute right-4 top-4" />
                </section>    
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-fit lg:w-fit overflow-auto rounded-md bg-white py-1 text-base font-medium shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {languageOptions.map((option) => (
                            <Listbox.Option
                                className={({ active }) =>
                                `relative font-medium cursor-default select-none py-2 pl-4 pr-4 ${
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
    )
}

export default TranslateBox;