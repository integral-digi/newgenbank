"use client"
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";
import { formattedCurr } from "./Balances";

const NotificationPanel = () => {
    const [notifications, setNotifications] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/investments');
                if (!response.ok) {
                    throw new Error('Failed to fetch notifications');
                }
                const data = await response.json();
                setNotifications(data);
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-slate-900 w-96 h-screen p-6 space-y-4 overflow-y-scroll">
            <section className="justify-between w-full flex items-center">    
                <h1 className="text-sm text-white font-bold">NOTICE PANEL</h1>
                <Popover.Button className="focus:outline-none">
                    <XMarkIcon className="h-6 w-6 text-neutral-400" />
                </Popover.Button>
            </section>
            <hr className="w-full h-px border border-slate-800" />
            <div className="space-y-4">
                {error && <p className="text-red-500">{error}</p>}
                {notifications.map((notification, index) => (
                    <section key={index} className="space-y-4"> 
                        <p className="text-xs text-neutral-400 font-medium">{notification.date}</p>
                        <p className="text-xl text-white font-bold">{formattedCurr(notification.amount)}</p>
                        <p className="text-xs text-indigo-200 font-medium">Interest Earned</p>
                        <hr className="w-full block h-px border border-slate-800" />
                    </section>
                ))}       
            </div>
        </div>
    );
};

export default NotificationPanel;
