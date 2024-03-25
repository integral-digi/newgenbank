import Image from "next/image"
import { depositOptions } from "./WalletAddress"

const UsdtButton = () => {
    return (
        <button className="p-8 justify-center bg-slate-800 space-y-6 rounded-lg w-36 lg:w-full">
        <Image
          src={depositOptions[2].image}
          alt={depositOptions[2].name}
          width={24}
          height={24}
          className="mx-auto"
        />
        <p className="text-white text-base font-medium text-center">
          USDT
        </p>
      </button>
    )
}

export default UsdtButton;