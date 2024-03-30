"use client"
import { Tab } from "@headlessui/react";
import PersonalSettings from "./Personal";
import { user } from "./UserData";
import WithdrawInfo from "./WithdrawDetails";
import SecurityInfo from "./SecurityInfo";
import { useState } from "react";

const TabNames = [
    { id: 1, name: "Personal Info", comp: <PersonalSettings user={user} /> },
    { id: 2, name: "Withdrawal Details", comp: <WithdrawInfo />},
    { id: 3, name: "Security Settings", comp: <SecurityInfo /> },
    { id: 4, name: "KYC", comp: <PersonalSettings user={user} /> },
];

const listClass = "lg:overflow-x-scroll flex items-center justify-between py-1 px-4 rounded-full bg-slate-900 h-12 w-full";

const ProfileTab = () => {
    const [selectedTab, setSelectedTab] = useState(1);

    return (
        <section className="block pt-8 space-y-24 w-full">
            <Tab.Group>
                <Tab.List className={listClass}>
                    {TabNames.map((option) => (
                        <Tab key={option.id} className={`${selectedTab === option.id ? "rounded-full px-8 py-1 font-bold bg-slate-950 text-gray-400 lg:px-2 whitespace-nowrap" : "whitespace-nowrap px-2 py-1 h-12 font-bold text-white"}`} onClick={() => setSelectedTab(option.id)}>
                            {option.name}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="py-12">
                    {TabNames.map((option) => (
                        <Tab.Panel key={option.id}>
                            {option.comp}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </section>
    )
}

export default ProfileTab;
