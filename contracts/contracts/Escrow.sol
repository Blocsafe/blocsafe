//SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Escrow is ReentrancyGuard {
  using SafeERC20 for IERC20;
  
  //events
  event TransactionCreated(uint256 indexed transactionId, address indexed initator, InitiatorRole initatorRole, uint256 totalAmount, address indexed feePayer);
  event TransactionAccepted(uint256 indexed transactionId, address indexed member);
  event TransactionCancelled(uint256 indexed transactionId, address indexed member);
  event FeePaid(uint256 indexed transactionId, address indexed member, uint256 amount);
  event TransactionPaymentMade(uint256 indexed transactionId, address indexed member, uint256 indexed amount);
  event FundsWithdrawn(uint256 indexed amount, uint256 indexed time);


  //errors  
  error OnlyOwner();
  error NotAMember();
  error TransactionNotFound();
  error TransactionNotPending();
  error NotInTransaction();
  error UnsupportedToken();
  error TransactionNotAccepted();
  error InsufficientAmount();
  error FeeNotPaid();

  address usdtAddress;
  address lskAddress;
  address immutable OWNER;

  struct Transaction {
    string title;
    address initator;
    InitiatorRole initatorRole;
    string description;
    TransactionItem[] items;
    uint256 totalAmount;
    uint256 fee;
    address buyer;
    address seller;
    address feePayer;
    TranasactionStatus status;
    bool feePaid;
    bool transactionPaid;
  }

  struct TransactionItem {
    string name;
    uint256 amount;
    string description;
    string category;
  }

  enum TranasactionStatus {
    PENDING,
    ACCEPTED,
    COMPLETED,
    CANCELLED
  }

  enum InitiatorRole {
    NONE,
    BUYER,
    SELLER
  }

  mapping(uint256 => Transaction) public transactions;
  uint256 transactionCount;

  mapping(address => InitiatorRole) public members;

  constructor(address _usdtAddress, address _lskAddress) {
    usdtAddress = _usdtAddress;
    lskAddress = _lskAddress;
    OWNER = msg.sender;
  }

  function addMember(address _member, InitiatorRole _role) external {
    if (msg.sender != OWNER) revert OnlyOwner();
    members[_member] = _role;
  }

  function createTransaction(
    string memory _title,
    InitiatorRole _initatorRole,
    string memory _description,
    TransactionItem[] memory _items,
    uint256 _totalAmount,
    address _buyer,
    address _seller,
    address _feePayer,
    uint256 _fee
  ) external {
    if (members[msg.sender] == InitiatorRole.NONE) revert NotAMember();
    uint256 transactionId = transactionCount + 1;

    transactions[transactionId] = Transaction({
      title: _title,
      initator: msg.sender,
      initatorRole: _initatorRole,
      description: _description,
      items: _items,
      totalAmount: _totalAmount,
      buyer: _buyer,
      seller: _seller,
      feePayer: _feePayer,
      status: TranasactionStatus.PENDING,
      fee: _fee,
      feePaid: false,
      transactionPaid: false
    });

    transactionCount = transactionId;

    emit TransactionCreated(transactionId, msg.sender, _initatorRole, _totalAmount, _feePayer);
  }

  function getTransactions() external view returns (Transaction[] memory) {
    Transaction[] memory _transactions = new Transaction[](transactionCount);
    for (uint256 i = 0; i < transactionCount; i++) {
      _transactions[i] = transactions[i + 1];
    }

    return _transactions;
  }

  function getTransactionById(uint256 _transactionId) external view returns (Transaction memory) {
    return transactions[_transactionId];
  }

  function acceptTransaction(uint256 _transactionId) external {
    Transaction storage transaction = transactions[_transactionId];
    if (members[msg.sender] == InitiatorRole.NONE) revert NotAMember();
    if (transaction.status != TranasactionStatus.PENDING) revert TransactionNotPending();
    if (msg.sender != transaction.buyer && msg.sender != transaction.seller) revert NotInTransaction();

    transaction.status = TranasactionStatus.ACCEPTED;

    emit TransactionAccepted(_transactionId, msg.sender);
  }

  function cancelTransaction(uint256 _transactionId) external {
    Transaction storage transaction = transactions[_transactionId];
    if (members[msg.sender] == InitiatorRole.NONE) revert NotAMember();
    if (transaction.status != TranasactionStatus.PENDING) revert TransactionNotPending();
    if (msg.sender != transaction.buyer && msg.sender != transaction.seller) revert NotInTransaction();

    transaction.status = TranasactionStatus.CANCELLED;

    emit TransactionCancelled(_transactionId, msg.sender);
  }

  function payFee(
    uint256 _transactionId,
    address _tokenAddress,
    uint256 _amount
  ) external {
    Transaction storage transaction = transactions[_transactionId];

    if (members[msg.sender] == InitiatorRole.NONE) revert NotAMember();
    if (transaction.status != TranasactionStatus.PENDING) revert TransactionNotPending();
    if (msg.sender != transaction.buyer && msg.sender != transaction.seller) revert NotInTransaction();
    if (_tokenAddress != usdtAddress && _tokenAddress != lskAddress) revert UnsupportedToken();
    if (_amount < transaction.fee) revert InsufficientAmount();

    IERC20(_tokenAddress).safeTransferFrom(msg.sender, address(this), _amount);
    transaction.feePaid = true;

    emit FeePaid(_transactionId, msg.sender, _amount);
  }

  function makePayment(
    uint256 _transactionId,
    address _tokenAddress,
    uint256 _amount
  ) external nonReentrant {
    Transaction storage transaction = transactions[_transactionId];
    if (members[msg.sender] == InitiatorRole.NONE) revert NotAMember();
    if (transaction.status != TranasactionStatus.ACCEPTED) revert TransactionNotAccepted();
    if (msg.sender != transaction.buyer && msg.sender != transaction.seller) revert NotInTransaction();
    if (_tokenAddress != usdtAddress && _tokenAddress != lskAddress) revert UnsupportedToken();
    if (_amount < transaction.totalAmount) revert InsufficientAmount();
    if(msg.sender == transaction.feePayer && _amount > transaction.totalAmount + transaction.fee) revert InsufficientAmount();
    if(transaction.feePayer != msg.sender && !transaction.feePaid) revert FeeNotPaid();

    IERC20(_tokenAddress).safeTransferFrom(msg.sender, address(this), _amount);

    transaction.transactionPaid = true;

    transaction.status = TranasactionStatus.COMPLETED;

    emit TransactionPaymentMade(_transactionId, msg.sender, _amount);
  }

  function withdrawFunds(address _tokenAddress, uint256 _amount) external nonReentrant {
    if(msg.sender != OWNER) revert OnlyOwner();

    IERC20(_tokenAddress).safeTransfer(msg.sender, _amount);

    emit FundsWithdrawn(_amount, block.timestamp);
  }
}
