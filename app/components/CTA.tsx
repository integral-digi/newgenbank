"use client"

import { useRouter } from "next/navigation"

const ctaInfo = {
    title: "Over 75 million USD paid out!",
    subtitle: "Take control of your financial future. Start trading with confidence today!",
    buttonText: "sign up now"
}

const CTA = () => {
    const router = useRouter();
    return (
        <section className="w-full p-32 bg-indigo-800 rounded-3xl lg:px-8">
            <section className="space-y-8 justify-center">
                <h2 className="text-6xl text-center font-black text-white lg:text-5xl">
                    {ctaInfo.title}
                </h2>
                <p className="text-center font-medium text-lg text-white">
                    {ctaInfo.subtitle}
                </p>
                <button className="flex items-center justify-around bg-transparent border border-white rounded-3xl h-12 w-32 mx-auto" onClick={()=>router.push("/create-account")}>
                    <p className="text-base text-center text-white">
                        {ctaInfo.buttonText}
                    </p>
                </button>
            </section>
        </section>
    )
}

export default CTA;