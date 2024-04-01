import { formattedCurr } from "@/app/dashboard/components/Balances";

const UserInfo = ({users}: any) => {
    return (
        <div className="space-y-12 w-full h-max">
            <h3 className="text-2xl font-bold text-slate-950">DollarFX Users Data</h3>
            <div className="rounded-xl justify-center mx-auto">
                <div className="space-y-4">
                    {users.map((user, index) => (
                        <div key={index} className="w-full bg-white font-medium shadow-sm rounded-md">
                            <div className="pl-16 flex justify-between">  
                                <div className="w-[30%] py-8 flex items-center space-x-4">
                                    <span className="rounded-full bg-gray-300 w-8 h-8 flex items-center">
                                        <p className="text-xs font-bold text-center justify-center m-auto">{user.recipient.charAt(0)}</p>
                                    </span>
                                    <p className="">{formattedCurr(user.verifiedInvestAmt)}</p> 
                                    <p className="text-xs text-slate-500">{user.verificationStatus}</p>
                                </div> 
                                <div className="w-[15%] py-8">{user.role}</div>
                                <div className="w-[25%] py-8">{user.signUpDate}</div>
                                {user.type === "outflow"
                                    ? <div className="w-[20%] py-8">-{formattedCurr(user.recentDeposit)}</div>
                                    : <div className="w-[20%] py-8">+{formattedCurr(user.recentDeposit)}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserInfo;