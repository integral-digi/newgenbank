import BottomNav from "../dashboard/components/BottomNav"
import SideNav from "../dashboard/components/Sidenav"
import TopNav from "../dashboard/components/TopNav"
import Main from "./components/Main"

const LoanPage = () => {
    return (
        <section className="w-full h-full scroll-m-2">
            <section className="flex lg:block">
                <section className="w-[18%] lg:hidden">
                    <SideNav />
                </section>
                <section className="w-[82%] space-y-32 px-8 py-6 block lg:w-full">
                    <TopNav />
                    <Main />
                </section>
            </section>
            <BottomNav />
      </section>
    )
}

export default LoanPage;