'use client';
import { Disclosure, Transition } from '@headlessui/react';
import { PlusSmallIcon } from '@heroicons/react/24/outline';
import {useState} from "react";

//Custom Type Declarations
interface Chevron {
    dark: JSX.Element;
    light: JSX.Element;
}

interface FaqType {
    id: number;
    step: string;
    description: string;
    icon: JSX.Element;
};

//Key Variables Usable within this module
const plusIcon: Chevron = {
    dark: <PlusSmallIcon className="w-6 h-6 relative" />,
    light: <PlusSmallIcon className="w-6 h-6 text-gray-500" />,
};

// const [disclose, setDisclose] = useState(false);

const steps: string[] = [
    "What is DollarFX?",
    "Is there a minimum deposit requirement to start trading?",
    "What kind of support does DollarFX offer?",
    "How secure is my information and funds on DollarFX?",
    "What markets can I trade on DollarFX?",
];

const stepDescription: string[] = [
    "DollarFX is a comprehensive trading platform that offers access to forex, stocks, and cryptocurrency markets. Our platform is designed to empower traders of all levels with the tools and resources they need to succeed in financial markets.",
    "DollarFX offers flexible account options with varying minimum deposit requirements depending on the type of account you choose. We strive to make trading accessible to traders of all budgets, and our account options cater to both novice and experienced traders alike.",
    "DollarFX offers dedicated customer support to assist you with any inquiries or concerns you may have. Our support team is available 24/7 via email, live chat, and phone to provide technical assistance, trading advice, and account guidance.",
    "Security is our top priority at DollarFX. We utilize industry-standard encryption protocols to protect your personal information and funds. Additionally, we offer two-factor authentication and regularly audit our security measures to ensure the highest level of protection for our clients",
    "At DollarFX, you can trade a wide range of assets including currency pairs in the forex market, stocks from global exchanges, and popular cryptocurrencies such as Bitcoin, Ethereum, and more.",
];

const stepElements: FaqType[] = steps.map((step, index) => ({
    id: index,
    step,
    description: stepDescription[index],
    icon: plusIcon.dark,
}));

//The main FAQ function (Arrow Function exported at the end of the module)
const FAQ = () => {
    return (
        <section className='w-full h-full block lg:w-full'>
            {stepElements.map((stepElement) => (
                <Disclosure as="section">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex py-6 w-full justify-between">
                                <section className='left-0 text-white text-lg font-medium lg:text-left lg:flex-wrap'>{stepElement.step}</section>
                                <section className='w-4 h-4 relative text-white'>{stepElement.icon}</section>
                            </Disclosure.Button>
                                <hr className='w-full h-px bg-slate-900 lg:w-full' />
                            <Transition
                                enter="transition duration-250 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-100 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className="py-9">
                                    <section className='text-white font-medium'>{stepElement.description}</section>
                                </Disclosure.Panel>
                                    <hr className='w-full h-px bg-slate-900 lg:w-full' />
                            </Transition>
                        </>
                    )}
                    </Disclosure>
            ))}
        </section>
    );
};

export default FAQ;