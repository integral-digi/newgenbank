"use client"
import SideNav from "../dashboard/components/Sidenav";
import TopNav from "../dashboard/components/TopNav";
import BottomNav from "../dashboard/components/BottomNav";
import ProfileTab from "./components/ProfileTab";

const AccHome = () => {
    return (
        <section className="w-full h-full scroll-m-2 min-h-screen">
            <section className="flex">
                <section className="w-[18%] lg:hidden">
                    <SideNav />
                </section>
                <section className="w-[82%] space-y-16 px-8 py-6 block lg:w-full">
                    <TopNav />
                    <section className="mx-auto">
                        <section className="w-full">
                            <ProfileTab />
                        </section>
                    </section>
                </section>
            </section>
            <section className="">
                <BottomNav />
            </section>
        </section>
    );
}

export default AccHome;
