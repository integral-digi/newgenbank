"use client"
import { useState, Fragment } from "react";
import BitcoinPopup from "./Popup";
import EthPopup from "./EthPopup";
import UsdtButton from "./UsdtButton";
import EthButton from "./EthButton";
import BtcButton from "./BtcButton";
import { Dialog, Transition } from "@headlessui/react";

const depositOptions = [
  { name: "BTC", address: "34ov7eJTmAXXWBQfxvfYYj88bbovfBRnC1", image: "/assets/bitcoin.svg", qr: "/images/btc.png" },
  { name: "ETH", address: "0x75789A33dDfccBe26c84cC7b3dCDA86B1FC44FE9", image: "/assets/ethereum.svg", qr: "/images/eth.png" },
  { name: "USDT", address: "0x75789A33dDfccBe26c84cC7b3dCDA86B1FC44FE9", image: "/assets/usdt.svg", qr: "images/usdt.png" }
];

const DepositForm = ({ depositAmt, setDepositAmt }: any) => {
  const [localDepositAmt, setLocalDepositAmt] = useState(depositAmt);
  const [showBitcoinPopup, setShowBitcoinPopup] = useState(false);
  const [showEthPopup, setShowEthPopup] = useState(false);

  const handleChange = (event: any) => {
    setLocalDepositAmt(event.target.value);
    setDepositAmt(event.target.value);
  };

  const toggleBitcoinPopup = () => {
    setShowBitcoinPopup(!showBitcoinPopup);
  };

  const toggleEthPopup = () => {
    setShowEthPopup(!showEthPopup);
  };

  const currencies = { euros: "€", dollar: "$" };

  return (
    <section className="w-full h-full bg-slate-900 rounded-xl relative">
      <section className="w-[60%] p-12 space-y-24 h-full mx-auto lg:w-full lg:px-6">
        <section className="flex items-center space-x-7 w-full">
          <span className="">
            <p className="text-white text-2xl font-black">
              {currencies.dollar}
            </p>
          </span>
          <input
            type="number"
            value={localDepositAmt}
            onChange={handleChange}
            className="w-full text-white bg-transparent border-none text-5xl font-black focus:outline-none selection:outline-none focus:border-none"
          />
        </section>
        <section className="space-y-6">
          <p className="text-white text-base font-medium">
            Select your method of payment
          </p>
          <section className="flex items-center justify-between w-full lg:block lg:space-y-6">
            <BtcButton onClick={toggleBitcoinPopup} />
            <EthButton onClick={toggleEthPopup} />
            <UsdtButton />
          </section>
        </section>
      </section>

      {/* Bitcoin Popup */}
      <Transition.Root show={showBitcoinPopup} as={Dialog} onClose={toggleBitcoinPopup}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <BitcoinPopup depositAmt={depositAmt} isOpen={showBitcoinPopup} setIsOpen={setShowBitcoinPopup} />
            </div>
          </div>
        </Transition.Child>
      </Transition.Root>
      {/* Ethereum Popup */}
      <Transition.Root show={showEthPopup} as={Dialog} onClose={toggleEthPopup}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <EthPopup depositAmt={depositAmt} isOpen={showEthPopup} setIsOpen={setShowEthPopup} />
            </div>
          </div>
        </Transition.Child>
      </Transition.Root>
    </section>
  );
};

export default DepositForm;
