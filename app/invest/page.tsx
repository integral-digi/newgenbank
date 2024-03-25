"use client"
import BottomNav from "../dashboard/components/BottomNav";
import SideNav from "../dashboard/components/Sidenav";
import TopNav from "../dashboard/components/TopNav";
import InvestForm from "./components/Form";


const Home = () => {
  return (
    <body className="w-full h-full scroll-m-2">
      <div className="flex">
        <section className="w-[18%] lg:hidden">
          <SideNav />
        </section>
        <section className="w-[82%] space-y-8 px-8 py-6 bg-slate-950 block lg:w-full">
          <TopNav />
          <InvestForm />
        </section>
      </div>
      <BottomNav />
    </body>
  )
}

export default Home;