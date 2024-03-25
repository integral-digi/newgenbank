import { initialCheckingAccountData } from "./MainBody";  
import { formattedCurr } from "./Balances";  
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";

const NotificationPanel = () => {
    return (
        <div className="bg-slate-900 w-96 h-screen p-6 space-y-4 overflow-y-scroll">
            {/*Create the notification side panel*/}
            <section className="justify-between w-full flex items-center">    
                <h1 className="text-sm text-white font-bold">NOTICE PANEL</h1>
                <Popover.Button className="focus:outline-none">
                    <XMarkIcon className="h-6 w-6 text-neutral-400" />
                </Popover.Button>
            </section>
            <hr className="w-full h-px border border-slate-800" />
            <div className="space-y-4">
                {initialCheckingAccountData.map((transaction, index) => (
                    <section key={index} className="space-y-4"> 
                        <p className="text-xs text-neutral-400 font-medium">{transaction.date}</p>
                        <p className="text-xl text-white font-bold">{formattedCurr(transaction.amount)}</p>
                        {transaction.type === "inflow" ? <p className="text-xs text-neutral-200 font-medium">Received from {transaction.recipient}</p> : <p className="text-xs text-indigo-200 font-medium">Paid out to {transaction.recipient}</p>}
                        <p className="text-xs text-neutral-400 font-medium">{transaction.description}</p>
                        <hr className="w-full block h-px border border-slate-800" />
                    </section>
                ))}       
            </div>
        </div>
    )
}

export default NotificationPanel;