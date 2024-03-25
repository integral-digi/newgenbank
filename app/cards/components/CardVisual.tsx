"use client"
import { useState } from "react";
import { formattedCurr } from "@/app/dashboard/components/Balances";

const CardVisual = () => {
  const cardBalance: number = 0;
  const cardNum: number = 5595;

  const [showBalance, setShowBalance] = useState(true);

  const handleClick = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="w-full h-60 rounded-2xl shadow-xl bg-neutral-100">
      <div className="py-6 px-9">
        <span className="w-full flex items-center justify-between">
          <p className="text-slate-950 text-xs font-primary leading-tight">
            Available Balance
          </p>
          <button onClick={handleClick}>
            <img src="/assets/eye.svg" alt="view-close" className="w-6 h-6" />
          </button>
        </span>
        <span>
          {showBalance ? (
            <p className="mt-12 text-slate-950 text-5xl font-black">{formattedCurr(cardBalance)}</p>
          ) : (
            <p className="mt-12 text-slate-950 text-5xl font-black">*****</p>
          )}
        </span>
        <span className="w-full flex items-center justify-between mt-5">
          <p className="text-slate-950 text-base font-medium">**** {cardNum}</p>
          <img src="/assets/mc.svg" alt="card number" className="w-12 h-8 relative" />
        </span>
      </div>
    </div>
  );
};

export default CardVisual;