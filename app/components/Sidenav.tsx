"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

interface NavItemsProps {
    id: number;
    name: string;
    href: string;
    icon: string;
    isActive: boolean;
}

export const navItems: NavItemsProps[] = [
    { id: 1, name: "Home", href: "/", icon: "/assets/home.svg", isActive: false },
    { id: 2, name: "Trades", href: "/trades", icon: "/assets/transactions.svg", isActive: false },
    { id: 3, name: "Deposit", href: "/deposit", icon: "/assets/dollar.svg", isActive: false },
    { id: 4, name: "Loans", href: "/loans", icon: "/assets/paymentt.svg", isActive: false },
    { id: 5, name: "Support", href: "/support", icon: "/assets/help.svg", isActive: false },
    { id: 6, name: "Account", href: "/account", icon: "/assets/user.svg", isActive: false }
];

const logoMain: string = "/assets/logo.svg";

const SideNav = () => {
    const [activeId, setActiveId] = useState(1);

    const handleClick = (id: number, href: string) => {
        setActiveId(id);
        router.push(href);
    };

    const router = useRouter();
    return (
        <nav className="w-full h-full bg-white">
            <div className="space-y-16 pl-8 pt-6">
                <span className="h-16">
                    <img src={logoMain} alt="logo" className="h-16 w-auto" />
                </span>
                <div className="space-y-8">
                    {navItems.map((item) => (
                        <div
                            key={item.id}
                            className={`flex items-center cursor-pointer space-x-4 ${item.id === activeId ? 'text-slate-950 border-r-4 border-indigo-800' : 'text-zinc-800'}`}
                            onClick={() => handleClick(item.id, item.href)}
                        >
                            <img src={item.icon} className="w-5 h-5" />
                            <p className="text-base font-medium">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default SideNav;
