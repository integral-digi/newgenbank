import Image from "next/image";
import Link from "next/link"

const footerItems = {
    copyright: "© 2011 - 2024 DollarFX. All rights reserved.",
    riskWarning: "Make sure to read our Terms and Conditions, Risk Disclosure, and Secure and Responsible Trading to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice.",
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