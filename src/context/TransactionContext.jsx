import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

// need to set up metamask
const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const transactionContract = getEthereumContract();
      const availableTransactions =
        await transactionContract.getAllTransactions();
      const structuredTransactions = availableTransactions.map(
        (transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        })
      );
      setTransactions(structuredTransactions);
    } catch (err) {
      console.log(err);
    }
  };
  const checkIfWalletIsConnected = async () => {
    try {
      //check if metamask installed
      if (!ethereum) return alert("Please install metamask.");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
        //getAllTransactions();
      } else {
        console.log("No accounts found.");
      }
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object.");
    }
  };
  // will be pass to component with connect wallet button
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask.");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object.");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install metamask.");
      // get the data from the form
      const { addressTo, amount, keyword, message } = formData;
      // we can use transactionContract to call the function we defineed by solidity contract
      const transactionContract = getEthereumContract();
      // parse input amount into GWEI ( one billion gwei per ether )
      const parseAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", //21000 GWEI
            value: parseAmount._hex,
          },
        ],
      });
      // to keep track the transaction by the function created in the contract
      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parseAmount,
        message,
        keyword
      );
      setIsLoading(true);
      // wait until transaction finish
      await transactionHash.wait();
      setIsLoading(false);
      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
    } catch (err) {
      console.log(err);
    }
  };

  const checkIfTransactionsExist = async () => {
    try {
      const transactionContract = getEthereumContract();
      const transactionCount = await transactionContract.getTransactionCount();
      window.localStorage.setItem("transactionCount", transactionCount);
    } catch (err) {}
  };
  useEffect(() => {
    //when component load check if we have account connected
    //if yes set current account
    checkIfWalletIsConnected();
    checkIfTransactionsExist();
  }, []);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        sendTransaction,
        handleChange,
        isLoading,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
