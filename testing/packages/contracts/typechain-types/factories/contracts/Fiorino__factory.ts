/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Fiorino, FiorinoInterface } from "../../contracts/Fiorino";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e9738038062000e978339810160408190526200003491620002c8565b806040518060400160405280600781526020016646696f72696e6f60c81b81525060405180604001604052806002815260200161464960f01b81525081600390816200008191906200039f565b5060046200009082826200039f565b5050506001600160a01b038116620000c9576000604051631e4fbdf760e01b8152600401620000c091906200046b565b60405180910390fd5b620000d48162000104565b50620000fd33620000e86012600a62000594565b620000f790620186a0620005a5565b62000156565b50620005d5565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166200018357600060405163ec442f0560e01b8152600401620000c091906200046b565b620001916000838362000195565b5050565b6001600160a01b038316620001c4578060026000828254620001b89190620005bf565b90915550620002389050565b6001600160a01b03831660009081526020819052604090205481811015620002195760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000c0565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216620002565760028054829003905562000275565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002bb91815260200190565b60405180910390a3505050565b600060208284031215620002db57600080fd5b81516001600160a01b0381168114620002f357600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200032557607f821691505b6020821081036200034657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200039a57600081815260208120601f850160051c81016020861015620003755750805b601f850160051c820191505b81811015620003965782815560010162000381565b5050505b505050565b81516001600160401b03811115620003bb57620003bb620002fa565b620003d381620003cc845462000310565b846200034c565b602080601f8311600181146200040b5760008415620003f25750858301515b600019600386901b1c1916600185901b17855562000396565b600085815260208120601f198616915b828110156200043c578886015182559484019460019091019084016200041b565b50858210156200045b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b0391909116815260200190565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620004d6578160001904821115620004ba57620004ba6200047f565b80851615620004c857918102915b93841c93908002906200049a565b509250929050565b600082620004ef575060016200058e565b81620004fe575060006200058e565b8160018114620005175760028114620005225762000542565b60019150506200058e565b60ff8411156200053657620005366200047f565b50506001821b6200058e565b5060208310610133831016604e8410600b841016171562000567575081810a6200058e565b62000573838362000495565b80600019048211156200058a576200058a6200047f565b0290505b92915050565b6000620002f360ff841683620004de565b80820281158282048414176200058e576200058e6200047f565b808201808211156200058e576200058e6200047f565b6108b280620005e56000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806306fdde03146100b4578063095ea7b3146100d257806318160ddd146100f557806323b872dd14610107578063313ce5671461011a57806340c10f191461012957806370a082311461013e578063715018a6146101675780638da5cb5b1461016f57806395d89b4114610184578063a9059cbb1461018c578063dd62ed3e1461019f578063f2fde38b146101b2575b600080fd5b6100bc6101c5565b6040516100c991906106c7565b60405180910390f35b6100e56100e0366004610731565b610257565b60405190151581526020016100c9565b6002545b6040519081526020016100c9565b6100e561011536600461075b565b610271565b604051601281526020016100c9565b61013c610137366004610731565b610295565b005b6100f961014c366004610797565b6001600160a01b031660009081526020819052604090205490565b61013c6102ab565b6101776102bf565b6040516100c991906107b9565b6100bc6102ce565b6100e561019a366004610731565b6102dd565b6100f96101ad3660046107cd565b6102eb565b61013c6101c0366004610797565b610316565b6060600380546101d490610800565b80601f016020809104026020016040519081016040528092919081815260200182805461020090610800565b801561024d5780601f106102225761010080835404028352916020019161024d565b820191906000526020600020905b81548152906001019060200180831161023057829003601f168201915b5050505050905090565b60003361026581858561035d565b60019150505b92915050565b60003361027f85828561036f565b61028a8585856103c2565b506001949350505050565b61029d610421565b6102a78282610453565b5050565b6102b3610421565b6102bd6000610489565b565b6005546001600160a01b031690565b6060600480546101d490610800565b6000336102658185856103c2565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61031e610421565b6001600160a01b038116610351576000604051631e4fbdf760e01b815260040161034891906107b9565b60405180910390fd5b61035a81610489565b50565b61036a83838360016104db565b505050565b600061037b84846102eb565b905060001981146103bc57818110156103ad57828183604051637dc7a0d960e11b81526004016103489392919061083a565b6103bc848484840360006104db565b50505050565b6001600160a01b0383166103ec576000604051634b637e8f60e11b815260040161034891906107b9565b6001600160a01b03821661041657600060405163ec442f0560e01b815260040161034891906107b9565b61036a8383836105b0565b3361042a6102bf565b6001600160a01b0316146102bd573360405163118cdaa760e01b815260040161034891906107b9565b6001600160a01b03821661047d57600060405163ec442f0560e01b815260040161034891906107b9565b6102a7600083836105b0565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b03841661050557600060405163e602df0560e01b815260040161034891906107b9565b6001600160a01b03831661052f576000604051634a1406b160e11b815260040161034891906107b9565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156103bc57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516105a291815260200190565b60405180910390a350505050565b6001600160a01b0383166105db5780600260008282546105d0919061085b565b9091555061063a9050565b6001600160a01b0383166000908152602081905260409020548181101561061b5783818360405163391434e360e21b81526004016103489392919061083a565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661065657600280548290039055610675565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516106ba91815260200190565b60405180910390a3505050565b600060208083528351808285015260005b818110156106f4578581018301518582016040015282016106d8565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461072c57600080fd5b919050565b6000806040838503121561074457600080fd5b61074d83610715565b946020939093013593505050565b60008060006060848603121561077057600080fd5b61077984610715565b925061078760208501610715565b9150604084013590509250925092565b6000602082840312156107a957600080fd5b6107b282610715565b9392505050565b6001600160a01b0391909116815260200190565b600080604083850312156107e057600080fd5b6107e983610715565b91506107f760208401610715565b90509250929050565b600181811c9082168061081457607f821691505b60208210810361083457634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b039390931683526020830191909152604082015260600190565b8082018082111561026b57634e487b7160e01b600052601160045260246000fdfea2646970667358221220d37d378e1f61b43c4ba40824aa7d725c400ebc470cef186173b2886f2103c7aa64736f6c63430008140033";

type FiorinoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FiorinoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Fiorino__factory extends ContractFactory {
  constructor(...args: FiorinoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, overrides || {}) as Promise<
      Fiorino & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Fiorino__factory {
    return super.connect(runner) as Fiorino__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FiorinoInterface {
    return new Interface(_abi) as FiorinoInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Fiorino {
    return new Contract(address, _abi, runner) as unknown as Fiorino;
  }
}
