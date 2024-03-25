import Image from "next/image";
import Leaderboard from "./Leaderboard";

const formattedCurr = (curr: number) => {
    return curr?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2, // Ensure two decimal places
        maximumFractionDigits: 2, // Limit to two decimal places
    }) || '';
};

const wavelength = {src: "/assets/wavelength.svg", name: "wavelength"};

let payoutAmt = 20000; // Initial value

// Function to generate a random value between 1000 and 5000
function getRandomValue() {
    return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
}

// Function to increase the value and log it
function increaseValue() {
    const randomIncrement = getRandomValue();
    payoutAmt += randomIncrement;
    console.log(`Value increased to ${payoutAmt}`);
}

// Set interval to increase the value every 30 seconds
setInterval(increaseValue, 30000);

const newPayOut = increaseValue();

const entries = 5;

const ActivityFeed = () => {
    return (
        <section className="space-y-32">
            <h2 className="text-8xl text-white font-black text-center lg:text-5xl">
                Live Activities From Traders Like You
            </h2>
            <section className="flex items-center space-x-6 lg:block lg:space-x-0 lg:space-y-6">
                <section className="bg-slate-900 h-[600px] w-[40%] rounded-lg lg:w-full overflow-clip relative py-32">
                    <span className="w-3/4 absolute top-12 left-12 leading-10">
                        <h3 className="text-6xl text-white font-bold text-left lg:text-4xl">
                            {formattedCurr(payoutAmt)}
                        </h3>
                        <p className="text-base text-white font-medium text-left lg:text-base">
                            paid out in the last 1 hour
                        </p>
                    </span>
                    <Image
                        src={wavelength.src}
                        alt={wavelength.name}
                        width={560}
                        height={560}
                        className="animate-pulse"
                    />
                </section>
                <section className="w-[60%] bg-slate-900 h-[600px] rounded-lg lg:w-full lg:h-fit lg:pb-12">
                    <section className="w-full">
                        <Leaderboard numberOfEntries={entries} />
                    </section>
                </section>
            </section>
        </section>
    )
}

export default ActivityFeed;