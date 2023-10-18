"use client"
import { useState } from "react";

interface NavItemsProps {
    id: number;
    name: string;
    href: string;
    icon: string;
    isActive: boolean;
}

const navItems: NavItemsProps[] = [
    { id: 1, name: "Home", href: "/", icon: "/assets/home.svg", isActive: false },
    { id: 2, name: "Transactions", href: "/transactions", icon: "/assets/transactions.svg", isActive: false },
    { id: 3, name: "Payments", href: "/payments", icon: "/assets/paymentt.svg", isActive: false },
    { id: 4, name: "Cards", href: "/cards", icon: "/assets/card.svg", isActive: false },
    { id: 5, name: "Account", href: "/account", icon: "/assets/bank.svg", isActive: false }
];

const logoMain: string = "/images/logo.svg";

const SideNav = () => {
    const [active, setActive] = useState(false);

    //click handler to identify active link
    const handleClick = () => {
        setActive(!active)
    };

    return (
        <nav className="w-full h-full bg-white">
            <div className="space-y-16 pl-8 pt-6">
                <span className="">
                    <img src={logoMain} alt="logo" className="h-9 w-auto" />
                </span>
                <div className="space-y-8">
                    {navItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4" onClick={handleClick}>
                            <img src={item.icon} className="w-5 h-5" />
                            <p className="text-base font-medium text-zinc-800">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default SideNav;