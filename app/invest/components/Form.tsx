// "use client"
import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import InvestTab from "./InvestTab";
import CfdInvest from "./CfdInvest";
import CryptoInvest from "./CryptoInvest";

export const investOptions = [
    {
        id: 1,
        name: "Stocks", 
        info: "Lower risk, Lower Interest rate, Very high success rate", 
        options: [
            {product: "Apple", interest: 16.34, duration: "24 hours", logo:"/images/apple.svg"},
            {product: "Microsoft", interest: 17.15, duration: "24 hours", logo:"/images/microsoft.svg"},
            {product: "Amazon", interest: 13.63, duration: "24 hours", logo:"/images/amazon.svg"},
            {product: "Meta", interest: 12.50, duration: "24 hours", logo:"/images/meta.svg"},
            {product: "Nvidia", interest: 14.10, duration: "24 hours", logo:"/images/nvidia.svg"},
            {product: "Tesla", interest: 11.28, duration: "24 hours", logo:"/images/tesla.svg"},
            {product: "Berkshire Hathaway", interest: 11.77, duration: "24 hours", logo:"/images/berkshire.svg"},
            {product: "Netflix", interest: 10.60, duration: "24 hours", logo:"/images/netflix.svg"},
            {product: "Chevron", interest: 10.65, duration: "24 hours", logo:"/images/chevron.svg"},
        ]
    },
    {
        id: 2,
        name: "Commodities", 
        info: "Moderate risk, Competitive Interest rate, Moderately high success rate", 
        options: [
            {product: "Crude Oil", interest: 85, duration: "24 hours", logo:"/images/oil.svg"},
            {product: "Natural Gas", interest: 16.1, duration: "24 hours", logo:"/images/gas.svg"},
            {product: "Gold", interest: 60.14, duration: "24 hours", logo:"/images/gold.svg"},
            {product: "Metals", interest: 20.82, duration: "24 hours", logo:"/images/metal.svg"},
            {product: "Silver", interest: 40.25, duration: "24 hours", logo:"/images/metal.svg"},
            {product: "Aluminium", interest: 15.09, duration: "24 hours", logo:"/images/metal.svg"},
        ]
    },
    {
        id: 3,
        name: "Cryptocurrencies", 
        info: "High risk, High Interest rate, high success rate", 
        options: [
            {product: "Bitcoin", interest: 280, duration: "24 hours", logo:"/images/btc.svg"},
            {product: "Ethereum", interest: 280, duration: "24 hours", logo:"/images/eth.svg"},
            {product: "Litecoin", interest: 280, duration: "24 hours", logo:"/images/ltc.svg"},
            {product: "XRP", interest: 280, duration: "24 hours", logo:"/images/ripple.svg"},
            {product: "Solana", interest: 280, duration: "24 hours", logo:"/images/solana.svg"},
            {product: "TRON", interest: 280, duration: "24 hours", logo:"/images/tron.svg"},
        ]
    },
];

const tabClass = "px-2 py-1 h-12 font-bold ui-selected:rounded-full ui-selected:px-4 ui-selected:bg-slate-950 ui-selected:text-gray-400 text-white";
const listClass = "flex items-center justify-between py-1 px-4 rounded-full bg-slate-900 h-12 w-full";

const InvestForm = () => {
    const [selectedTab, setSelectedTab] = useState(1);

    return (
        <section className="w-full space-y-12">
            <h3 className="text-2xl font-bold text-white">Choose your investment plan</h3>
            <section className="w-full">
                <Tab.Group>
                    <Tab.List className={listClass}>
                        {investOptions.map((option) => (
                            <Tab key={option.id} className={`${selectedTab === option.id ? "rounded-full px-8 py-1 font-bold bg-slate-950 text-gray-400 lg:px-2" : "px-2 py-1 h-12 font-bold text-white"}`} onClick={() => setSelectedTab(option.id)}>
                                {option.name}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="py-12">
                        {investOptions.map((option) => (
                            <Tab.Panel key={option.id}>
                                {option.id === 1 && <InvestTab />}
                                {option.id === 2 && <CfdInvest />}
                                {option.id === 3 && <CryptoInvest />}
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </section>
        </section>
    );
};

export default InvestForm;
