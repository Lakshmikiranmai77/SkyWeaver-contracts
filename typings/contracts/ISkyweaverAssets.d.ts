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

interface ISkyweaverAssetsInterface extends Interface {
  functions: {
    activateFactory: TypedFunctionDescription<{
      encode([_factory]: [string]): string;
    }>;

    addMintPermission: TypedFunctionDescription<{
      encode([_factory, _minRange, _maxRange]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    getCurrentIssuances: TypedFunctionDescription<{
      encode([_ids]: [BigNumberish[]]): string;
    }>;

    getFactoryAccessRanges: TypedFunctionDescription<{
      encode([_factory]: [string]): string;
    }>;

    getFactoryStatus: TypedFunctionDescription<{
      encode([_factory]: [string]): string;
    }>;

    getMaxIssuances: TypedFunctionDescription<{
      encode([_ids]: [BigNumberish[]]): string;
    }>;

    lockRangeMintPermissions: TypedFunctionDescription<{
      encode([_range]: [{ minID: BigNumberish; maxID: BigNumberish }]): string;
    }>;

    removeMintPermission: TypedFunctionDescription<{
      encode([_factory, _rangeIndex]: [string, BigNumberish]): string;
    }>;

    setMaxIssuances: TypedFunctionDescription<{
      encode([_ids, _newMaxIssuances]: [
        BigNumberish[],
        BigNumberish[]
      ]): string;
    }>;

    shutdownFactory: TypedFunctionDescription<{
      encode([_factory]: [string]): string;
    }>;

    mint: TypedFunctionDescription<{
      encode([_to, _id, _amount, _data]: [
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    batchMint: TypedFunctionDescription<{
      encode([_to, _ids, _amounts, _data]: [
        string,
        BigNumberish[],
        BigNumberish[],
        Arrayish
      ]): string;
    }>;

    burn: TypedFunctionDescription<{
      encode([_id, _amount]: [BigNumberish, BigNumberish]): string;
    }>;

    batchBurn: TypedFunctionDescription<{
      encode([_ids, _amounts]: [BigNumberish[], BigNumberish[]]): string;
    }>;

    uri: TypedFunctionDescription<{ encode([_id]: [BigNumberish]): string }>;

    setBaseMetadataURI: TypedFunctionDescription<{
      encode([_newBaseMetadataURI]: [string]): string;
    }>;

    logURIs: TypedFunctionDescription<{
      encode([_tokenIDs]: [BigNumberish[]]): string;
    }>;

    safeBatchTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _ids, _amounts, _data]: [
        string,
        string,
        BigNumberish[],
        BigNumberish[],
        Arrayish
      ]): string;
    }>;

    safeTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _id, _amount, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;
  };

  events: {
    FactoryActivation: TypedEventDescription<{
      encodeTopics([factory]: [string | null]): string[];
    }>;

    FactoryShutdown: TypedEventDescription<{
      encodeTopics([factory]: [string | null]): string[];
    }>;

    MintPermissionAdded: TypedEventDescription<{
      encodeTopics([factory, new_range]: [string | null, null]): string[];
    }>;

    MintPermissionRemoved: TypedEventDescription<{
      encodeTopics([factory, deleted_range]: [string | null, null]): string[];
    }>;
  };
}

export class ISkyweaverAssets extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ISkyweaverAssets;
  attach(addressOrName: string): ISkyweaverAssets;
  deployed(): Promise<ISkyweaverAssets>;

  on(event: EventFilter | string, listener: Listener): ISkyweaverAssets;
  once(event: EventFilter | string, listener: Listener): ISkyweaverAssets;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ISkyweaverAssets;
  removeAllListeners(eventName: EventFilter | string): ISkyweaverAssets;
  removeListener(eventName: any, listener: Listener): ISkyweaverAssets;

  interface: ISkyweaverAssetsInterface;

  functions: {
    activateFactory(
      _factory: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addMintPermission(
      _factory: string,
      _minRange: BigNumberish,
      _maxRange: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getCurrentIssuances(_ids: BigNumberish[]): Promise<BigNumber[]>;

    getFactoryAccessRanges(
      _factory: string
    ): Promise<{ minID: BigNumber; maxID: BigNumber }[]>;

    getFactoryStatus(_factory: string): Promise<boolean>;

    getMaxIssuances(_ids: BigNumberish[]): Promise<BigNumber[]>;

    lockRangeMintPermissions(
      _range: { minID: BigNumberish; maxID: BigNumberish },
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    removeMintPermission(
      _factory: string,
      _rangeIndex: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setMaxIssuances(
      _ids: BigNumberish[],
      _newMaxIssuances: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    shutdownFactory(
      _factory: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    mint(
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    batchMint(
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    burn(
      _id: BigNumberish,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    batchBurn(
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    uri(_id: BigNumberish): Promise<string>;

    setBaseMetadataURI(
      _newBaseMetadataURI: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    logURIs(
      _tokenIDs: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  activateFactory(
    _factory: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  addMintPermission(
    _factory: string,
    _minRange: BigNumberish,
    _maxRange: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getCurrentIssuances(_ids: BigNumberish[]): Promise<BigNumber[]>;

  getFactoryAccessRanges(
    _factory: string
  ): Promise<{ minID: BigNumber; maxID: BigNumber }[]>;

  getFactoryStatus(_factory: string): Promise<boolean>;

  getMaxIssuances(_ids: BigNumberish[]): Promise<BigNumber[]>;

  lockRangeMintPermissions(
    _range: { minID: BigNumberish; maxID: BigNumberish },
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  removeMintPermission(
    _factory: string,
    _rangeIndex: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setMaxIssuances(
    _ids: BigNumberish[],
    _newMaxIssuances: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  shutdownFactory(
    _factory: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  mint(
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  batchMint(
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  burn(
    _id: BigNumberish,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  batchBurn(
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  uri(_id: BigNumberish): Promise<string>;

  setBaseMetadataURI(
    _newBaseMetadataURI: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  logURIs(
    _tokenIDs: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  safeBatchTransferFrom(
    _from: string,
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    FactoryActivation(factory: string | null): EventFilter;

    FactoryShutdown(factory: string | null): EventFilter;

    MintPermissionAdded(factory: string | null, new_range: null): EventFilter;

    MintPermissionRemoved(
      factory: string | null,
      deleted_range: null
    ): EventFilter;
  };

  estimate: {
    activateFactory(_factory: string): Promise<BigNumber>;

    addMintPermission(
      _factory: string,
      _minRange: BigNumberish,
      _maxRange: BigNumberish
    ): Promise<BigNumber>;

    getCurrentIssuances(_ids: BigNumberish[]): Promise<BigNumber>;

    getFactoryAccessRanges(_factory: string): Promise<BigNumber>;

    getFactoryStatus(_factory: string): Promise<BigNumber>;

    getMaxIssuances(_ids: BigNumberish[]): Promise<BigNumber>;

    lockRangeMintPermissions(_range: {
      minID: BigNumberish;
      maxID: BigNumberish;
    }): Promise<BigNumber>;

    removeMintPermission(
      _factory: string,
      _rangeIndex: BigNumberish
    ): Promise<BigNumber>;

    setMaxIssuances(
      _ids: BigNumberish[],
      _newMaxIssuances: BigNumberish[]
    ): Promise<BigNumber>;

    shutdownFactory(_factory: string): Promise<BigNumber>;

    mint(
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    batchMint(
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish
    ): Promise<BigNumber>;

    burn(_id: BigNumberish, _amount: BigNumberish): Promise<BigNumber>;

    batchBurn(
      _ids: BigNumberish[],
      _amounts: BigNumberish[]
    ): Promise<BigNumber>;

    uri(_id: BigNumberish): Promise<BigNumber>;

    setBaseMetadataURI(_newBaseMetadataURI: string): Promise<BigNumber>;

    logURIs(_tokenIDs: BigNumberish[]): Promise<BigNumber>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish
    ): Promise<BigNumber>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;
  };
}
