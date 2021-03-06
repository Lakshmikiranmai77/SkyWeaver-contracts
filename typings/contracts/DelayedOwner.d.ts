/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface DelayedOwnerInterface extends Interface {
  functions: {
    cancel: TypedFunctionDescription<{
      encode([_tx]: [
        {
          status: BigNumberish;
          triggerTime: BigNumberish;
          target: string;
          id: BigNumberish;
          data: Arrayish;
        }
      ]): string;
    }>;

    execute: TypedFunctionDescription<{
      encode([_tx]: [
        {
          status: BigNumberish;
          triggerTime: BigNumberish;
          target: string;
          id: BigNumberish;
          data: Arrayish;
        }
      ]): string;
    }>;

    getOwner: TypedFunctionDescription<{ encode([]: []): string }>;

    isValidWitness: TypedFunctionDescription<{
      encode([_tx]: [
        {
          status: BigNumberish;
          triggerTime: BigNumberish;
          target: string;
          id: BigNumberish;
          data: Arrayish;
        }
      ]): string;
    }>;

    register: TypedFunctionDescription<{
      encode([_tx]: [
        {
          status: BigNumberish;
          triggerTime: BigNumberish;
          target: string;
          id: BigNumberish;
          data: Arrayish;
        }
      ]): string;
    }>;

    transferOwnership: TypedFunctionDescription<{
      encode([_newOwner]: [string]): string;
    }>;

    txHashes: TypedFunctionDescription<{ encode([]: [BigNumberish]): string }>;
  };

  events: {
    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([previousOwner, newOwner]: [
        string | null,
        string | null
      ]): string[];
    }>;

    TransactionCancelled: TypedEventDescription<{
      encodeTopics([transaction]: [null]): string[];
    }>;

    TransactionExecuted: TypedEventDescription<{
      encodeTopics([transaction]: [null]): string[];
    }>;

    TransactionRegistered: TypedEventDescription<{
      encodeTopics([transaction]: [null]): string[];
    }>;
  };
}

export class DelayedOwner extends Contract {
  connect(signerOrProvider: Signer | Provider | string): DelayedOwner;
  attach(addressOrName: string): DelayedOwner;
  deployed(): Promise<DelayedOwner>;

  on(event: EventFilter | string, listener: Listener): DelayedOwner;
  once(event: EventFilter | string, listener: Listener): DelayedOwner;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): DelayedOwner;
  removeAllListeners(eventName: EventFilter | string): DelayedOwner;
  removeListener(eventName: any, listener: Listener): DelayedOwner;

  interface: DelayedOwnerInterface;

  functions: {
    cancel(
      _tx: {
        status: BigNumberish;
        triggerTime: BigNumberish;
        target: string;
        id: BigNumberish;
        data: Arrayish;
      },
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    execute(
      _tx: {
        status: BigNumberish;
        triggerTime: BigNumberish;
        target: string;
        id: BigNumberish;
        data: Arrayish;
      },
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getOwner(): Promise<string>;

    isValidWitness(_tx: {
      status: BigNumberish;
      triggerTime: BigNumberish;
      target: string;
      id: BigNumberish;
      data: Arrayish;
    }): Promise<boolean>;

    register(
      _tx: {
        status: BigNumberish;
        triggerTime: BigNumberish;
        target: string;
        id: BigNumberish;
        data: Arrayish;
      },
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    txHashes(arg0: BigNumberish): Promise<string>;
  };

  cancel(
    _tx: {
      status: BigNumberish;
      triggerTime: BigNumberish;
      target: string;
      id: BigNumberish;
      data: Arrayish;
    },
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  execute(
    _tx: {
      status: BigNumberish;
      triggerTime: BigNumberish;
      target: string;
      id: BigNumberish;
      data: Arrayish;
    },
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getOwner(): Promise<string>;

  isValidWitness(_tx: {
    status: BigNumberish;
    triggerTime: BigNumberish;
    target: string;
    id: BigNumberish;
    data: Arrayish;
  }): Promise<boolean>;

  register(
    _tx: {
      status: BigNumberish;
      triggerTime: BigNumberish;
      target: string;
      id: BigNumberish;
      data: Arrayish;
    },
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    _newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  txHashes(arg0: BigNumberish): Promise<string>;

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    TransactionCancelled(transaction: null): EventFilter;

    TransactionExecuted(transaction: null): EventFilter;

    TransactionRegistered(transaction: null): EventFilter;
  };

  estimate: {
    cancel(_tx: {
      status: BigNumberish;
      triggerTime: BigNumberish;
      target: string;
      id: BigNumberish;
      data: Arrayish;
    }): Promise<BigNumber>;

    execute(_tx: {
      status: BigNumberish;
      triggerTime: BigNumberish;
      target: string;
      id: BigNumberish;
      data: Arrayish;
    }): Promise<BigNumber>;

    getOwner(): Promise<BigNumber>;

    isValidWitness(_tx: {
      status: BigNumberish;
      triggerTime: BigNumberish;
      target: string;
      id: BigNumberish;
      data: Arrayish;
    }): Promise<BigNumber>;

    register(_tx: {
      status: BigNumberish;
      triggerTime: BigNumberish;
      target: string;
      id: BigNumberish;
      data: Arrayish;
    }): Promise<BigNumber>;

    transferOwnership(_newOwner: string): Promise<BigNumber>;

    txHashes(arg0: BigNumberish): Promise<BigNumber>;
  };
}
