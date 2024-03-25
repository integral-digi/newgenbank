import React from "react";
import { generateRandomLeaderboardEntries } from "@/app/components/Leaderboard";

const formattedCurr = (curr:any) => {
    return curr?.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) || '';
  };

const LeaderboardPage = () => {
    const leaderboardData = generateRandomLeaderboardEntries(10)

    return (
        <div className="space-y-12 w-full h-max">
            <h3 className="text-2xl font-bold text-white">
                Leaderboard
            </h3>
            <div className="rounded-xl justify-center mx-auto">
                <div className="space-y-4">
                    {leaderboardData.map((entry, index) => (
                        <div key={index} className="w-full bg-slate-900 font-medium shadow-sm rounded-md overflow-clip">
                            <div className="pl-16 flex justify-between lg:pl-6">  
                                <div className="w-[30%] py-8 flex items-center space-x-4 ">
                                    <span className="rounded-full bg-orange-400 w-8 h-8 flex items-center">
                                        <p className="text-base text-white font-bold text-center justify-center m-auto">{entry.username.charAt(0)}</p>
                                    </span>
                                    <p className="text-base text-white">{entry.username}</p>
                                </div> 
                                <div className="w-[15%] py-8 text-white">{formattedCurr(entry.amount)}</div>
                                <div className="w-[35%] py-8 text-white overflow-hidden">                                    
                                    {entry.country}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeaderboardPage;