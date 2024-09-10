// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.24;

contract Notifications {
  error OnlyOwner();

  address immutable public OWNER;

  struct Notification {
    address user;
    string message;
    bool isRead;
    uint256 timestamp;
  }

  mapping(address => Notification[]) private notifications;

   constructor(address _owner) {
    OWNER = _owner;
  }

  function addNotification(address _user, string memory _message) public {
    if (msg.sender != OWNER) revert OnlyOwner();

    notifications[_user].push(Notification({
      user: _user,
      message: _message,
      isRead: false,
      timestamp: block.timestamp
    }));
  }

   function getUnreadNotifications(address _user) public view returns (Notification[] memory) {
    if (msg.sender != OWNER) revert OnlyOwner();

    uint256 unreadCount = 0;

    for (uint256 i = 0; i < notifications[_user].length; i++) {
        if (!notifications[_user][i].isRead) {
            unreadCount++;
        }
    }

    Notification[] memory unreadNotifications = new Notification[](unreadCount);

    uint256 j = 0;

    for (uint256 i = 0; i < notifications[_user].length; i++) {
        if (!notifications[_user][i].isRead) {
            unreadNotifications[j] = notifications[_user][i];
            j++;
        }
    }

    return unreadNotifications;
  }

  function getNotifications(address _user) public view returns (Notification[] memory) {
    if (msg.sender != OWNER) revert OnlyOwner();

    return notifications[_user];
  }

  function markNotificationAsRead(address _user, uint256 _index) public {
    if (msg.sender != OWNER) revert OnlyOwner();

    notifications[_user][_index].isRead = true;
  }
}