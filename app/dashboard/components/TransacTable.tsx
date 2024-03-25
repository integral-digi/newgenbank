import React from "react";
import { initialCheckingAccountData } from "./MainBody";
import { formattedCurr } from "./Balances";

const TransacTable = () => {
    const recentTransactions = initialCheckingAccountData.slice(0, 5);

    return (
        <div className="space-y-12 w-full h-max">
            <h3 className="text-2xl font-bold text-slate-950">Recent Trades</h3>
            <div className="rounded-xl justify-center mx-auto">
                <div className="space-y-4">
                    {recentTransactions.map((transaction, index) => (
                        <div key={index} className="w-full bg-white font-medium shadow-sm rounded-md">
                            <div className="pl-16 flex justify-between">  
                                <div className="w-[30%] py-8 flex items-center space-x-4">
                                    <span className="rounded-full bg-gray-300 w-8 h-8 flex items-center">
                                        <p className="text-xs font-bold text-center justify-center m-auto">{transaction.recipient.charAt(0)}</p>
                                    </span>
                                    {/* <p className="">{transaction.recipient}</p>  */}
                                    <p className="text-xs text-slate-500">{transaction.status}</p>
                                </div> 
                                <div className="w-[15%] py-8">{transaction.type}</div>
                                <div className="w-[25%] py-8">{transaction.date}</div>
                                {transaction.type === "outflow"
                                    ? <div className="w-[20%] py-8">-{formattedCurr(transaction.amount)}</div>
                                    : <div className="w-[20%] py-8">+{formattedCurr(transaction.amount)}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransacTable;