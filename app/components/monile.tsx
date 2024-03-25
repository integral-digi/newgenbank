import Image from "next/image";

const featureItems = [
    { title: "Invest like a pro", itemImg: "/images/invest.png" },
    { title: "Profit-driven trading from the get go", itemImg: "/images/profit.png" },
    { title: "Risk-free and fast deposit options", itemImg: "/images/deposit.png" },
    { title: "Withdraw anytime", itemImg: "/images/payment.png" },
];

const FeatureItem = ({ title, itemImg, width, height }:any) => (
    <section className="relative  w-full h-[440px] bg-slate-900 p-16 rounded-xl lg:w-full">
        <h3 className="text-4xl text-white font-bold lg:text-3xl">{title}</h3>
        <div className="absolute right-4 bottom-2">
            <Image
                src={itemImg}
                width={width}
                height={height}
                alt={title}
            />
        </div>
    </section>
);

const Features = () => {
    return (
        <section className="space-y-3 w-full">
            <div className="flex items-center space-x-3 lg:block lg:space-y-3 lg:space-x-0">
                <FeatureItem
                    title={featureItems[0].title}
                    itemImg={featureItems[0].itemImg}
                    width={240}
                    height={240}
                />
                <FeatureItem
                    title={featureItems[1].title}
                    itemImg={featureItems[1].itemImg}
                    width={240}
                    height={240}
                />
            </div>
            <div className="flex items-center space-x-3 lg:block lg:space-y-3 lg:space-x-0">
                <FeatureItem
                    title={featureItems[2].title}
                    itemImg={featureItems[2].itemImg}
                    width={428}
                    height={328}
                />
                <FeatureItem
                    title={featureItems[3].title}
                    itemImg={featureItems[3].itemImg}
                    width={360}
                    height={360}
                />
            </div>
        </section>
    );
};

export default Features;