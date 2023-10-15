"use client"
import TransChart from "./components/TransChart";
import SideNav from "./components/Sidenav";
import TopNav from "./components/TopNav";
import { useState } from "react";

interface Transaction {
  date: string;
  amount: number;
  type: 'inflow' | 'outflow';
  description: string;
}

export const initialCheckingAccountData: Transaction[] = [
  { date: '2022-01-01', type: 'inflow', amount: 1000, description: 'Salary deposit' },
  { date: '2022-01-02', type: 'inflow', amount: 200, description: 'Bonus deposit' },
  { date: '2022-01-03', type: 'outflow', amount: 400, description: 'Rent payment' },
  { date: '2022-01-04', type: 'outflow', amount: 50, description: 'Grocery shopping' },
  { date: '2022-01-05', type: 'inflow', amount: 300, description: 'Freelance payment' },
  { date: '2022-01-06', type: 'outflow', amount: 75, description: 'Dinner at a restaurant' },
  { date: '2022-01-07', type: 'inflow', amount: 150, description: 'Gift from a friend' },
  { date: '2022-01-08', type: 'outflow', amount: 60, description: 'Utilities payment' },
];

const Home = () => {
  const [checkingAccountData, setCheckingAccountData] = useState<Transaction[]>(initialCheckingAccountData);

  return (
    <body className="bg-white w-full h-full">
      <div className="flex px-8 pt-6">
        <section className="w-1/4">
          <SideNav />
        </section>
        <section className="w-3/4 space-y-8 pl-8">
          <TopNav />
          <TransChart transactions={checkingAccountData} />
        </section>
      </div>
    </body>
  )
}

export default Home;