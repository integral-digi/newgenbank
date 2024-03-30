"use client"
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Alert } from "@mui/material";
import { XMarkIcon } from "@heroicons/react/24/outline";
import WalletAddress from "./WalletAddress";

const BitcoinPopup = ({ isOpen, setIsOpen, depositAmt }: any) => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowSuccessAlert(true);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      setShowErrorAlert(true);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="section"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="p-4 bg-white relative z-10"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <section
            className="fixed inset-0 bg-black/80 z-0"
            aria-hidden="true"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="px-8 pt-1 pb-6 space-y-12 align-middle shadow-xl transition-all max-w-2xl transform z-50 bg-slate-900 m-auto -mt-[680px] rounded-2xl lg:-mt-[800px]">
            <section
              className="w-6 h-6 cursor-pointer absolute top-12 right-8"
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="w-4 h-4 text-white" />
            </section>
            <Dialog.Title className="text-white text-2xl font-bold text-center">
              Deposit
            </Dialog.Title>
            <section className="w-full">
              <WalletAddress
                copyToClipboard={copyToClipboard}
                depositAmt={depositAmt}
              />
            </section>
            <section className="">
              {showSuccessAlert && (
                <Alert severity="success">
                  Wallet address copied to clipboard!
                </Alert>
              )}
              {showErrorAlert && (
                <Alert severity="error">
                  Failed to copy wallet address to clipboard!
                </Alert>
              )}
            </section>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default BitcoinPopup;
