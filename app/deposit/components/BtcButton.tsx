import Image from "next/image";
import { depositOptions } from "./WalletAddress";

interface BtcButtonProps {
    onClick: () => void; // Function to handle click event
}

const BtcButton: React.FC<BtcButtonProps> = ({ onClick }) => {
    return (
        <button className="justify-items-center p-8 bg-slate-800 space-y-6 rounded-lg w-36 lg:w-full" onClick={onClick}>
            <Image
                src={depositOptions[0].image}
                alt={depositOptions[0].name}
                width={24}
                height={24}
                className="mx-auto"
            />
            <p className="text-white text-base font-medium text-center">
                BTC
            </p>
      </button>
    )
}

export default BtcButton;
