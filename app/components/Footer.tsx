import Image from "next/image";
import Link from "next/link"

const footerItems = {
    copyright: "© 2011 - 2024 DollarFX. All rights reserved.",
    riskWarning: "Trading financial assets carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. It is possible to lose all your invested capital, so you should not invest money that you cannot afford to lose.",
    socialIcons: [
        { id: 1, name: "facebook", href: "https://facebook.com/DollarFX", icon: "/assets/facebook.svg" },
        { id: 2, name: "telegram", href: "https://t.me/DollarFX", icon: "/assets/twitter.svg" }
    ]
}

const Footer = () => {
    return (
        <footer className="space-y-8 py-6">
            <hr className="w-full h-px bg-gray-700" />
            <section className="flex items-center justify-between lg:block space-y-8 lg:mx-auto">
                <p className="text-white text-base font-medium leading-normal lg:text-center">
                    {footerItems.copyright}
                </p>
                <section className="flex items-center space-x-4 lg:mx-auto lg:justify-center">
                    {footerItems.socialIcons.map((item) => (
                        <Link href={item.href} target="blank" key={item.id}>
                            <Image 
                                src={item.icon} 
                                alt={item.name} 
                                width={24}
                                height={24}
                            />
                        </Link>
                    ))}
                </section>
            </section>
            <section className="w-full">
                <p className="font-medium text-base text-white text-center">
                    {footerItems.riskWarning}
                </p>
            </section>
        </footer>
    )
}

export default Footer;