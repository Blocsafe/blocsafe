# BLOCSAFE

This repository contains three main smart contracts for Blocsafe and all were deployed on Lisk testnet and verified on Lisk Sepolia Blockscout:

## MockUSDT
- Deployed address: 0xEf7317a48f0e16B405706BD373627A846885dEB8
- Lisk Sepolia Blockscout verification link: https://sepolia-blockscout.lisk.com/address/0xEf7317a48f0e16B405706BD373627A846885dEB8#code

The MockUSDT contract is a simulated USDT token used for testing purposes. It mimics the behavior of the actual USDT token on the Ethereum network, allowing developers to test interactions with a stablecoin without using real assets.

Key features:
- ERC20 compliant
- Minting and burning capabilities for testing

## Notifications
- Deployed address: 0xA0806cf43f5E9A2C42c8291676EE814b39A6413e
- Lisk Sepolia Blockscout verification link: https://sepolia-blockscout.lisk.com/address/0xA0806cf43f5E9A2C42c8291676EE814b39A6413e#code

The Notifications contract manages event emissions for transactions in the Escrow contract. It serves as a central hub for logging and tracking important events in the Blocsafe platform.

Key features:
- Emits events and sends notifications for transaction requests, acceptance, completion, rejection and custom messages
- Helps track the status of transactions
- Provides a standardized way to monitor transactions and notify users of any changes or updates


## Escrow
- Deployed address: 0xc270739b50d8ef6bEf63dd566e2393BD45825916
- Lisk Sepolia Blockscout verification link: https://sepolia-blockscout.lisk.com/address/0xc270739b50d8ef6bEf63dd566e2393BD45825916#code

The Escrow contract is the core component of Blocsafe manages secure transactions between buyers and sellers, implementing a robust system for creating, accepting, and completing transactions with built-in fee management.

Key features:
- Creates and manages transactions between buyers and sellers
- Supports multiple transaction statuses (PENDING, ACCEPTED, COMPLETED, CANCELLED)
- Implements fee payment and transaction payment mechanisms
- Utilizes ERC20 tokens (USDT and LSK) for payments
- Includes member management with buyer/seller roles
- Emits events for transaction lifecycle stages
- Implements security measures like reentrancy protection
- Integrates with a Notifications system for transaction updates

The contract allows users to:
- Create detailed transactions with items, descriptions, and amounts
- Accept or cancel pending transactions
- Pay transaction fees
- Make payments for accepted transactions
- Withdraw funds (owner only)

Security features include:
- Role-based access control
- Status checks to ensure proper transaction flow
- SafeERC20 for secure token transfers
- Reentrancy protection for critical functions

This Escrow contract provides a flexible and secure foundation for managing complex transactions between parties, with built-in safeguards and detailed event logging.

These contracts work together to facilitate secure and efficient trustless transactions between a Buyer and Seller on Blocsafe.
