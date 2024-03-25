import Image from "next/image";

const promoContent = {
    title: "Refer and Earn on DollarFX",
    subtitle: "Refer friends and associates to dollarFX and earn rewards for your efforts",
    buttonText: "Earn now",
    svgImg: "assets/strokes.svg"
}

const Promotion = () => {
    return (
        <section className="w-full bg-indigo-800 rounded-xl px-8 py-16 relative overflow-clip">
            <section className="space-y-8 z-50">
                <h2 className="text-3xl font-black text-white">
                    {promoContent.title}
                </h2>
                <p className="text-base text-white font-bold w-3/4">
                    {promoContent.subtitle}
                </p>
                <button className="flex items-center bg-white rounded-3xl px-6 py-2">
                    <p className="text-slate-900 font-medium text-base">
                        {promoContent.buttonText}
                    </p>
                </button>
            </section>
            <section className="absolute -bottom-4 right-0 z-10">
                <Image 
                    src={promoContent.svgImg}
                    width={200}
                    height={200}
                    alt="refer"
                />
            </section>
        </section>
    )
}

export default Promotion;