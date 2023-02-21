/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface HelloStorageInterface extends utils.Interface {
  functions: {
    "STORAGE_SLOT()": FunctionFragment;
    "getContent()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "STORAGE_SLOT" | "getContent"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "STORAGE_SLOT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContent",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "STORAGE_SLOT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getContent", data: BytesLike): Result;

  events: {};
}

export interface HelloStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HelloStorageInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    STORAGE_SLOT(overrides?: CallOverrides): Promise<[string]>;

    getContent(overrides?: CallOverrides): Promise<[string]>;
  };

  STORAGE_SLOT(overrides?: CallOverrides): Promise<string>;

  getContent(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    STORAGE_SLOT(overrides?: CallOverrides): Promise<string>;

    getContent(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    STORAGE_SLOT(overrides?: CallOverrides): Promise<BigNumber>;

    getContent(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    STORAGE_SLOT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getContent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}