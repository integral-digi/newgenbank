import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";

const accmaninfo = {
    src: "/assets/erling.jpg",
    name: "Erling Proschek",
    chatlink: "https://wa.me/+4915510383649"
}

const AccountManager = () => {
    const router = useRouter();
    return (
        <section className="w-3/4 flex items-center justify-center py-6 bg-slate-900 shadow-sm rounded-xl lg:w-full">
            <section className="justify-center space-y-8 block">
                <p className="text-xl text-center font-bold text-white">
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
                    <button className="bg-white rounded-3xl px-6 py-2" onClick={() => router.replace(accmaninfo.chatlink)}>
                        <p className="font-bold text-base text-slate-900 text-center">
                            Start Chat
                        </p>
                    </button>
                </section>
                <section>
                    <Link href={accmaninfo.chatlink} passHref>
                        <p className="text-white text-xs underline font-medium text-center">
                            {accmaninfo.chatlink}
                        </p>
                    </Link>
                </section>
            </section>
        </section>
    )
}

export default AccountManager;