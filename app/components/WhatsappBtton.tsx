"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
const whatsapp = {
    src:"/assets/whatsapp.svg",
    href: "https://wa.me/+4915510383649"
}

const WhatsappButton = () => {
    const router = useRouter();

    // Define a function to handle the click event
    const handleClick = () => {
        router.replace(whatsapp.href);
    };

    return (
        <section className="sticky">
            <button onClick={handleClick} className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-lg">
                <Image  
                    src={whatsapp.src}
                    height={32}
                    width={32}
                    alt="whatsapp button"
                />
            </button>
        </section>
    )
}

export default WhatsappButton;
