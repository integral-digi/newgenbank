"use client"
import BottomNav from "./components/BottomNav";
import Ticker from "../components/Ticker";
import MainBody from "./components/MainBody";
import SideNav from "./components/Sidenav";
import TopNav from "./components/TopNav";

const Home = () => {
  return (
    <body className="w-full h-full scroll-m-2">
      <div className="flex lg:pb-24">
        <section className="w-[18%] lg:hidden">
          <SideNav />
        </section>
        <section className="w-[82%] space-y-8 px-8 py-6 bg-slate-950 block lg:w-full">
          <TopNav />
          <Ticker />
          <MainBody />
        </section>
      </div>
      <section className="w-full">
        <BottomNav />
      </section>
    </body>
  )
}

export default Home;