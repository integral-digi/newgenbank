"use client"
import { Tab } from "@headlessui/react";
import PersonalSettings from "./Personal";

const tabStyle = "whitespace-nowrap overflow-x-scroll px-2 py-1 h-12 font-bold ui-selected:rounded-md ui-selected:px-4 ui-selected:bg-slate-800 ui-selected:text-indigo-800 text-white";

const ProfileTab = () => {
    return (
        <section className="block pt-8 space-y-24 w-full">
            <Tab.Group>
                <Tab.List className="w-full flex items-center justify-between py-1 px-12 rounded-full bg-slate-900 h-16">
                    <Tab className={tabStyle}>
                        Personal Info
                    </Tab>
                    <Tab className={tabStyle}>Withdrawal Details</Tab>
                    <Tab className={tabStyle}>Security Settings</Tab>
                    <Tab className={tabStyle}>Documents</Tab>
                </Tab.List>
                <Tab.Panels className="font-bold w-full pt-6 sm:mx-auto sm:w-[338px] pr-8 lg:pr-0">
                    <Tab.Panel>
                        <PersonalSettings />
                    </Tab.Panel>
                    <Tab.Panel>
                        <PersonalSettings />
                    </Tab.Panel>
                    <Tab.Panel>
                        <PersonalSettings />
                    </Tab.Panel>
                    <Tab.Panel>
                        <PersonalSettings />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </section>
    )
}

export default ProfileTab;
