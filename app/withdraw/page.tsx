"use client"
import SideNav from "../dashboard/components/Sidenav";
import WithdrawForm from "./withcomps/Form";
import TopNav from "../dashboard/components/TopNav";
import InfoBar from "./withcomps/InfoSidebar";

const WithdrawHome = () => {
  return (
    <div className="w-full dark:bg-[#1E1A1A] dark:text-white lg:w-fit relative h-full">
      <div className="lg:hidden">
        <SideNav />
      </div>
      <div className="mx-auto py-6 w-[64%] lg:w-full lg:px-8">
        <div className="top-0 py-6 w-full">
          <TopNav />
        </div>
        <div className="mt-24 grid grid-cols-2 gap-[20%] justify-between w-full lg:space-y-24 lg:block">
          <div className="block space-y-24 w-full">
            <WithdrawForm />
          </div>
          <div className="block w-full">
            <InfoBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithdrawHome;