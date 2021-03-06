/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { TieredOwnable } from "./TieredOwnable";

export class TieredOwnableFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TieredOwnable {
    return new Contract(address, _abi, signerOrProvider) as TieredOwnable;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "previousTier",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newTier",
        type: "uint256"
      }
    ],
    name: "OwnershipGranted",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_tier",
        type: "uint256"
      }
    ],
    name: "assignOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    name: "getOwnerTier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
