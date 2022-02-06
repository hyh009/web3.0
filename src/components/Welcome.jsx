import { useState, useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
// input component basic setting
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    name={name}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  // common style for block
  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm text-white text-light";

  return (
    <div className="flex w-full items-center justify-center 2xl:justify-around">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 2xl:w-full">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 p-3 rounded-full cursor-pointer bg-[#4f1974] hover:bg-[#5c1d86]"
            >
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div
              className={`sm:rounded-tr-none rounded-tr-2xl ${commonStyles}`}
            >
              Security
            </div>
            <div className={`rounded-none sm:rounded-tr-2xl ${commonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div
              className={`sm:rounded-bl-none rounded-bl-2xl ${commonStyles}`}
            >
              Reliability
            </div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl  aspect-[1.586/1] md:w-72 w-full mb-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full ">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-neutral-300 flex justify-center items-center">
                  <SiEthereum fontSize={21} color="rgb(212 212 212)" />
                </div>
                <BsInfoCircle fontSize={17} color="rgb(212 212 212)" />
              </div>
              <div>
                <p className="text-neutral-300 font-light text-sm">
                  {currentAccount ? shortenAddress(currentAccount) : "Address"}
                </p>
                <p className="text-neutral-300 font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword(Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <div className="w-full h-[1px] bg-gray-400 my-2"></div>
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                onClick={handleSubmit}
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
