import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { ArrowTrendingDownIcon } from "@heroicons/react/24/solid";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

interface DropdownItemProps {
    label: string;
    value: string;
    icon: JSX.Element;
    onClick: () => void;
}

const MoveMoneyDropdown = () => {
  const router = useRouter();

  const dropdownItems: DropdownItemProps[] = [
    {
      label: 'Withdraw Funds',
      value: 'withdraw',
      icon: <BanknotesIcon className="w-4 h-4" />,
      onClick: () => router.push("/withdraw"), 
    },
    {
      label: 'Deposit Funds',
      value: 'deposit-funds',
      icon: <ArrowTrendingDownIcon className="w-4 h-4 text-slate-950" />,
      onClick: () => router.push("/deposit"),
    },
    {
      label: 'Transfer Funds',
      value: 'transfer-funds',
      icon: <ArrowTrendingUpIcon className="w-4 h-4 text-slate-950" />,
      onClick: () => console.log('transfer money'),
    },
  ];

    return (
        <section className="absolute top-0 left-0 w-64 mt-2 bg-white rounded-lg shadow-xl">
            <section className="p-6">
                <section className="space-y-8">
                    {dropdownItems.map((item, index) => (
                        <button key={index} className="flex items-center px-4 cursor-pointer space-x-4 hover:bg-neutral-100" onClick={item.onClick}>
                            {item.icon}
                            <p className="text-sm font-normal text-slate-950">{item.label}</p>
                        </button>
                    ))}
                </section>
            </section>
        </section>
    );
}

export default MoveMoneyDropdown;
