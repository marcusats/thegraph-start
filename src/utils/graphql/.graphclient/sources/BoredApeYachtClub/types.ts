// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BoredApeYachtClubTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
  Timestamp: any;
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type Ape = {
  id: Scalars['ID'];
  owner: Scalars['String'];
  tokenId: Scalars['BigInt'];
  lastTrasnfer: Scalars['BigInt'];
  apeContent: ApeContent;
};

export type ApeContent = {
  id: Scalars['ID'];
  adHash: Scalars['String'];
  content: Scalars['String'];
  ape: Ape;
};

export type ApeContent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  adHash?: InputMaybe<Scalars['String']>;
  adHash_not?: InputMaybe<Scalars['String']>;
  adHash_gt?: InputMaybe<Scalars['String']>;
  adHash_lt?: InputMaybe<Scalars['String']>;
  adHash_gte?: InputMaybe<Scalars['String']>;
  adHash_lte?: InputMaybe<Scalars['String']>;
  adHash_in?: InputMaybe<Array<Scalars['String']>>;
  adHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  adHash_contains?: InputMaybe<Scalars['String']>;
  adHash_contains_nocase?: InputMaybe<Scalars['String']>;
  adHash_not_contains?: InputMaybe<Scalars['String']>;
  adHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  adHash_starts_with?: InputMaybe<Scalars['String']>;
  adHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  adHash_not_starts_with?: InputMaybe<Scalars['String']>;
  adHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  adHash_ends_with?: InputMaybe<Scalars['String']>;
  adHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  adHash_not_ends_with?: InputMaybe<Scalars['String']>;
  adHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  content_not?: InputMaybe<Scalars['String']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_contains_nocase?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']>;
  content_starts_with?: InputMaybe<Scalars['String']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_ends_with?: InputMaybe<Scalars['String']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ape?: InputMaybe<Scalars['String']>;
  ape_not?: InputMaybe<Scalars['String']>;
  ape_gt?: InputMaybe<Scalars['String']>;
  ape_lt?: InputMaybe<Scalars['String']>;
  ape_gte?: InputMaybe<Scalars['String']>;
  ape_lte?: InputMaybe<Scalars['String']>;
  ape_in?: InputMaybe<Array<Scalars['String']>>;
  ape_not_in?: InputMaybe<Array<Scalars['String']>>;
  ape_contains?: InputMaybe<Scalars['String']>;
  ape_contains_nocase?: InputMaybe<Scalars['String']>;
  ape_not_contains?: InputMaybe<Scalars['String']>;
  ape_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ape_starts_with?: InputMaybe<Scalars['String']>;
  ape_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ape_not_starts_with?: InputMaybe<Scalars['String']>;
  ape_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ape_ends_with?: InputMaybe<Scalars['String']>;
  ape_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ape_not_ends_with?: InputMaybe<Scalars['String']>;
  ape_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ape_?: InputMaybe<Ape_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApeContent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ApeContent_filter>>>;
};

export type ApeContent_orderBy =
  | 'id'
  | 'adHash'
  | 'content'
  | 'ape'
  | 'ape__id'
  | 'ape__owner'
  | 'ape__tokenId'
  | 'ape__lastTrasnfer';

export type Ape_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastTrasnfer?: InputMaybe<Scalars['BigInt']>;
  lastTrasnfer_not?: InputMaybe<Scalars['BigInt']>;
  lastTrasnfer_gt?: InputMaybe<Scalars['BigInt']>;
  lastTrasnfer_lt?: InputMaybe<Scalars['BigInt']>;
  lastTrasnfer_gte?: InputMaybe<Scalars['BigInt']>;
  lastTrasnfer_lte?: InputMaybe<Scalars['BigInt']>;
  lastTrasnfer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastTrasnfer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  apeContent_?: InputMaybe<ApeContent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Ape_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Ape_filter>>>;
};

export type Ape_orderBy =
  | 'id'
  | 'owner'
  | 'tokenId'
  | 'lastTrasnfer'
  | 'apeContent'
  | 'apeContent__id'
  | 'apeContent__adHash'
  | 'apeContent__content';

export type Approval = {
  id: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  approved: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Approval_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  approved?: InputMaybe<Scalars['Bytes']>;
  approved_not?: InputMaybe<Scalars['Bytes']>;
  approved_gt?: InputMaybe<Scalars['Bytes']>;
  approved_lt?: InputMaybe<Scalars['Bytes']>;
  approved_gte?: InputMaybe<Scalars['Bytes']>;
  approved_lte?: InputMaybe<Scalars['Bytes']>;
  approved_in?: InputMaybe<Array<Scalars['Bytes']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  approved_contains?: InputMaybe<Scalars['Bytes']>;
  approved_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Approval_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Approval_filter>>>;
};

export type Approval_orderBy =
  | 'id'
  | 'owner'
  | 'approved'
  | 'tokenId'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  ape?: Maybe<Ape>;
  apes: Array<Ape>;
  apeContent?: Maybe<ApeContent>;
  apeContents: Array<ApeContent>;
  approval?: Maybe<Approval>;
  approvals: Array<Approval>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryapeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ape_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Ape_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapeContentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapeContentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApeContent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApeContent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Approval_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  ape?: Maybe<Ape>;
  apes: Array<Ape>;
  apeContent?: Maybe<ApeContent>;
  apeContents: Array<ApeContent>;
  approval?: Maybe<Approval>;
  approvals: Array<Approval>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionapeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ape_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Ape_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapeContentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapeContentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApeContent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApeContent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Approval_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Transfer = {
  id: Scalars['Bytes'];
  from: Scalars['String'];
  to: Scalars['String'];
  tokenId: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Transfer_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
};

export type Transfer_orderBy =
  | 'id'
  | 'from'
  | 'to'
  | 'tokenId'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  ape: InContextSdkMethod<Query['ape'], QueryapeArgs, MeshContext>,
  /** null **/
  apes: InContextSdkMethod<Query['apes'], QueryapesArgs, MeshContext>,
  /** null **/
  apeContent: InContextSdkMethod<Query['apeContent'], QueryapeContentArgs, MeshContext>,
  /** null **/
  apeContents: InContextSdkMethod<Query['apeContents'], QueryapeContentsArgs, MeshContext>,
  /** null **/
  approval: InContextSdkMethod<Query['approval'], QueryapprovalArgs, MeshContext>,
  /** null **/
  approvals: InContextSdkMethod<Query['approvals'], QueryapprovalsArgs, MeshContext>,
  /** null **/
  transfer: InContextSdkMethod<Query['transfer'], QuerytransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Query['transfers'], QuerytransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  ape: InContextSdkMethod<Subscription['ape'], SubscriptionapeArgs, MeshContext>,
  /** null **/
  apes: InContextSdkMethod<Subscription['apes'], SubscriptionapesArgs, MeshContext>,
  /** null **/
  apeContent: InContextSdkMethod<Subscription['apeContent'], SubscriptionapeContentArgs, MeshContext>,
  /** null **/
  apeContents: InContextSdkMethod<Subscription['apeContents'], SubscriptionapeContentsArgs, MeshContext>,
  /** null **/
  approval: InContextSdkMethod<Subscription['approval'], SubscriptionapprovalArgs, MeshContext>,
  /** null **/
  approvals: InContextSdkMethod<Subscription['approvals'], SubscriptionapprovalsArgs, MeshContext>,
  /** null **/
  transfer: InContextSdkMethod<Subscription['transfer'], SubscriptiontransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Subscription['transfers'], SubscriptiontransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["BoredApeYachtClub"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
