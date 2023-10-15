"use client"
import { useState } from "react";

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
        <div className="flex items-center justify-between bg-white">
            <span className="relative">
                <input type="search" className="placeholder:pl-12 border border-color-stone-500 h-10 bg-transparent rounded-full" value={searchValue} onChange={(e) => (setSearchValue(e.target.value))} placeholder="search" />
                <img src="/assets/search.svg" className="w-4 h-4 absolute top-3 left-4 opacity-30" />
            </span>
            <span className="">
                <button className="flex items-center bg-slate-900 rounded-full">
                    <p className="text-center m-auto text-white px-4 py-2">Move Money</p>
                </button>
            </span>
            <span className="rounded-full bg-white w-8 h-8 relative items-center flex">
                <img src="/assets/bell.svg" alt="notification" className="w-6 h-6 m-auto justify-center" />
                <span className="shadow-sm rounded-full w-4 h-4 bg-green-500 flex items-center absolute top-0 right-0">
                    <p className="text-xs font-bold m-auto justify-center text-white">{updates.length}</p>
                </span>
            </span>
        </div>
    )
}

export default TopNav;