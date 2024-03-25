"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

interface NavItemsProps {
    id: number;
    name: string;
    href: string;
    icon: string;
}

export const navItems: NavItemsProps[] = [
    { id: 1, name: "Home", href: "/dashboard", icon: "/assets/home.svg" },
    { id: 2, name: "Invest", href: "/invest", icon: "/assets/transactions.svg" },
    { id: 3, name: "Deposit", href: "/deposit", icon: "/assets/dollar.svg" },
    { id: 4, name: "Loans", href: "/loans", icon: "/assets/paymentt.svg" },
    { id: 5, name: "Leaderboard", href: "/leaderboard", icon: "/assets/leaderboard.svg" },
    { id: 6, name: "Account", href: "/account", icon: "/assets/user.svg" },
    { id: 7, name: "Support", href: "/support", icon: "/assets/help.svg" }
];

const logoMain: string = "/assets/logo.svg";

const SideNav = () => {
    const router = useRouter();
    const [activeId, setActiveId] = useState<number>(1);

    const handleClick = (id: number, href: string) => {
        setActiveId(id);
        router.push(href);
    };

    return (
        <nav className="w-full h-full bg-slate-900 min-h-screen lg:hidden">
            <section className="space-y-16 pl-8 pt-6">
                <span className="">
                    <img src={logoMain} alt="logo" className="h-8 w-auto" />
                </span>
                <section className="space-y-8">
                    {navItems.map((item) => (
                        <section
                            key={item.id}
                            className={`flex items-center cursor-pointer space-x-4 text-white ${activeId === item.id && 'text-slate-400 border-r-4 border-indigo-800'}`}
                            onClick={() => handleClick(item.id, item.href)}
                        >
                            <img src={item.icon} className="w-5 h-5" alt={item.name} />
                            <p className="text-base font-medium">{item.name}</p>
                        </section>
                    ))}
                </section>
            </section>
        </nav>
    )
}

export default SideNav;
