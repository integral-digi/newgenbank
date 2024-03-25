import Image from "next/image";

export const depositOptions = [
    {name:"BTC", address: "34ov7eJTmAXXWBQfxvfYYj88bbovfBRnC1", image: "/assets/bitcoin.svg", qr: "/images/btc.png"},
    {name:"ETH", address: "0x75789A33dDfccBe26c84cC7b3dCDA86B1FC44FE9", image: "/assets/ethereum.svg", qr: "/images/eth.png"},
    {name:"USDT", address: "0x75789A33dDfccBe26c84cC7b3dCDA86B1FC44FE9", image: "/assets/usdt.svg", qr: "images/usdt.png"}
]

interface WalletAddressProps {
  depositAmt: number;
  copyToClipboard: (text: string) => void;
}

const copySrc = "/assets/copy.svg";

const EthWalletAddress: React.FC<WalletAddressProps> = ({ depositAmt, copyToClipboard }) => {
  const walletAddress = depositOptions[1].address;

  const handleCopyAddress = () => {
    copyToClipboard(walletAddress);
  };

  return (
    <section className="">
      <section className="space-y-6 mx-auto">
        <p className="text-center text-base text-white font-bold">
          Send ${depositAmt} to the Ethereum wallet address below to complete your deposit
        </p>
        <Image
          src={depositOptions[1].qr}
          alt={depositOptions[1].name}
          width={240}
          height={240}
          className="justify-center mx-auto"
        />
        <div className="flex justify-center items-center space-x-2 lg:block lg:space-y-4 overflow-clip">
          <p className="text-center text-base text-white font-mono">{walletAddress}</p>
          <button
            onClick={handleCopyAddress}
            className="px-3 py-1 bg-indigo-800 text-white font-medium text-sm rounded-md focus:outline-none"
          >
            <Image
              src={copySrc}
              width={24}
              height={24}
              alt="copy"  
            />
          </button>
        </div>
      </section>
    </section>
  );
};

export default EthWalletAddress;
