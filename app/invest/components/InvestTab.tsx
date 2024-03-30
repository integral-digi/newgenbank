"use client"
import Image from "next/image";
import { Fragment } from "react";
import { investOptions } from "./Form";
import { Popover, Transition } from "@headlessui/react";
import InvestPanel from "./InvestPanel";

const InvestTab = () => {
    const handleClick = () => {
        //console.log("click")
    }
    return (
        <section className="w-full">
            <section className="flex flex-1 items-baseline justify-between flex-wrap space-y-12 lg:block">
                {investOptions[0].options.map((option, index) => (
                    <section key={index} className="w-[30%] p-8 bg-slate-900 rounded-lg h-60 lg:w-full">
                        <section className="space-y-6">
                            <section key={index} className="w-full space-y-6">
                                <section className="flex items-center justify-between w-full">
                                    <Image
                                        src={option.logo}
                                        width={24}
                                        height={24}
                                        alt={option.product}
                                    />
                                    <p className="text-base text-white font-bold">
                                        {option.product}
                                    </p>
                                    <section className="flex items-center space-x-2">
                                        <Image
                                            src="/assets/chartflow.svg" 
                                            width={16}
                                            height={16}
                                            alt="flow"
                                        />
                                        <p className="text-base text-white font-medium">
                                            {option.interest}%
                                        </p>
                                    </section>
                                </section>
                                <section className="space-y-4">
                                    <p className="text-xs text-green-500 font-medium">
                                        Duration
                                    </p>
                                    <p className="text-lg text-white font-bold">
                                        {option.duration}
                                    </p>
                                </section>
                                <Popover>
                                    <Popover.Button className="w-full rounded-full bg-transparent border border-white flex items-center justify-center p-2">
                                        <p className="text-base text-white text-center font-bold">
                                            Invest
                                        </p>
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1">
                                        <Popover.Panel className="absolute z-10 bg-slate-900 w-[40%] top-0 right-0 h-full min-h-screen p-6 space-y-4 overflow-y-scroll lg:w-[90%]">
                                            <InvestPanel />
                                        </Popover.Panel>
                                    </Transition>
                                </Popover>
                            </section>
                        </section>
                    </section>
                ))}
            </section>
        </section>
    )
}

export default InvestTab;