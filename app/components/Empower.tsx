import Image from "next/image"

const content = {
    title: "Empower Yourself with Knowledge",
    info: "Invest in your success with our comprehensive educational resources. From beginner tutorials to advanced trading strategies, DollarFX equips you with the knowledge and skills to navigate financial markets confidently. Take advantage of webinars, articles, and interactive courses curated by industry experts to stay ahead of the curve.",
    image: "/assets/sectionImg.png"
}

const Empower = () => {
    return (
        <section className="w-full">
            <section className="flex items-center justify-between lg:block lg:space-y-12">
                <section className="w-[40%] space-y-6 lg:w-full">
                    <h3 className="text-5xl text-indigo-300 text-left font-black lg:text-3xl">
                        {content.title}
                    </h3>
                    <p className="text-lg text-white text-left font-medium lg:text-base">
                        {content.info}
                    </p>
                </section>
                <section className="w-[40%] max-w-full lg:w-full">
                    <Image 
                        src={content.image}
                        alt={content.title}
                        width={400}
                        height={400}
                    />
                </section>
            </section>
        </section>
    )
}

export default Empower;