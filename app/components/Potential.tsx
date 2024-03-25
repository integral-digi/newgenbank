import Image from "next/image"

const content = {
    title: "Unlock Your Earning Potential",
    info: "Experience the full spectrum of trading possibilities with DollarFX. Whether you're a novice investor or an experienced trader, our platform offers a range of services tailored to your needs. From intuitive trading interfaces to advanced analytics tools and personalized support, we provide everything you need to achieve your financial goals.",
    image: "/assets/sectionImg.png"
}

const Potential = () => {
    return (
        <section className="w-full">
            <section className="flex items-center justify-between lg:block lg:space-y-12">
                <section className="w-[40%] space-y-6 lg:w-full">
                    <h3 className="text-5xl text-indigo-300 text-left font-black lg:text-4xl">
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

export default Potential;