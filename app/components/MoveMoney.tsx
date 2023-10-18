import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { ArrowTrendingDownIcon } from "@heroicons/react/24/solid";
import { BanknotesIcon } from "@heroicons/react/24/solid";

interface DropdownItemProps {
    label: string;
    value: string;
    icon: JSX.Element;
    onClick: () => void;
}

const dropdownItems: DropdownItemProps[] = [
  {
    label: 'Pay Someone',
    value: 'pay-someone',
    icon: <BanknotesIcon className="w-4 h-4" />,
    onClick: () => console.log('pay someone'),
  },
  {
    label: 'Deposit Funds',
    value: 'deposit-funds',
    icon: <ArrowTrendingDownIcon className="w-4 h-4 text-slate-950" />,
    onClick: () => console.log('deposit money'),
  },
  {
    label: 'Transfer Funds',
    value: 'transfer-funds',
    icon: <ArrowTrendingUpIcon className="w-4 h-4 text-slate-950" />,
    onClick: () => console.log('transfer money'),
  },
];

const MoveMoneyDropdown = () => {
    return (
        <div className="absolute top-0 left-0 w-64 mt-2 bg-white rounded-lg shadow-xl">
            <div className="p-6">
                <div className="space-y-8">
                    {dropdownItems.map((item, index) => (
                        <div key={index} className="flex items-center px-4 cursor-pointer space-x-4 hover:bg-neutral-100" onClick={item.onClick}>
                            {item.icon}
                            <p className="text-sm font-normal text-slate-950">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MoveMoneyDropdown;
