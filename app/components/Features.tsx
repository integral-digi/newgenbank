import Image from "next/image"

const featureItems = [
    {title: "Invest like a pro", itemImg: "/images/invest.png"},
    {title: "Profit-driven trading from the get go", itemImg: "/images/profit.png"},
    {title: "Risk-free and fast deposit options", itemImg: "/images/deposit.png"},
    {title: "Withdraw anytime", itemImg: "/images/payment.png"},
]

const Features = () => {
    return (
        <section className="space-y-3 w-full">
            <section className="flex items-center space-x-3 lg:block lg:space-y-3 lg:space-x-0">
                <section className="relative h-[440px] w-[30%] bg-slate-900 p-16 rounded-xl lg:w-full">
                    <h3 className="text-4xl text-white font-bold w-[70%] lg:text-2xl">
                        {featureItems[0].title}
                    </h3>
                    <section className="absolute right-4 bottom-2 animate-bounce">
                        <Image
                            src={featureItems[0].itemImg}
                            width={240}
                            height={240}
                            alt={featureItems[0].title}
                        />
                    </section>
                </section>
                <section className="relative h-[440px] w-[70%] bg-slate-900 p-16 rounded-xl lg:w-full">
                    <h3 className="text-4xl text-white font-bold w-[60%] lg:text-2xl">
                        {featureItems[1].title}
                    </h3>
                    <section className="absolute right-16 bottom-0 hover:animate-bounce">
                        <Image
                            src={featureItems[1].itemImg}
                            width={240}
                            height={240}
                            alt={featureItems[1].title}
                        />
                    </section>
                </section>
            </section>
            <section className="flex items-center space-x-3 lg:block lg:space-y-3 lg:space-x-0">
                <section className="relative h-[440px] w-[45%] bg-slate-900 p-16 rounded-xl lg:w-full">
                    <h3 className="text-4xl text-white font-bold w-[70%] lg:text-2xl lg:w-[80%]">
                        {featureItems[2].title}
                    </h3>
                    <section className="absolute right-4 bottom-0 hover:animate-bounce">
                        <Image
                            src={featureItems[2].itemImg}
                            width={428}
                            height={328}
                            alt={featureItems[2].title}
                        />
                    </section>
                </section>
                <section className="relative h-[440px] w-[55%] bg-slate-900 p-16 rounded-xl lg:w-full">
                    <h3 className="text-4xl text-white font-bold w-[60%] lg:text-2xl">
                        {featureItems[3].title}
                    </h3>
                    <section className="absolute right-16 -bottom-8 hover:animate-bounce">
                        <Image
                            src={featureItems[3].itemImg}
                            width={360}
                            height={360}
                            alt={featureItems[3].title}
                        />
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Features;