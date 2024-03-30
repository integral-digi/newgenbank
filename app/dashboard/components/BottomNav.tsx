"use client"
import { useState } from "react";
import { navItems } from "./Sidenav";
import Link from "next/link";  
import Image from "next/image";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";

const BottomNav = () => {
    const [activeTab, setActiveTab] = useState<string>('Home');
    return (
        <nav className="bg-slate-900 shadow-md h-14 w-full fixed bottom-0 z-30 hidden lg:block">
            <div className="flex justify-between items-center relative h-14 w-full px-8">
                {/* <Link href="/">
                    <Bars3CenterLeftIcon className="text-white w-6 h-6" />
                </Link> */}
                {navItems.map((item) => (
                    <Link href={item.href} key={item.id}>
                        <Image
                            src={item.icon}
                            width={20}
                            height={20}
                            alt={item.name}
                        />
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default BottomNav;