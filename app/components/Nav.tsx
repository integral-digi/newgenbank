"use client"
import Image from "next/image";
//the main navugation menu on the fobozo homepage
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavChild {
    id: number;
    name: string;
    href: string;
}

interface ButtonInfo {
    name: string;
    icon: string;
}

//this array houses the main navigation links
export const navChildren: NavChild[]  = [
    { id: 1, name: "How it works", href: "/how-it-works" },
    { id: 2, name: "Products", href: "/products" },
    { id: 3, name: "Market", href: "/market" },
];

//sign in button info
export const buttonInfo: ButtonInfo  = {
    name: "Sign in",
    icon: "/assets/user.svg",
};

const Nav: React.FC = () => {
    const router = useRouter();

    return (
        <nav className="w-full flex items-center justify-between pt-12 lg:hidden">
            <section className="w-full flex items-center space-x-20">
                <section className="">
                    <Image
                        src="/assets/logo.svg" 
                        alt="dollarfx" 
                        width={144}
                        height={8}
                        className="lg:max-h-1.5"
                    />
                </section>
                 {/* mapping the primary navigation links */}
                {navChildren.map((child) => (
                    <section className="flex items-center space-x-20" key={child.id}>
                        <Link href={child.href}>
                            <p className="text-base text-white font-medium">{child.name}</p>
                        </Link>
                    </section>
                ))}
            </section>
            <section>
                <button className="flex items-center space-x-2" onClick={()=>router.push("/secure-login")}>
                    <Image 
                        src={buttonInfo.icon} 
                        alt="user icon" 
                        width={24}
                        height={24}
                    />
                    <p className="whitespace-nowrap text-white font-medium">
                        {buttonInfo.name}
                    </p>
                </button>
            </section>
        </nav>
    );
};

export default Nav;