"use client"
import MainBody from "./components/MainBody";
import SideNav from "./components/Sidenav";
import TopNav from "./components/TopNav";

const Home = () => {
  return (
    <body className="w-full h-full scroll-m-2">
      <div className="flex">
        <section className="w-[18%]">
          <SideNav />
        </section>
        <section className="w-[82%] space-y-8 px-8 py-6 block">
          <TopNav />
          <MainBody />
        </section>
      </div>
    </body>
  )
}

export default Home;