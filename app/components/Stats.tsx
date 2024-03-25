const statsInfo = [
    {title: "25M", info: "paid out to traders"},
    {title: "46K", info: "monthly open trades"},
    {title: "13+", info: "years of trading experience"},
    {title: "80+", info: "countries available"},
]

const Stats = () => {
    return (
        <section className="w-full space-y-32">
            <h2 className="text-8xl text-white font-black text-center lg:text-5xl">
                Numbers Don't Lie
            </h2>
            <section className="flex items-center justify-between lg:block lg:space-y-16">
                {statsInfo.map((item, index)=> (
                    <section key={index} className="space-y-5">
                        <h2 className="text-7xl text-white font-black text-center">
                            {item.title}
                        </h2>
                        <p className="text-base text-white font-bold text-center">
                            {item.info}
                        </p>
                    </section>
                ))}
            </section>
        </section>
    )
}

export default Stats;