import { initialCheckingAccountData } from "./MainBody";  
import { formattedCurr } from "./Balances";  
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";

const NotificationPanel = () => {
    return (
        <div className="bg-white w-96 h-screen p-6 space-y-4 overflow-y-scroll">
            {/*Create the notification side panel*/}
            <section className="justify-between w-full flex items-center">    
                <h1 className="text-sm text-slate-950 font-bold">NOTICE PANEL</h1>
                <Popover.Button className="focus:outline-none">
                    <XMarkIcon className="h-6 w-6 text-neutral-400" />
                </Popover.Button>
            </section>
            <hr className="w-full h-px border border-neutral-100" />
            <div className="space-y-4">
                {initialCheckingAccountData.map((transaction, index) => (
                    <section key={index} className="space-y-4"> 
                        <p className="text-xs text-neutral-400 font-medium">{transaction.date}</p>
                        <p className="text-xl text-slate-950 font-bold">{formattedCurr(transaction.amount)}</p>
                        {transaction.type === "inflow" ? <p className="text-xs text-indigo-500 font-medium">Received from {transaction.recipient}</p> : <p className="text-xs text-indigo-500 font-medium">Paid to {transaction.recipient}</p>}
                        <p className="text-xs text-neutral-400 font-medium">{transaction.description}</p>
                        <hr className="w-full block h-px border border-neutral-100" />
                    </section>
                ))}       
            </div>
        </div>
    )
}

export default NotificationPanel;