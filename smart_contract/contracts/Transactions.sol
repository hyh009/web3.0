// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// similar to class
contract Transactions {
    uint256 transactionCount;
    //similar to function
    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );
    //similar to Object
    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    // transactions is declared to be an array of TransferStruct
    TransferStruct[] transactions;

    // add public meaning everyone can access to this function
    // memory means it's just some specific data store in the memory of that transaction (additional data passthrough blockchain)
    function addToBlockchain(
        address payable recevier,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCount += 1;
        // we can get msg when we call specific function in the blockchain
        transactions.push(
            TransferStruct(
                msg.sender,
                recevier,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );

        emit Transfer(
            msg.sender,
            recevier,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
