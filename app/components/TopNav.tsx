"use client"
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import MoveMoneyDropdown from "./MoveMoney";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import NotificationPanel from "./NotificationPanel";

interface UpdateProps {
    time: string;
    description: string;
    attributedTo: string;
}

const updates: UpdateProps[] = [
    { time: "Yesterday", description: "Landon Shepherd wants to require admin approval for payments and external transfers over $30,000 per day.", attributedTo: "Landon Shepherd" },
    { time: "Yesterday", description: "", attributedTo: "Jane Doe" },
    { time: "Last Month", description: "", attributedTo: "John Doe"},
];

//log length of updates array to the console
console.log(updates.length);

const TopNav = () => {
    const [searchValue, setSearchValue] = useState("");

    return (    
        <div className="flex items-center justify-between bg-transparent px-8">
            <span className="relative">
                <input type="search" className="placeholder:pl-12 placeholder:font-normal border border-color-slate-700 h-10 px-12 bg-white rounded-full" value={searchValue} onChange={(e) => (setSearchValue(e.target.value))} placeholder="search" />
                <img src="/assets/search.svg" className="w-4 h-4 absolute top-3 left-4 opacity-30" />
            </span>
            <span className="">
                <Popover className="relative" data-popover-target="money-dropdown">
                    <Popover.Button className="flex items-center bg-slate-900 rounded-full">
                        <span className="space-x-2 flex items-center  px-4 py-2">
                            <p className="font-normal text-center m-auto text-white">Move Money</p>
                            <ChevronDownIcon className="w-4 h-4 text-white" />
                        </span>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1">
                            <Popover.Panel id="money-dropdown" className="absolute top-8 left-0 w-64 mt-2 bg-white rounded-lg shadow-xl">
                                <MoveMoneyDropdown />
                            </Popover.Panel>
                        </Transition>
                </Popover>
            </span>
            <Popover className="">
                <Popover.Button>
                    <span className="rounded-full bg-white w-10 h-10 relative items-center flex">
                        <img src="/assets/bell.svg" alt="notification" className="w-6 h-6 m-auto justify-center" />
                        <span className="shadow-sm rounded-full w-4 h-4 bg-red-500 flex items-center absolute top-0 right-0">
                            <p className="text-xs font-bold m-auto justify-center text-white">{updates.length}</p>
                        </span>
                    </span>
                </Popover.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel className="absolute top-0 right-0 w-fit bg-white shadow-xl z-50">
                           <NotificationPanel />
                        </Popover.Panel>
                    </Transition>
            </Popover>
        </div>
    );
};

export default TopNav;