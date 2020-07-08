/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ERC1155Mock } from "./ERC1155Mock";

export class ERC1155MockFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ERC1155Mock> {
    return super.deploy(overrides) as Promise<ERC1155Mock>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ERC1155Mock {
    return super.attach(address) as ERC1155Mock;
  }
  connect(signer: Signer): ERC1155MockFactory {
    return super.connect(signer) as ERC1155MockFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Mock;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newNonce",
        type: "uint256"
      }
    ],
    name: "NonceChange",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "TransferBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "TransferSingle",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "URI",
    type: "event"
  },
  {
    stateMutability: "nonpayable",
    type: "fallback"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      }
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]"
      }
    ],
    name: "batchBurnMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "batchMintMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "burnMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address"
      }
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signerAddress",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_sig",
        type: "bytes"
      }
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bool",
        name: "isValid",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      },
      {
        internalType: "bool",
        name: "_isGasFee",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "metaSafeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_isGasFee",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "metaSafeTransferFrom",
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
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "_isGasFee",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "metaSetApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "mintMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50613171806100206000396000f3fe608060405234801561001057600080fd5b506004361061010a5760003560e01c8063a3d4926e116100a2578063d7a0ad9011610071578063d7a0ad901461024e578063e985e9c514610261578063f242432a14610274578063f5d4c82014610287578063fa4e12d71461029a5761010a565b8063a3d4926e14610202578063a3f091f514610215578063bd7a6c4114610228578063ce0b514b1461023b5761010a565b80632eb2c2d6116100de5780632eb2c2d6146101a7578063437ecbe9146101bc5780634e1273f4146101cf578063a22cb465146101ef5761010a565b8062fdd58e1461012b57806301ffc9a7146101545780630e89341c146101745780632d0335ab14610194575b60405162461bcd60e51b815260040161012290612bd7565b60405180910390fd5b61013e6101393660046121ac565b6102ad565b60405161014b9190613034565b60405180910390f35b61016761016236600461233d565b6102d3565b60405161014b9190612745565b610187610182366004612431565b61031a565b60405161014b9190612826565b61013e6101a2366004611cde565b61034e565b6101ba6101b5366004611e37565b610369565b005b6101ba6101ca3660046121d7565b6103e8565b6101e26101dd36600461225f565b6103f8565b60405161014b9190612704565b6101ba6101fd366004612131565b6104f0565b6101ba610210366004611d7b565b61055f565b6101ba61022336600461220b565b6106ac565b6101ba610236366004612029565b6106be565b6101ba610249366004611f58565b6106c9565b6101ba61025c36600461209b565b610781565b61016761026f366004611d43565b61078d565b6101ba610282366004611fcf565b6107bb565b6101ba610295366004611ee0565b610833565b6101676102a836600461215e565b610938565b6001600160a01b0391909116600090815260208181526040808320938352929052205490565b60006001600160e01b031982166301ffc9a760e01b148061030457506001600160e01b03198216636cdb3d1360e11b145b1561031157506001610315565b5060005b919050565b6060600361032783610d1e565b604051602001610338929190612544565b6040516020818303038152906040529050919050565b6001600160a01b031660009081526002602052604090205490565b336001600160a01b03861614806103855750610385853361078d565b6103a15760405162461bcd60e51b815260040161012290612cfd565b6001600160a01b0384166103c75760405162461bcd60e51b815260040161012290612b37565b6103d385858585610df7565b6103e1858585855a86611001565b5050505050565b6103f38383836110d4565b505050565b6060815183511461041b5760405162461bcd60e51b815260040161012290612c1e565b606083516001600160401b038111801561043457600080fd5b5060405190808252806020026020018201604052801561045e578160200160208202803683370190505b50905060005b84518110156104e85760008086838151811061047c57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008583815181106104b257fe5b60200260200101518152602001908152602001600020548282815181106104d557fe5b6020908102919091010152600101610464565b509392505050565b3360008181526001602090815260408083206001600160a01b038716808552925291829020805460ff191685151517905590519091907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190610553908590612745565b60405180910390a35050565b6001600160a01b0385166105855760405162461bcd60e51b815260040161012290612df3565b606061058f611b35565b606061064289857fa3d4926e8cf8fe8e020cd29f514c256bc2eec62aa2337e415f1a33a4828af5a060001b8c8c8c6040516020016105cd91906124af565b604051602081830303815290604052805190602001208c6040516020016105f491906124af565b604051602081830303815290604052805190602001208c610616576000610619565b60015b60405160200161062e96959493929190612767565b60405160208183030381529060405261116c565b905061065089898989610df7565b8415610693578080602001905181019061066a91906123fd565b809450819350505061068489898989866020015186611001565b61068e89836112d5565b6106a1565b6106a1898989895a86611001565b505050505050505050565b6106b8848484846114e4565b50505050565b6103f3838383611589565b6001600160a01b0385166106ef5760405162461bcd60e51b815260040161012290612a02565b60606106f9611b35565b606061073189857fce0b514b3931bdbe4d5d44e4f035afe7113767b7db71949271f6a62d9c60f558828c8c8c8c610616576000610619565b905061073f898989896116b3565b8415610773578080602001905181019061075991906123fd565b80945081935050506106848989898986602001518661178d565b6106a1898989895a8661178d565b6106b884848484611860565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b03861614806107d757506107d7853361078d565b6107f35760405162461bcd60e51b8152600401610122906128e1565b6001600160a01b0384166108195760405162461bcd60e51b815260040161012290612839565b610825858585856116b3565b6103e1858585855a8661178d565b606061088f86837ff5d4c820494c8595de274c7ff619bead38aac4fbc3d143b5bf956aa4b84fa52482898961086957600061086c565b60015b8961087857600061087b565b60015b60405160200161062e95949392919061279b565b6001600160a01b038781166000818152600160209081526040808320948b168084529490915290819020805460ff19168915151790555192935090917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31906108f8908890612745565b60405180910390a382156109305761090e611b35565b8180602001905181019061092291906123cb565b905061092e87826112d5565b505b505050505050565b60008082511161095a5760405162461bcd60e51b815260040161012290612d4c565b6001600160a01b0385166109805760405162461bcd60e51b815260040161012290612cbc565b600061098b83611994565b60f81c9050600581106109b05760405162461bcd60e51b8152600401610122906129b7565b60008160ff1660058111156109c157fe5b90506000808080808560058111156109d557fe5b14156109f35760405162461bcd60e51b815260040161012290612a55565b6001856005811115610a0157fe5b1415610ad7578751606114610a285760405162461bcd60e51b815260040161012290612aec565b610a3988600063ffffffff6119e216565b9250610a4c88602063ffffffff6119e216565b915087604081518110610a5b57fe5b602001015160f81c60f81b60f81c935060018a85858560405160008152602001604052604051610a8e94939291906127e3565b6020604051602081039080840390855afa158015610ab0573d6000803e3d6000fd5b5050604051601f1901516001600160a01b038d81169116149750610d169650505050505050565b6002856005811115610ae557fe5b1415610b98578751606114610b0c5760405162461bcd60e51b815260040161012290612aec565b610b1d88600063ffffffff6119e216565b9250610b3088602063ffffffff6119e216565b915087604081518110610b3f57fe5b602001015160f81c60f81b60f81c935060018a604051602001610b6291906125d5565b6040516020818303038152906040528051906020012085858560405160008152602001604052604051610a8e94939291906127e3565b6003856005811115610ba657fe5b1415610c4b576040516320c13b0b60e01b81526001600160a01b038c16906320c13b0b90610bda908c908c90600401612801565b60206040518083038186803b158015610bf257600080fd5b505afa158015610c06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2a9190612359565b6001600160e01b0319166320c13b0b60e01b149650610d1695505050505050565b6004856005811115610c5957fe5b1415610cfe57604051630b135d3f60e11b81526001600160a01b038c1690631626ba7e90610c8d908d908c906004016127ca565b60206040518083038186803b158015610ca557600080fd5b505afa158015610cb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cdd9190612359565b6001600160e01b031916630b135d3f60e11b149650610d1695505050505050565b60405162461bcd60e51b8152600401610122906129b7565b949350505050565b606081610d4357506040805180820190915260018152600360fc1b6020820152610315565b818060005b8215610d5c57600101600a83049250610d48565b6060816001600160401b0381118015610d7457600080fd5b506040519080825280601f01601f191660200182016040528015610d9f576020820181803683370190505b50905060001982015b8315610ded57600a840660300160f81b82828060019003935081518110610dcb57fe5b60200101906001600160f81b031916908160001a905350600a84049350610da8565b5095945050505050565b8051825114610e185760405162461bcd60e51b815260040161012290612962565b815160005b81811015610fa257610e93838281518110610e3457fe5b6020026020010151600080896001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610e6e57fe5b6020026020010151815260200190815260200160002054611a1190919063ffffffff16565b600080886001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610ec557fe5b6020026020010151815260200190815260200160002081905550610f4d838281518110610eee57fe5b6020026020010151600080886001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610f2857fe5b6020026020010151815260200190815260200160002054611a3990919063ffffffff16565b600080876001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610f7f57fe5b602090810291909101810151825281019190915260400160002055600101610e1d565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610ff2929190612717565b60405180910390a45050505050565b611013856001600160a01b0316611a65565b15610930576000856001600160a01b031663bc197c8184338a8989886040518763ffffffff1660e01b815260040161104f959493929190612606565b602060405180830381600088803b15801561106957600080fd5b5087f115801561107d573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906110a29190612359565b90506001600160e01b0319811663bc197c8160e01b1461092e5760405162461bcd60e51b815260040161012290612e50565b6001600160a01b038316600090815260208181526040808320858452909152902054611106908263ffffffff611a1116565b6001600160a01b03841660008181526020818152604080832087845290915280822093909355915133907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629061115f908790879061303d565b60405180910390a4505050565b606080838060200190518101906111839190612375565b6001600160a01b038716600090815260026020526040812054919450919250906111b483604163ffffffff6119e216565b90508181108015906111c857508160640181105b6111e45760405162461bcd60e51b815260040161012290612f97565b600061122086838780519060200120604051602001611205939291906124e5565b60405160208183030381529060405280519060200120611a9c565b905060608683876040516020016112399392919061250c565b60408051601f198184030181528282526001600160a01b038c166000818152600260205292909220600187019081905590935090917fb861b7bdbe611a846ab271b8d2810391bc8b5a968f390c322438ecab66bccf599161129991613034565b60405180910390a26112ad89838388610938565b6112c95760405162461bcd60e51b815260040161012290612a99565b50505050509392505050565b60006112e48260600151611994565b60f81c9050600281106113095760405162461bcd60e51b815260040161012290612fe6565b60008160ff16600281111561131a57fe5b83516040850151919250600091829182916001600160a01b031615611343578660400151611345565b335b9250600085600281111561135557fe5b14156114215786606001518060200190518101906113739190611d16565b90945091506001600160a01b0384163014156113b757611395888484846116b3565b6113b28884845a856040518060200160405280600081525061178d565b61141c565b604051637921219560e11b81526001600160a01b0385169063f242432a906113e9908b908790879087906004016126cc565b600060405180830381600087803b15801561140357600080fd5b505af1158015611417573d6000803e3d6000fd5b505050505b6114da565b86606001518060200190518101906114399190611cfa565b6040516323b872dd60e01b81529094506001600160a01b038516906323b872dd9061146c908b90879086906004016126a8565b602060405180830381600087803b15801561148657600080fd5b505af115801561149a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114be9190612321565b6114da5760405162461bcd60e51b815260040161012290612c6a565b5050505050505050565b6001600160a01b038416600090815260208181526040808320868452909152902054611516908363ffffffff611a3916565b6001600160a01b03851660008181526020818152604080832088845290915280822093909355915190919033907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6290611572908890889061303d565b60405180910390a46106b860008585855a8661178d565b8151815181146115ab5760405162461bcd60e51b815260040161012290612b87565b60005b81811015611654576115ff8382815181106115c557fe5b6020026020010151600080886001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610e6e57fe5b600080876001600160a01b03166001600160a01b03168152602001908152602001600020600086848151811061163157fe5b6020908102919091018101518252810191909152604001600020556001016115ae565b5060006001600160a01b0316846001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516116a5929190612717565b60405180910390a450505050565b6001600160a01b0384166000908152602081815260408083208584529091529020546116e5908263ffffffff611a1116565b6001600160a01b038086166000908152602081815260408083208784528252808320949094559186168152808252828120858252909152205461172e908263ffffffff611a3916565b6001600160a01b03808516600081815260208181526040808320888452909152908190209390935591519086169033907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62906116a5908790879061303d565b61179f856001600160a01b0316611a65565b15610930576000856001600160a01b031663f23a6e6184338a8989886040518763ffffffff1660e01b81526004016117db959493929190612663565b602060405180830381600088803b1580156117f557600080fd5b5087f1158015611809573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061182e9190612359565b90506001600160e01b0319811663f23a6e6160e01b1461092e5760405162461bcd60e51b815260040161012290612ead565b81518351146118815760405162461bcd60e51b815260040161012290612da3565b825160005b8181101561192c576118d784828151811061189d57fe5b6020026020010151600080896001600160a01b03166001600160a01b031681526020019081526020016000206000888581518110610f2857fe5b600080886001600160a01b03166001600160a01b03168152602001908152602001600020600087848151811061190957fe5b602090810291909101810151825281019190915260400160002055600101611886565b50846001600160a01b031660006001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161197d929190612717565b60405180910390a46103e160008686865a87611001565b6000808251116119b65760405162461bcd60e51b815260040161012290612884565b816001835103815181106119c657fe5b0160200151825160001901909252506001600160f81b03191690565b60008160200183511015611a085760405162461bcd60e51b815260040161012290612f0a565b50016020015190565b600082821115611a335760405162461bcd60e51b81526004016101229061292b565b50900390565b600082820183811015611a5e5760405162461bcd60e51b815260040161012290612f67565b9392505050565b6000813f8015801590611a5e57507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141592915050565b600060405180604001604052806002815260200161190160f01b8152507f035aff83d86937d35b32e04f0ddc6ff469290eef2f1b692d8a815c89404d474960001b30604051602001611aef929190612750565b6040516020818303038152906040528051906020012083604051602001611b18939291906124e5565b604051602081830303815290604052805190602001209050919050565b6040518060800160405280600081526020016000815260200160006001600160a01b03168152602001606081525090565b600082601f830112611b76578081fd5b8135611b89611b8482613071565b61304b565b818152915060208083019084810181840286018201871015611baa57600080fd5b60005b84811015611bc957813584529282019290820190600101611bad565b505050505092915050565b600082601f830112611be4578081fd5b8135611bf2611b8482613090565b9150808252836020828501011115611c0957600080fd5b8060208401602084013760009082016020015292915050565b600082601f830112611c32578081fd5b8151611c40611b8482613090565b9150808252836020828501011115611c5757600080fd5b611c688160208401602086016130b3565b5092915050565b600060808284031215611c80578081fd5b611c8a608061304b565b905081518152602082015160208201526040820151611ca8816130df565b604082015260608201516001600160401b03811115611cc657600080fd5b611cd284828501611c22565b60608301525092915050565b600060208284031215611cef578081fd5b8135611a5e816130df565b600060208284031215611d0b578081fd5b8151611a5e816130df565b60008060408385031215611d28578081fd5b8251611d33816130df565b6020939093015192949293505050565b60008060408385031215611d55578182fd5b8235611d60816130df565b91506020830135611d70816130df565b809150509250929050565b60008060008060008060c08789031215611d93578182fd5b8635611d9e816130df565b95506020870135611dae816130df565b945060408701356001600160401b0380821115611dc9578384fd5b611dd58a838b01611b66565b95506060890135915080821115611dea578384fd5b611df68a838b01611b66565b945060808901359150611e08826130f7565b90925060a08801359080821115611e1d578283fd5b50611e2a89828a01611bd4565b9150509295509295509295565b600080600080600060a08688031215611e4e578081fd5b8535611e59816130df565b94506020860135611e69816130df565b935060408601356001600160401b0380821115611e84578283fd5b611e9089838a01611b66565b94506060880135915080821115611ea5578283fd5b611eb189838a01611b66565b93506080880135915080821115611ec6578283fd5b50611ed388828901611bd4565b9150509295509295909350565b600080600080600060a08688031215611ef7578081fd5b8535611f02816130df565b94506020860135611f12816130df565b93506040860135611f22816130f7565b92506060860135611f32816130f7565b915060808601356001600160401b03811115611f4c578182fd5b611ed388828901611bd4565b60008060008060008060c08789031215611f70578384fd5b8635611f7b816130df565b95506020870135611f8b816130df565b945060408701359350606087013592506080870135611fa9816130f7565b915060a08701356001600160401b03811115611fc3578182fd5b611e2a89828a01611bd4565b600080600080600060a08688031215611fe6578283fd5b8535611ff1816130df565b94506020860135612001816130df565b9350604086013592506060860135915060808601356001600160401b03811115611f4c578182fd5b60008060006060848603121561203d578081fd5b8335612048816130df565b925060208401356001600160401b0380821115612063578283fd5b61206f87838801611b66565b93506040860135915080821115612084578283fd5b5061209186828701611b66565b9150509250925092565b600080600080608085870312156120b0578182fd5b84356120bb816130df565b935060208501356001600160401b03808211156120d6578384fd5b6120e288838901611b66565b945060408701359150808211156120f7578384fd5b61210388838901611b66565b93506060870135915080821115612118578283fd5b5061212587828801611bd4565b91505092959194509250565b60008060408385031215612143578182fd5b823561214e816130df565b91506020830135611d70816130f7565b60008060008060808587031215612173578182fd5b843561217e816130df565b93506020850135925060408501356001600160401b03808211156121a0578384fd5b61210388838901611bd4565b600080604083850312156121be578182fd5b82356121c9816130df565b946020939093013593505050565b6000806000606084860312156121eb578081fd5b83356121f6816130df565b95602085013595506040909401359392505050565b60008060008060808587031215612220578182fd5b843561222b816130df565b9350602085013592506040850135915060608501356001600160401b03811115612253578182fd5b61212587828801611bd4565b60008060408385031215612271578182fd5b82356001600160401b0380821115612287578384fd5b81850186601f820112612298578485fd5b803592506122a8611b8484613071565b80848252602080830192508084018a8283890287010111156122c8578889fd5b8894505b868510156122f35780356122df816130df565b8452600194909401939281019281016122cc565b50909650870135935050508082111561230a578283fd5b5061231785828601611b66565b9150509250929050565b600060208284031215612332578081fd5b8151611a5e816130f7565b60006020828403121561234e578081fd5b8135611a5e81613105565b60006020828403121561236a578081fd5b8151611a5e81613105565b60008060408385031215612387578182fd5b82516001600160401b038082111561239d578384fd5b6123a986838701611c22565b935060208501519150808211156123be578283fd5b5061231785828601611c22565b6000602082840312156123dc578081fd5b81516001600160401b038111156123f1578182fd5b610d1684828501611c6f565b6000806040838503121561240f578182fd5b82516001600160401b0380821115612425578384fd5b6123a986838701611c6f565b600060208284031215612442578081fd5b5035919050565b6000815180845260208085019450808401835b838110156124785781518752958201959082019060010161245c565b509495945050505050565b6000815180845261249b8160208601602086016130b3565b601f01601f19169290920160200192915050565b815160009082906020808601845b838110156124d9578151855293820193908201906001016124bd565b50929695505050505050565b600084516124f78184602089016130b3565b91909101928352506020820152604001919050565b6000845161251e8184602089016130b3565b82018481528351906125378260208084019088016130b3565b0160200195945050505050565b6000808454600180821660008114612563576001811461257a576125a9565b60ff198316865260028304607f16860193506125a9565b600283048886526020808720875b838110156125a15781548a820152908501908201612588565b505050860193505b50505083516125bc8183602088016130b3565b64173539b7b760d91b9101908152600501949350505050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b6001600160a01b0386811682528516602082015260a06040820181905260009061263290830186612449565b82810360608401526126448186612449565b83810360808501526126568186612483565b9998505050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061269d90830184612483565b979650505050505050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b600060208252611a5e6020830184612449565b60006040825261272a6040830185612449565b828103602084015261273c8185612449565b95945050505050565b901515815260200190565b9182526001600160a01b0316602082015260400190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526001600160a01b0393841660208601529190921660408401526060830191909152608082015260a00190565b600083825260406020830152610d166040830184612483565b93845260ff9290921660208401526040830152606082015260800190565b6000604082526128146040830185612483565b828103602084015261273c8185612483565b600060208252611a5e6020830184612483565b6020808252602b908201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c4960408201526a1117d49150d2541251539560aa1b606082015260800190565b60208082526037908201527f4c6962427974657323706f704c617374427974653a20475245415445525f544860408201527f414e5f5a45524f5f4c454e4754485f5245515549524544000000000000000000606082015260800190565b6020808252602a908201527f4552433131353523736166655472616e7366657246726f6d3a20494e56414c49604082015269222fa7a822a920aa27a960b11b606082015260800190565b60208082526017908201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604082015260600190565b60208082526035908201527f45524331313535235f7361666542617463685472616e7366657246726f6d3a206040820152740929cac82989288be82a4a482b2a6be988a9c8ea89605b1b606082015260800190565b6020808252603a9082015260008051602061311c83398151915260408201527f7572653a20554e535550504f525445445f5349474e4154555245000000000000606082015260800190565b60208082526033908201527f455243313135354d657461236d657461536166655472616e7366657246726f6d6040820152720e881253959053125117d49150d25412515395606a1b606082015260800190565b602080825260369082015260008051602061311c8339815191526040820152757572653a20494c4c4547414c5f5349474e415455524560501b606082015260800190565b60208082526033908201527f455243313135354d657461235f7369676e617475726556616c69646174696f6e6040820152723a20494e56414c49445f5349474e415455524560681b606082015260800190565b602080825260379082015260008051602061311c83398151915260408201527f7572653a204c454e4754485f39375f5245515549524544000000000000000000606082015260800190565b60208082526030908201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960408201526f13959053125117d49150d2541251539560821b606082015260800190565b60208082526030908201527f455243313135354d696e744275726e2362617463684275726e3a20494e56414c60408201526f09288be82a4a482b2a6be988a9c8ea8960831b606082015260800190565b60208082526027908201527f455243313135354d6574614d696e744275726e4d6f636b3a20494e56414c494460408201526617d351551213d160ca1b606082015260800190565b6020808252602c908201527f455243313135352362616c616e63654f6642617463683a20494e56414c49445f60408201526b082a4a482b2be988a9c8ea8960a31b606082015260800190565b60208082526032908201527f455243313135354d657461235f7472616e736665724761734665653a204552436040820152710c8c17d514905394d1915497d1905253115160721b606082015260800190565b602080825260339082015260008051602061311c8339815191526040820152723ab9329d1024a72b20a624a22fa9a4a3a722a960691b606082015260800190565b6020808252602f908201527f45524331313535237361666542617463685472616e7366657246726f6d3a204960408201526e272b20a624a22fa7a822a920aa27a960891b606082015260800190565b602080825260439082015260008051602061311c83398151915260408201527f7572653a204c454e4754485f475245415445525f5448414e5f305f524551554960608201526214915160ea1b608082015260a00190565b60208082526030908201527f455243313135354d696e744275726e2362617463684d696e743a20494e56414c60408201526f09288be82a4a482b2a6be988a9c8ea8960831b606082015260800190565b60208082526038908201527f455243313135354d657461236d6574615361666542617463685472616e73666560408201527f7246726f6d3a20494e56414c49445f524543495049454e540000000000000000606082015260800190565b6020808252603f908201527f45524331313535235f63616c6c6f6e455243313135354261746368526563656960408201527f7665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474500606082015260800190565b6020808252603a908201527f45524331313535235f63616c6c6f6e4552433131353552656365697665643a2060408201527f494e56414c49445f4f4e5f524543454956455f4d455353414745000000000000606082015260800190565b6020808252603c908201527f4c696242797465732372656164427974657333323a20475245415445525f4f5260408201527f5f455155414c5f544f5f33325f4c454e4754485f524551554952454400000000606082015260800190565b602080825260169082015275536166654d617468236164643a204f564552464c4f5760501b604082015260600190565b6020808252602f908201527f455243313135354d657461235f7369676e617475726556616c69646174696f6e60408201526e3a20494e56414c49445f4e4f4e434560881b606082015260800190565b6020808252602e908201527f455243313135354d657461235f7472616e736665724761734665653a20554e5360408201526d2aa82827a92a22a22faa27a5a2a760911b606082015260800190565b90815260200190565b918252602082015260400190565b6040518181016001600160401b038111828210171561306957600080fd5b604052919050565b60006001600160401b03821115613086578081fd5b5060209081020190565b60006001600160401b038211156130a5578081fd5b50601f01601f191660200190565b60005b838110156130ce5781810151838201526020016130b6565b838111156106b85750506000910152565b6001600160a01b03811681146130f457600080fd5b50565b80151581146130f457600080fd5b6001600160e01b0319811681146130f457600080fdfe5369676e617475726556616c696461746f7223697356616c69645369676e6174a2646970667358221220f22d5d7dbd68bfa07d8296c8126895ce7786d0a81e112ecc87f220933f9e4d9e64736f6c63430006080033";
