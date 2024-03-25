"use client"
import { useState } from "react";
import Balances, { formattedCurr } from "./Balances";
import TransChart from "./TransChart";
import TransacTable from "./TransacTable";
import Promotion from "./Promotion";
import AccountManager from "./AccoutManager";

interface UserProps {
  name: string;
  avatar: string;
  balance: {
    totalBalance: number;
    checkingBal: number;
    savingBal: number;
  }
}
  
interface NavProps {
  name: string;
  icon: JSX.Element;
  class: string;
}

interface Transaction {
  date: string;
  amount: number;
  type: 'inflow' | 'outflow';
  description: string;
  status: 'completed' | 'pending';
  recipient: string;
}

export const initialCheckingAccountData: Transaction[] = [
  { date: '2022-01-01', type: 'outflow', amount: 1000, description: 'Trade Opened', status: 'pending', recipient: 'DollarFX' },
  { date: '2022-01-02', type: 'inflow', amount: 200, description: 'Bonus deposit', status: 'completed', recipient: 'DollarFX' },
  { date: '2022-01-03', type: 'outflow', amount: 400, description: 'Trade Opened', status: 'completed', recipient: 'DollarFX' },
  { date: '2022-01-04', type: 'inflow', amount: 50, description: 'Daily profit added', status: 'completed', recipient: 'DollarFX' },
  { date: '2022-01-05', type: 'outflow', amount: 300, description: 'Trade Opened', status: 'completed', recipient: 'DollarFX' },
  { date: '2022-01-06', type: 'inflow', amount: 75, description: 'Daily profit added', status: 'completed', recipient: 'DollarFX' },
  { date: '2022-01-07', type: 'outflow', amount: 150, description: 'Trade Opened', status: 'completed', recipient: 'DollarFX' },
  { date: '2022-01-08', type: 'inflow', amount: 60, description: 'Daily profit added', status: 'completed', recipient: 'DollarFX' },
];

const checkTime = (currentHour?: number) => {
  // Handle the case where currentHour is undefined.
  if (currentHour === undefined) {
    return "Day";
  }

  if (currentHour >= 1 && currentHour < 12) {
    return "Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Afternoon";
  } else {
    return "Evening";
  }
};
  
const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const currentHour = new Date().getHours(); // Get the current hour of the day
const timeOfDay = checkTime(currentHour); 
  
export const user: UserProps = {
  name: "Efeturi C",
  avatar: "9u.jpg",
  balance: {
    totalBalance: 7250,
    checkingBal: 2250,
    savingBal: 5000,
  }
};

const MainBody = () => {
  const [checkingAccountData, setCheckingAccountData] = useState<Transaction[]>(initialCheckingAccountData);
  return (
      <div className="space-y-12 px-8 pt-6 w-full">
          <section>
              <h1 className="text-2xl text-slate-950 font-bold">Good {timeOfDay}, {user.name}</h1>
          </section>
          <section className="flex h-max w-full justify-between">
            <span className="bg-white pt-20 space-y-12 w-[60%] shadow-sm rounded-xl">
              <span className="space-y-4">
                <p className="text-xs font-medium text-neutral-400 text-center">PORTFOLIO BALANCE</p>
                <p className="text-4xl text-center font-bold text-slate-950">{formattedCurr(user.balance.totalBalance)}</p>
              </span>
              <TransChart transactions={initialCheckingAccountData} />
            </span>
            <span className="w-[36%]">
              <Balances />
            </span>
          </section>
          <section className="w-full flex flex-1 items-start space-x-8">
            <Promotion />
            <AccountManager />
          </section>
      </div>
  );
};

export default MainBody;