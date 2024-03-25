"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const pageItems = {
    image: "/assets/empty-state.svg",
    text: "We are working on loans for ambitious traders. Watch this space!",
    buttonText: "Learn more"
}

const Main = () => {
    const router = useRouter();

    return (
        <section className="flex justify-center lg:block">
            <section className="mx-auto space-y-8 lg:max-w-full">
                <Image
                    src={pageItems.image} 
                    alt={pageItems.text} 
                    width={360}
                    height={540}
                    className="h-auto max-w-fit" 
                />
                <p className="text-center text-white text-lg font-bold tracking-tight">
                    {pageItems.text}
                </p>
                <button className="h-12 w-full bg-indigo-800 rounded-lg justify-center flex items-center" onClick={()=>router.replace("https://www.youtube.com/@fobozo")}>
                    <p className="w-max text-center text-white text-base font-bold">{pageItems.buttonText}</p>
                </button>
            </section>
        </section>
    )
}

export default Main;