"use client"
import { useState } from "react"
import SideNav from "../dashboard/components/Sidenav"
import TopNav from "../dashboard/components/TopNav"
import DepositForm from "./components/Form"
import BottomNav from "../dashboard/components/BottomNav"

const DepositPage = () => {
    const [depositAmt, setDepositAmt] = useState(0);

    return (
        <section className="w-full h-full scroll-m-2 min-h-screen lg:pb-24 relative">
            <section className="flex">
                <section className="w-[18%] lg:hidden">
                    <SideNav />
                </section>
                <section className="w-[82%] space-y-32 px-8 py-6 block lg:w-full">
                    <TopNav />
                    <section className="mx-auto max-w-full">
                        <section className="w-full">
                            <DepositForm depositAmt={depositAmt} setDepositAmt={setDepositAmt} />
                        </section>
                    </section>
                </section>
            </section>
            <section className="">
                <BottomNav />
            </section>
      </section>
    )
}

export default DepositPage;