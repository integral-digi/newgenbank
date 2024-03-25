import Image from "next/image";
import { investOptions } from "./Form";

const CfdInvest = () => {
    return (
        <section className="w-full">
            <section className="flex flex-1 items-baseline justify-between flex-wrap space-y-12 lg:block">
                {investOptions[1].options.map((option, index) => (
                    <section key={index} className="w-[30%] p-8 bg-slate-900 rounded-lg h-60 lg:w-full">
                        <section className="space-y-6">
                            <section key={index} className="w-full space-y-6">
                                <section className="flex items-center justify-between w-full">
                                    <Image
                                        src={option.logo}
                                        width={24}
                                        height={24}
                                        alt={option.product}
                                    />
                                    <p className="text-base text-white font-bold">
                                        {option.product}
                                    </p>
                                    <section className="flex items-center space-x-2">
                                        <Image
                                            src="/assets/chartflow.svg" 
                                            width={16}
                                            height={16}
                                            alt="flow"
                                        />
                                        <p className="text-base text-white font-medium">
                                            {option.interest}%
                                        </p>
                                    </section>
                                </section>
                                <section className="space-y-4">
                                    <p className="text-xs text-green-500 font-medium">
                                        Duration
                                    </p>
                                    <p className="text-lg text-white font-bold">
                                        {option.duration}
                                    </p>
                                </section>
                                <button className="w-full rounded-full bg-transparent border border-white flex items-center justify-center p-2">
                                    <p className="text-base text-white text-center font-bold">
                                        Invest
                                    </p>
                                </button>
                            </section>
                        </section>
                    </section>
                ))}
            </section>
        </section>
    )
}

export default CfdInvest;