import { Tooltip } from "@mui/material";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { user } from "./MainBody";

export const formattedCurr = (curr: number) => {
    return curr?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2, // Ensure two decimal places
        maximumFractionDigits: 2, // Limit to two decimal places
    }) || '';
};

const Balances = () => {
    return (
        <div className="space-y-12">
            <section className="h-56 w-full bg-white flex items-center shadow-sm rounded-xl">
                <span className="space-y-4 m-auto relative">
                    <p className="text-xs font-medium text-neutral-400 text-center">ACTIVE DEPOSIT</p>
                    <Tooltip 
                        arrow 
                        placement="top"  
                        title="This is your deposit which is currently being used to trade and earn profits.">
                        <InformationCircleIcon className="absolute z-30 cursor-pointer font-medium -top-3.5 right-0 w-3 h-3 m-auto text-neutral-400" />
                    </Tooltip>
                    <p className="text-4xl text-center font-bold text-slate-950">{formattedCurr(user.balance.checkingBal)}</p>
                    <p className="text-xs text-center font-medium text-indigo-600 underline">Account Details</p>
                </span>
            </section>
            <section className="h-56 w-full bg-white flex items-center shadow-sm rounded-xl">
                <span className="space-y-4 m-auto relative">
                    <p className="text-xs font-medium text-neutral-400 text-center">CUMULATIVE PROFIT</p>
                    <Tooltip 
                        arrow 
                        placement="top" 
                        title="This is the profit you have earned so far on your deposits">
                        <InformationCircleIcon className="absolute z-30 cursor-pointer font-medium -top-3.5 right-0 w-3 h-3 m-auto text-neutral-400" />
                    </Tooltip>
                    <p className="text-4xl text-center font-bold text-slate-950">{formattedCurr(user.balance.savingBal)}</p>
                </span>
                
            </section>
        </div>
    )
}

export default Balances;