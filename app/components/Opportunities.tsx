import Image from "next/image"

const content = {
    title: "Discover Endless Opportunities",
    info: "Explore a world of opportunities across forex, stocks, and cryptocurrencies with DollarFX. Access a wide range of assets from global markets and seize the moment with real-time trading capabilities. Whether you're interested in currency pairs, blue-chip stocks, or emerging cryptocurrencies, we offer unparalleled access to the most lucrative opportunities.",
    image: "/images/illus1.png"
}

const Opportunities = () => {
    return (
        <section className="w-full">
            <section className="flex items-center justify-between lg:block lg:space-y-12">
                <section className="w-[50%] max-w-full lg:w-full">
                    <Image 
                        src={content.image}
                        alt={content.title}
                        width={960}
                        height={640}
                    />
                </section>
                <section className="w-[40%] space-y-6 lg:w-full">
                    <h3 className="text-5xl text-indigo-300 text-left font-black lg:text-4xl">
                        {content.title}
                    </h3>
                    <p className="text-lg text-white text-left font-medium lg:text-base">
                        {content.info}
                    </p>
                </section>
            </section>
        </section>
    )
}

export default Opportunities;