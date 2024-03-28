"use client"
import { useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export const formattedCurr = (curr:any) => {
    return curr?.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) || '';
  };

const Balance = () => {
  const [checkingBalance, setCheckingBalance] = useState(null);
  const [savingBalance, setSavingBalance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const response = await fetch('/api/balances'); // Fetch balances from backend
        if (!response.ok) {
          throw new Error('Failed to fetch balances');
        }
        const data = await response.json();
        setCheckingBalance(data.checkingBal);
        setSavingBalance(data.savingBal);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchBalances();
  }, []); // Empty dependency array to fetch balances only once on component mount

  return (
    <div className="space-y-12">
      <section className="h-56 w-full bg-slate-900 flex items-center shadow-sm rounded-xl">
        <span className="space-y-4 m-auto relative">
          <p className="text-xs font-medium text-neutral-400 text-center">ACTIVE DEPOSIT</p>
          <Tooltip
            arrow
            placement="top"
            title="This is your deposit which is currently being used to trade and earn profits."
          >
            <InformationCircleIcon className="absolute z-30 cursor-pointer font-medium -top-3.5 -right-4 w-3 h-3 m-auto text-neutral-400" />
          </Tooltip>
          <p className="text-4xl text-center font-bold text-white">{formattedCurr(checkingBalance)}</p>
          <p className="text-xs text-center font-medium text-indigo-600 underline">Account Details</p>
        </span>
      </section>
      <section className="h-56 w-full bg-slate-900 flex items-center shadow-sm rounded-xl">
        <span className="space-y-4 m-auto relative">
          <p className="text-xs font-medium text-neutral-400 text-center">CUMULATIVE PROFIT</p>
          <Tooltip
            arrow
            placement="top"
            title="This is the profit you have earned so far on your deposits"
          >
            <InformationCircleIcon className="absolute z-30 cursor-pointer font-medium -top-3.5 -right-4 w-3 h-3 m-auto text-neutral-400" />
          </Tooltip>
          <p className="text-4xl text-center font-bold text-white">{formattedCurr(savingBalance)}</p>
        </span>
      </section>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Balance;
