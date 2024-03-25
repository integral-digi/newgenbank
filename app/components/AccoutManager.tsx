import Image from "next/image"
import Link from "next/link";

const accmaninfo = {
    src: "/assets/erling.jpg",
    name: "Erling Proschek",
    chatlink: "https://t.me/danja_dutler"
}

const AccountManager = () => {
    return (
        <section className="w-3/4 flex items-center justify-center py-6 bg-white shadow-sm rounded-xl">
            <section className="justify-center space-y-8 block">
                <p className="text-xl text-center font-bold">
                    Account Manager
                </p>
                <Image 
                    src={accmaninfo.src}
                    width={84} 
                    height={84} 
                    alt={accmaninfo.name}
                    className="rounded-full mx-auto"
                />
                <section className="flex items-center justify-center">
                    <button className="bg-indigo-800 rounded-3xl px-6 py-2">
                        <p className="font-bold text-base text-white text-center">
                            Start Chat
                        </p>
                    </button>
                </section>
                <section>
                    <Link href={accmaninfo.chatlink} passHref>
                        <p className="text-indigo-600 text-xs underline font-medium text-center">
                            {accmaninfo.chatlink}
                        </p>
                    </Link>
                </section>
            </section>
        </section>
    )
}

export default AccountManager;