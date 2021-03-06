pragma solidity ^0.6.8;
pragma experimental ABIEncoderV2;


import "../utils/Ownable.sol";

contract OwnableMock is Ownable {

  function call_onlyOwner() external onlyOwner() returns(bool) {
    return true;
  }
  function call_anyone() external returns(bool) {
    return true;
  }

  function call_throw() external returns(bool) {
    revert(":/");
    return true;
  }

  fallback() external {}
}