import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Collection = {
  __typename?: 'Collection';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  headerImage?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
  items?: Maybe<Array<Maybe<Item>>>;
};


export type CollectionItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CollectionAggregator = {
  __typename?: 'CollectionAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  values?: Maybe<Array<Maybe<Collection>>>;
  groupBy?: Maybe<CollectionGroupBy>;
  aggregate?: Maybe<CollectionAggregator>;
};

export type CollectionConnectionCreatedAt = {
  __typename?: 'CollectionConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CollectionConnection>;
};

export type CollectionConnectionHeaderImage = {
  __typename?: 'CollectionConnectionHeaderImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CollectionConnection>;
};

export type CollectionConnectionId = {
  __typename?: 'CollectionConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CollectionConnection>;
};

export type CollectionConnectionName = {
  __typename?: 'CollectionConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CollectionConnection>;
};

export type CollectionConnectionPublished_At = {
  __typename?: 'CollectionConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CollectionConnection>;
};

export type CollectionConnectionUpdatedAt = {
  __typename?: 'CollectionConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CollectionConnection>;
};

export type CollectionConnection_Id = {
  __typename?: 'CollectionConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CollectionConnection>;
};

export type CollectionGroupBy = {
  __typename?: 'CollectionGroupBy';
  id?: Maybe<Array<Maybe<CollectionConnectionId>>>;
  _id?: Maybe<Array<Maybe<CollectionConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<CollectionConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<CollectionConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<CollectionConnectionName>>>;
  headerImage?: Maybe<Array<Maybe<CollectionConnectionHeaderImage>>>;
  published_at?: Maybe<Array<Maybe<CollectionConnectionPublished_At>>>;
};

export type CollectionInput = {
  name: Scalars['String'];
  items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  headerImage?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  image?: Maybe<UploadFile>;
  highlight?: Maybe<Scalars['Boolean']>;
  belongsTo?: Maybe<Collection>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ItemAggregator = {
  __typename?: 'ItemAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ItemConnection = {
  __typename?: 'ItemConnection';
  values?: Maybe<Array<Maybe<Item>>>;
  groupBy?: Maybe<ItemGroupBy>;
  aggregate?: Maybe<ItemAggregator>;
};

export type ItemConnectionBelongsTo = {
  __typename?: 'ItemConnectionBelongsTo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionCreatedAt = {
  __typename?: 'ItemConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionHighlight = {
  __typename?: 'ItemConnectionHighlight';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionId = {
  __typename?: 'ItemConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionImage = {
  __typename?: 'ItemConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionPublished_At = {
  __typename?: 'ItemConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionUpdatedAt = {
  __typename?: 'ItemConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnection_Id = {
  __typename?: 'ItemConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemGroupBy = {
  __typename?: 'ItemGroupBy';
  id?: Maybe<Array<Maybe<ItemConnectionId>>>;
  _id?: Maybe<Array<Maybe<ItemConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ItemConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ItemConnectionUpdatedAt>>>;
  image?: Maybe<Array<Maybe<ItemConnectionImage>>>;
  highlight?: Maybe<Array<Maybe<ItemConnectionHighlight>>>;
  belongsTo?: Maybe<Array<Maybe<ItemConnectionBelongsTo>>>;
  published_at?: Maybe<Array<Maybe<ItemConnectionPublished_At>>>;
};

export type ItemInput = {
  image?: Maybe<Scalars['ID']>;
  highlight?: Maybe<Scalars['Boolean']>;
  belongsTo?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Collection | CollectionConnection | CollectionAggregator | CollectionGroupBy | CollectionConnectionId | CollectionConnection_Id | CollectionConnectionCreatedAt | CollectionConnectionUpdatedAt | CollectionConnectionName | CollectionConnectionHeaderImage | CollectionConnectionPublished_At | CreateCollectionPayload | UpdateCollectionPayload | DeleteCollectionPayload | Item | ItemConnection | ItemAggregator | ItemGroupBy | ItemConnectionId | ItemConnection_Id | ItemConnectionCreatedAt | ItemConnectionUpdatedAt | ItemConnectionImage | ItemConnectionHighlight | ItemConnectionBelongsTo | ItemConnectionPublished_At | CreateItemPayload | UpdateItemPayload | DeleteItemPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnection_Id | UploadFileConnectionCreatedAt | UploadFileConnectionUpdatedAt | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnection_Id | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createCollection?: Maybe<CreateCollectionPayload>;
  updateCollection?: Maybe<UpdateCollectionPayload>;
  deleteCollection?: Maybe<DeleteCollectionPayload>;
  createItem?: Maybe<CreateItemPayload>;
  updateItem?: Maybe<UpdateItemPayload>;
  deleteItem?: Maybe<DeleteItemPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateCollectionArgs = {
  input?: Maybe<CreateCollectionInput>;
};


export type MutationUpdateCollectionArgs = {
  input?: Maybe<UpdateCollectionInput>;
};


export type MutationDeleteCollectionArgs = {
  input?: Maybe<DeleteCollectionInput>;
};


export type MutationCreateItemArgs = {
  input?: Maybe<CreateItemInput>;
};


export type MutationUpdateItemArgs = {
  input?: Maybe<UpdateItemInput>;
};


export type MutationDeleteItemArgs = {
  input?: Maybe<DeleteItemInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  collectionsConnection?: Maybe<CollectionConnection>;
  item?: Maybe<Item>;
  items?: Maybe<Array<Maybe<Item>>>;
  itemsConnection?: Maybe<ItemConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryCollectionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCollectionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCollectionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryItemArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryItemsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type CreateCollectionInput = {
  data?: Maybe<CollectionInput>;
};

export type CreateCollectionPayload = {
  __typename?: 'createCollectionPayload';
  collection?: Maybe<Collection>;
};

export type CreateItemInput = {
  data?: Maybe<ItemInput>;
};

export type CreateItemPayload = {
  __typename?: 'createItemPayload';
  item?: Maybe<Item>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteCollectionInput = {
  where?: Maybe<InputId>;
};

export type DeleteCollectionPayload = {
  __typename?: 'deleteCollectionPayload';
  collection?: Maybe<Collection>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteItemInput = {
  where?: Maybe<InputId>;
};

export type DeleteItemPayload = {
  __typename?: 'deleteItemPayload';
  item?: Maybe<Item>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditCollectionInput = {
  name?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  headerImage?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditItemInput = {
  image?: Maybe<Scalars['ID']>;
  highlight?: Maybe<Scalars['Boolean']>;
  belongsTo?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateCollectionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCollectionInput>;
};

export type UpdateCollectionPayload = {
  __typename?: 'updateCollectionPayload';
  collection?: Maybe<Collection>;
};

export type UpdateItemInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditItemInput>;
};

export type UpdateItemPayload = {
  __typename?: 'updateItemPayload';
  item?: Maybe<Item>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type AdminUserKeySpecifier = ('id' | 'username' | 'firstname' | 'lastname' | AdminUserKeySpecifier)[];
export type AdminUserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionKeySpecifier = ('id' | '_id' | 'createdAt' | 'updatedAt' | 'name' | 'headerImage' | 'published_at' | 'items' | CollectionKeySpecifier)[];
export type CollectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	headerImage?: FieldPolicy<any> | FieldReadFunction<any>,
	published_at?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionAggregatorKeySpecifier = ('count' | 'totalCount' | CollectionAggregatorKeySpecifier)[];
export type CollectionAggregatorFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionConnectionKeySpecifier = ('values' | 'groupBy' | 'aggregate' | CollectionConnectionKeySpecifier)[];
export type CollectionConnectionFieldPolicy = {
	values?: FieldPolicy<any> | FieldReadFunction<any>,
	groupBy?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionConnectionCreatedAtKeySpecifier = ('key' | 'connection' | CollectionConnectionCreatedAtKeySpecifier)[];
export type CollectionConnectionCreatedAtFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionConnectionHeaderImageKeySpecifier = ('key' | 'connection' | CollectionConnectionHeaderImageKeySpecifier)[];
export type CollectionConnectionHeaderImageFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionConnectionIdKeySpecifier = ('key' | 'connection' | CollectionConnectionIdKeySpecifier)[];
export type CollectionConnectionIdFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionConnectionNameKeySpecifier = ('key' | 'connection' | CollectionConnectionNameKeySpecifier)[];
export type CollectionConnectionNameFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionConnectionPublished_atKeySpecifier = ('key' | 'connection' | CollectionConnectionPublished_atKeySpecifier)[];
export type CollectionConnectionPublished_atFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionConnectionUpdatedAtKeySpecifier = ('key' | 'connection' | CollectionConnectionUpdatedAtKeySpecifier)[];
export type CollectionConnectionUpdatedAtFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionConnection_idKeySpecifier = ('key' | 'connection' | CollectionConnection_idKeySpecifier)[];
export type CollectionConnection_idFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionGroupByKeySpecifier = ('id' | '_id' | 'createdAt' | 'updatedAt' | 'name' | 'headerImage' | 'published_at' | CollectionGroupByKeySpecifier)[];
export type CollectionGroupByFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	headerImage?: FieldPolicy<any> | FieldReadFunction<any>,
	published_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemKeySpecifier = ('id' | '_id' | 'createdAt' | 'updatedAt' | 'image' | 'highlight' | 'belongsTo' | 'published_at' | ItemKeySpecifier)[];
export type ItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	highlight?: FieldPolicy<any> | FieldReadFunction<any>,
	belongsTo?: FieldPolicy<any> | FieldReadFunction<any>,
	published_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemAggregatorKeySpecifier = ('count' | 'totalCount' | ItemAggregatorKeySpecifier)[];
export type ItemAggregatorFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemConnectionKeySpecifier = ('values' | 'groupBy' | 'aggregate' | ItemConnectionKeySpecifier)[];
export type ItemConnectionFieldPolicy = {
	values?: FieldPolicy<any> | FieldReadFunction<any>,
	groupBy?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemConnectionBelongsToKeySpecifier = ('key' | 'connection' | ItemConnectionBelongsToKeySpecifier)[];
export type ItemConnectionBelongsToFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemConnectionCreatedAtKeySpecifier = ('key' | 'connection' | ItemConnectionCreatedAtKeySpecifier)[];
export type ItemConnectionCreatedAtFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemConnectionHighlightKeySpecifier = ('key' | 'connection' | ItemConnectionHighlightKeySpecifier)[];
export type ItemConnectionHighlightFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemConnectionIdKeySpecifier = ('key' | 'connection' | ItemConnectionIdKeySpecifier)[];
export type ItemConnectionIdFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemConnectionImageKeySpecifier = ('key' | 'connection' | ItemConnectionImageKeySpecifier)[];
export type ItemConnectionImageFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemConnectionPublished_atKeySpecifier = ('key' | 'connection' | ItemConnectionPublished_atKeySpecifier)[];
export type ItemConnectionPublished_atFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemConnectionUpdatedAtKeySpecifier = ('key' | 'connection' | ItemConnectionUpdatedAtKeySpecifier)[];
export type ItemConnectionUpdatedAtFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemConnection_idKeySpecifier = ('key' | 'connection' | ItemConnection_idKeySpecifier)[];
export type ItemConnection_idFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemGroupByKeySpecifier = ('id' | '_id' | 'createdAt' | 'updatedAt' | 'image' | 'highlight' | 'belongsTo' | 'published_at' | ItemGroupByKeySpecifier)[];
export type ItemGroupByFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	highlight?: FieldPolicy<any> | FieldReadFunction<any>,
	belongsTo?: FieldPolicy<any> | FieldReadFunction<any>,
	published_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createCollection' | 'updateCollection' | 'deleteCollection' | 'createItem' | 'updateItem' | 'deleteItem' | 'deleteFile' | 'createRole' | 'updateRole' | 'deleteRole' | 'createUser' | 'updateUser' | 'deleteUser' | 'upload' | 'multipleUpload' | 'updateFileInfo' | 'login' | 'register' | 'forgotPassword' | 'resetPassword' | 'emailConfirmation' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	createItem?: FieldPolicy<any> | FieldReadFunction<any>,
	updateItem?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteItem?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFile?: FieldPolicy<any> | FieldReadFunction<any>,
	createRole?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRole?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRole?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	upload?: FieldPolicy<any> | FieldReadFunction<any>,
	multipleUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	updateFileInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>,
	forgotPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	emailConfirmation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('collection' | 'collections' | 'collectionsConnection' | 'item' | 'items' | 'itemsConnection' | 'files' | 'filesConnection' | 'role' | 'roles' | 'rolesConnection' | 'user' | 'users' | 'usersConnection' | 'me' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	itemsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	filesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	rolesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	usersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileKeySpecifier = ('id' | '_id' | 'createdAt' | 'updatedAt' | 'name' | 'alternativeText' | 'caption' | 'width' | 'height' | 'formats' | 'hash' | 'ext' | 'mime' | 'size' | 'url' | 'previewUrl' | 'provider' | 'provider_metadata' | 'related' | UploadFileKeySpecifier)[];
export type UploadFileFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	alternativeText?: FieldPolicy<any> | FieldReadFunction<any>,
	caption?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	formats?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	ext?: FieldPolicy<any> | FieldReadFunction<any>,
	mime?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	previewUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	provider_metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	related?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileAggregatorKeySpecifier = ('count' | 'totalCount' | 'sum' | 'avg' | 'min' | 'max' | UploadFileAggregatorKeySpecifier)[];
export type UploadFileAggregatorFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileAggregatorAvgKeySpecifier = ('width' | 'height' | 'size' | UploadFileAggregatorAvgKeySpecifier)[];
export type UploadFileAggregatorAvgFieldPolicy = {
	width?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileAggregatorMaxKeySpecifier = ('width' | 'height' | 'size' | UploadFileAggregatorMaxKeySpecifier)[];
export type UploadFileAggregatorMaxFieldPolicy = {
	width?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileAggregatorMinKeySpecifier = ('width' | 'height' | 'size' | UploadFileAggregatorMinKeySpecifier)[];
export type UploadFileAggregatorMinFieldPolicy = {
	width?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileAggregatorSumKeySpecifier = ('width' | 'height' | 'size' | UploadFileAggregatorSumKeySpecifier)[];
export type UploadFileAggregatorSumFieldPolicy = {
	width?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionKeySpecifier = ('values' | 'groupBy' | 'aggregate' | UploadFileConnectionKeySpecifier)[];
export type UploadFileConnectionFieldPolicy = {
	values?: FieldPolicy<any> | FieldReadFunction<any>,
	groupBy?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionAlternativeTextKeySpecifier = ('key' | 'connection' | UploadFileConnectionAlternativeTextKeySpecifier)[];
export type UploadFileConnectionAlternativeTextFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionCaptionKeySpecifier = ('key' | 'connection' | UploadFileConnectionCaptionKeySpecifier)[];
export type UploadFileConnectionCaptionFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionCreatedAtKeySpecifier = ('key' | 'connection' | UploadFileConnectionCreatedAtKeySpecifier)[];
export type UploadFileConnectionCreatedAtFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionExtKeySpecifier = ('key' | 'connection' | UploadFileConnectionExtKeySpecifier)[];
export type UploadFileConnectionExtFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionFormatsKeySpecifier = ('key' | 'connection' | UploadFileConnectionFormatsKeySpecifier)[];
export type UploadFileConnectionFormatsFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionHashKeySpecifier = ('key' | 'connection' | UploadFileConnectionHashKeySpecifier)[];
export type UploadFileConnectionHashFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionHeightKeySpecifier = ('key' | 'connection' | UploadFileConnectionHeightKeySpecifier)[];
export type UploadFileConnectionHeightFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionIdKeySpecifier = ('key' | 'connection' | UploadFileConnectionIdKeySpecifier)[];
export type UploadFileConnectionIdFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionMimeKeySpecifier = ('key' | 'connection' | UploadFileConnectionMimeKeySpecifier)[];
export type UploadFileConnectionMimeFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionNameKeySpecifier = ('key' | 'connection' | UploadFileConnectionNameKeySpecifier)[];
export type UploadFileConnectionNameFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionPreviewUrlKeySpecifier = ('key' | 'connection' | UploadFileConnectionPreviewUrlKeySpecifier)[];
export type UploadFileConnectionPreviewUrlFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionProviderKeySpecifier = ('key' | 'connection' | UploadFileConnectionProviderKeySpecifier)[];
export type UploadFileConnectionProviderFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionProvider_metadataKeySpecifier = ('key' | 'connection' | UploadFileConnectionProvider_metadataKeySpecifier)[];
export type UploadFileConnectionProvider_metadataFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionSizeKeySpecifier = ('key' | 'connection' | UploadFileConnectionSizeKeySpecifier)[];
export type UploadFileConnectionSizeFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionUpdatedAtKeySpecifier = ('key' | 'connection' | UploadFileConnectionUpdatedAtKeySpecifier)[];
export type UploadFileConnectionUpdatedAtFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionUrlKeySpecifier = ('key' | 'connection' | UploadFileConnectionUrlKeySpecifier)[];
export type UploadFileConnectionUrlFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnectionWidthKeySpecifier = ('key' | 'connection' | UploadFileConnectionWidthKeySpecifier)[];
export type UploadFileConnectionWidthFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileConnection_idKeySpecifier = ('key' | 'connection' | UploadFileConnection_idKeySpecifier)[];
export type UploadFileConnection_idFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadFileGroupByKeySpecifier = ('id' | '_id' | 'createdAt' | 'updatedAt' | 'name' | 'alternativeText' | 'caption' | 'width' | 'height' | 'formats' | 'hash' | 'ext' | 'mime' | 'size' | 'url' | 'previewUrl' | 'provider' | 'provider_metadata' | UploadFileGroupByKeySpecifier)[];
export type UploadFileGroupByFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	alternativeText?: FieldPolicy<any> | FieldReadFunction<any>,
	caption?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	formats?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	ext?: FieldPolicy<any> | FieldReadFunction<any>,
	mime?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	previewUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	provider_metadata?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermissionsPasswordPayloadKeySpecifier = ('ok' | UserPermissionsPasswordPayloadKeySpecifier)[];
export type UserPermissionsPasswordPayloadFieldPolicy = {
	ok?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsLoginPayloadKeySpecifier = ('jwt' | 'user' | UsersPermissionsLoginPayloadKeySpecifier)[];
export type UsersPermissionsLoginPayloadFieldPolicy = {
	jwt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsMeKeySpecifier = ('id' | 'username' | 'email' | 'confirmed' | 'blocked' | 'role' | UsersPermissionsMeKeySpecifier)[];
export type UsersPermissionsMeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmed?: FieldPolicy<any> | FieldReadFunction<any>,
	blocked?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsMeRoleKeySpecifier = ('id' | 'name' | 'description' | 'type' | UsersPermissionsMeRoleKeySpecifier)[];
export type UsersPermissionsMeRoleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsPermissionKeySpecifier = ('id' | '_id' | 'type' | 'controller' | 'action' | 'enabled' | 'policy' | 'role' | UsersPermissionsPermissionKeySpecifier)[];
export type UsersPermissionsPermissionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	controller?: FieldPolicy<any> | FieldReadFunction<any>,
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	policy?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsRoleKeySpecifier = ('id' | '_id' | 'name' | 'description' | 'type' | 'permissions' | 'users' | UsersPermissionsRoleKeySpecifier)[];
export type UsersPermissionsRoleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsRoleAggregatorKeySpecifier = ('count' | 'totalCount' | UsersPermissionsRoleAggregatorKeySpecifier)[];
export type UsersPermissionsRoleAggregatorFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsRoleConnectionKeySpecifier = ('values' | 'groupBy' | 'aggregate' | UsersPermissionsRoleConnectionKeySpecifier)[];
export type UsersPermissionsRoleConnectionFieldPolicy = {
	values?: FieldPolicy<any> | FieldReadFunction<any>,
	groupBy?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsRoleConnectionDescriptionKeySpecifier = ('key' | 'connection' | UsersPermissionsRoleConnectionDescriptionKeySpecifier)[];
export type UsersPermissionsRoleConnectionDescriptionFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsRoleConnectionIdKeySpecifier = ('key' | 'connection' | UsersPermissionsRoleConnectionIdKeySpecifier)[];
export type UsersPermissionsRoleConnectionIdFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsRoleConnectionNameKeySpecifier = ('key' | 'connection' | UsersPermissionsRoleConnectionNameKeySpecifier)[];
export type UsersPermissionsRoleConnectionNameFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsRoleConnectionTypeKeySpecifier = ('key' | 'connection' | UsersPermissionsRoleConnectionTypeKeySpecifier)[];
export type UsersPermissionsRoleConnectionTypeFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsRoleConnection_idKeySpecifier = ('key' | 'connection' | UsersPermissionsRoleConnection_idKeySpecifier)[];
export type UsersPermissionsRoleConnection_idFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsRoleGroupByKeySpecifier = ('id' | '_id' | 'name' | 'description' | 'type' | UsersPermissionsRoleGroupByKeySpecifier)[];
export type UsersPermissionsRoleGroupByFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserKeySpecifier = ('id' | '_id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'provider' | 'confirmed' | 'blocked' | 'role' | UsersPermissionsUserKeySpecifier)[];
export type UsersPermissionsUserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmed?: FieldPolicy<any> | FieldReadFunction<any>,
	blocked?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserAggregatorKeySpecifier = ('count' | 'totalCount' | UsersPermissionsUserAggregatorKeySpecifier)[];
export type UsersPermissionsUserAggregatorFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserConnectionKeySpecifier = ('values' | 'groupBy' | 'aggregate' | UsersPermissionsUserConnectionKeySpecifier)[];
export type UsersPermissionsUserConnectionFieldPolicy = {
	values?: FieldPolicy<any> | FieldReadFunction<any>,
	groupBy?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserConnectionBlockedKeySpecifier = ('key' | 'connection' | UsersPermissionsUserConnectionBlockedKeySpecifier)[];
export type UsersPermissionsUserConnectionBlockedFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserConnectionConfirmedKeySpecifier = ('key' | 'connection' | UsersPermissionsUserConnectionConfirmedKeySpecifier)[];
export type UsersPermissionsUserConnectionConfirmedFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserConnectionCreatedAtKeySpecifier = ('key' | 'connection' | UsersPermissionsUserConnectionCreatedAtKeySpecifier)[];
export type UsersPermissionsUserConnectionCreatedAtFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserConnectionEmailKeySpecifier = ('key' | 'connection' | UsersPermissionsUserConnectionEmailKeySpecifier)[];
export type UsersPermissionsUserConnectionEmailFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserConnectionIdKeySpecifier = ('key' | 'connection' | UsersPermissionsUserConnectionIdKeySpecifier)[];
export type UsersPermissionsUserConnectionIdFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserConnectionProviderKeySpecifier = ('key' | 'connection' | UsersPermissionsUserConnectionProviderKeySpecifier)[];
export type UsersPermissionsUserConnectionProviderFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserConnectionRoleKeySpecifier = ('key' | 'connection' | UsersPermissionsUserConnectionRoleKeySpecifier)[];
export type UsersPermissionsUserConnectionRoleFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserConnectionUpdatedAtKeySpecifier = ('key' | 'connection' | UsersPermissionsUserConnectionUpdatedAtKeySpecifier)[];
export type UsersPermissionsUserConnectionUpdatedAtFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserConnectionUsernameKeySpecifier = ('key' | 'connection' | UsersPermissionsUserConnectionUsernameKeySpecifier)[];
export type UsersPermissionsUserConnectionUsernameFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserConnection_idKeySpecifier = ('key' | 'connection' | UsersPermissionsUserConnection_idKeySpecifier)[];
export type UsersPermissionsUserConnection_idFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPermissionsUserGroupByKeySpecifier = ('id' | '_id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'provider' | 'confirmed' | 'blocked' | 'role' | UsersPermissionsUserGroupByKeySpecifier)[];
export type UsersPermissionsUserGroupByFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmed?: FieldPolicy<any> | FieldReadFunction<any>,
	blocked?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type createCollectionPayloadKeySpecifier = ('collection' | createCollectionPayloadKeySpecifier)[];
export type createCollectionPayloadFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type createItemPayloadKeySpecifier = ('item' | createItemPayloadKeySpecifier)[];
export type createItemPayloadFieldPolicy = {
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type createRolePayloadKeySpecifier = ('role' | createRolePayloadKeySpecifier)[];
export type createRolePayloadFieldPolicy = {
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type createUserPayloadKeySpecifier = ('user' | createUserPayloadKeySpecifier)[];
export type createUserPayloadFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type deleteCollectionPayloadKeySpecifier = ('collection' | deleteCollectionPayloadKeySpecifier)[];
export type deleteCollectionPayloadFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type deleteFilePayloadKeySpecifier = ('file' | deleteFilePayloadKeySpecifier)[];
export type deleteFilePayloadFieldPolicy = {
	file?: FieldPolicy<any> | FieldReadFunction<any>
};
export type deleteItemPayloadKeySpecifier = ('item' | deleteItemPayloadKeySpecifier)[];
export type deleteItemPayloadFieldPolicy = {
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type deleteRolePayloadKeySpecifier = ('role' | deleteRolePayloadKeySpecifier)[];
export type deleteRolePayloadFieldPolicy = {
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type deleteUserPayloadKeySpecifier = ('user' | deleteUserPayloadKeySpecifier)[];
export type deleteUserPayloadFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type updateCollectionPayloadKeySpecifier = ('collection' | updateCollectionPayloadKeySpecifier)[];
export type updateCollectionPayloadFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type updateItemPayloadKeySpecifier = ('item' | updateItemPayloadKeySpecifier)[];
export type updateItemPayloadFieldPolicy = {
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type updateRolePayloadKeySpecifier = ('role' | updateRolePayloadKeySpecifier)[];
export type updateRolePayloadFieldPolicy = {
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type updateUserPayloadKeySpecifier = ('user' | updateUserPayloadKeySpecifier)[];
export type updateUserPayloadFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	AdminUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdminUserKeySpecifier | (() => undefined | AdminUserKeySpecifier),
		fields?: AdminUserFieldPolicy,
	},
	Collection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionKeySpecifier | (() => undefined | CollectionKeySpecifier),
		fields?: CollectionFieldPolicy,
	},
	CollectionAggregator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionAggregatorKeySpecifier | (() => undefined | CollectionAggregatorKeySpecifier),
		fields?: CollectionAggregatorFieldPolicy,
	},
	CollectionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionConnectionKeySpecifier | (() => undefined | CollectionConnectionKeySpecifier),
		fields?: CollectionConnectionFieldPolicy,
	},
	CollectionConnectionCreatedAt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionConnectionCreatedAtKeySpecifier | (() => undefined | CollectionConnectionCreatedAtKeySpecifier),
		fields?: CollectionConnectionCreatedAtFieldPolicy,
	},
	CollectionConnectionHeaderImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionConnectionHeaderImageKeySpecifier | (() => undefined | CollectionConnectionHeaderImageKeySpecifier),
		fields?: CollectionConnectionHeaderImageFieldPolicy,
	},
	CollectionConnectionId?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionConnectionIdKeySpecifier | (() => undefined | CollectionConnectionIdKeySpecifier),
		fields?: CollectionConnectionIdFieldPolicy,
	},
	CollectionConnectionName?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionConnectionNameKeySpecifier | (() => undefined | CollectionConnectionNameKeySpecifier),
		fields?: CollectionConnectionNameFieldPolicy,
	},
	CollectionConnectionPublished_at?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionConnectionPublished_atKeySpecifier | (() => undefined | CollectionConnectionPublished_atKeySpecifier),
		fields?: CollectionConnectionPublished_atFieldPolicy,
	},
	CollectionConnectionUpdatedAt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionConnectionUpdatedAtKeySpecifier | (() => undefined | CollectionConnectionUpdatedAtKeySpecifier),
		fields?: CollectionConnectionUpdatedAtFieldPolicy,
	},
	CollectionConnection_id?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionConnection_idKeySpecifier | (() => undefined | CollectionConnection_idKeySpecifier),
		fields?: CollectionConnection_idFieldPolicy,
	},
	CollectionGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionGroupByKeySpecifier | (() => undefined | CollectionGroupByKeySpecifier),
		fields?: CollectionGroupByFieldPolicy,
	},
	Item?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemKeySpecifier | (() => undefined | ItemKeySpecifier),
		fields?: ItemFieldPolicy,
	},
	ItemAggregator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemAggregatorKeySpecifier | (() => undefined | ItemAggregatorKeySpecifier),
		fields?: ItemAggregatorFieldPolicy,
	},
	ItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemConnectionKeySpecifier | (() => undefined | ItemConnectionKeySpecifier),
		fields?: ItemConnectionFieldPolicy,
	},
	ItemConnectionBelongsTo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemConnectionBelongsToKeySpecifier | (() => undefined | ItemConnectionBelongsToKeySpecifier),
		fields?: ItemConnectionBelongsToFieldPolicy,
	},
	ItemConnectionCreatedAt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemConnectionCreatedAtKeySpecifier | (() => undefined | ItemConnectionCreatedAtKeySpecifier),
		fields?: ItemConnectionCreatedAtFieldPolicy,
	},
	ItemConnectionHighlight?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemConnectionHighlightKeySpecifier | (() => undefined | ItemConnectionHighlightKeySpecifier),
		fields?: ItemConnectionHighlightFieldPolicy,
	},
	ItemConnectionId?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemConnectionIdKeySpecifier | (() => undefined | ItemConnectionIdKeySpecifier),
		fields?: ItemConnectionIdFieldPolicy,
	},
	ItemConnectionImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemConnectionImageKeySpecifier | (() => undefined | ItemConnectionImageKeySpecifier),
		fields?: ItemConnectionImageFieldPolicy,
	},
	ItemConnectionPublished_at?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemConnectionPublished_atKeySpecifier | (() => undefined | ItemConnectionPublished_atKeySpecifier),
		fields?: ItemConnectionPublished_atFieldPolicy,
	},
	ItemConnectionUpdatedAt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemConnectionUpdatedAtKeySpecifier | (() => undefined | ItemConnectionUpdatedAtKeySpecifier),
		fields?: ItemConnectionUpdatedAtFieldPolicy,
	},
	ItemConnection_id?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemConnection_idKeySpecifier | (() => undefined | ItemConnection_idKeySpecifier),
		fields?: ItemConnection_idFieldPolicy,
	},
	ItemGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemGroupByKeySpecifier | (() => undefined | ItemGroupByKeySpecifier),
		fields?: ItemGroupByFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	UploadFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileKeySpecifier | (() => undefined | UploadFileKeySpecifier),
		fields?: UploadFileFieldPolicy,
	},
	UploadFileAggregator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileAggregatorKeySpecifier | (() => undefined | UploadFileAggregatorKeySpecifier),
		fields?: UploadFileAggregatorFieldPolicy,
	},
	UploadFileAggregatorAvg?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileAggregatorAvgKeySpecifier | (() => undefined | UploadFileAggregatorAvgKeySpecifier),
		fields?: UploadFileAggregatorAvgFieldPolicy,
	},
	UploadFileAggregatorMax?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileAggregatorMaxKeySpecifier | (() => undefined | UploadFileAggregatorMaxKeySpecifier),
		fields?: UploadFileAggregatorMaxFieldPolicy,
	},
	UploadFileAggregatorMin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileAggregatorMinKeySpecifier | (() => undefined | UploadFileAggregatorMinKeySpecifier),
		fields?: UploadFileAggregatorMinFieldPolicy,
	},
	UploadFileAggregatorSum?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileAggregatorSumKeySpecifier | (() => undefined | UploadFileAggregatorSumKeySpecifier),
		fields?: UploadFileAggregatorSumFieldPolicy,
	},
	UploadFileConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionKeySpecifier | (() => undefined | UploadFileConnectionKeySpecifier),
		fields?: UploadFileConnectionFieldPolicy,
	},
	UploadFileConnectionAlternativeText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionAlternativeTextKeySpecifier | (() => undefined | UploadFileConnectionAlternativeTextKeySpecifier),
		fields?: UploadFileConnectionAlternativeTextFieldPolicy,
	},
	UploadFileConnectionCaption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionCaptionKeySpecifier | (() => undefined | UploadFileConnectionCaptionKeySpecifier),
		fields?: UploadFileConnectionCaptionFieldPolicy,
	},
	UploadFileConnectionCreatedAt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionCreatedAtKeySpecifier | (() => undefined | UploadFileConnectionCreatedAtKeySpecifier),
		fields?: UploadFileConnectionCreatedAtFieldPolicy,
	},
	UploadFileConnectionExt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionExtKeySpecifier | (() => undefined | UploadFileConnectionExtKeySpecifier),
		fields?: UploadFileConnectionExtFieldPolicy,
	},
	UploadFileConnectionFormats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionFormatsKeySpecifier | (() => undefined | UploadFileConnectionFormatsKeySpecifier),
		fields?: UploadFileConnectionFormatsFieldPolicy,
	},
	UploadFileConnectionHash?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionHashKeySpecifier | (() => undefined | UploadFileConnectionHashKeySpecifier),
		fields?: UploadFileConnectionHashFieldPolicy,
	},
	UploadFileConnectionHeight?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionHeightKeySpecifier | (() => undefined | UploadFileConnectionHeightKeySpecifier),
		fields?: UploadFileConnectionHeightFieldPolicy,
	},
	UploadFileConnectionId?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionIdKeySpecifier | (() => undefined | UploadFileConnectionIdKeySpecifier),
		fields?: UploadFileConnectionIdFieldPolicy,
	},
	UploadFileConnectionMime?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionMimeKeySpecifier | (() => undefined | UploadFileConnectionMimeKeySpecifier),
		fields?: UploadFileConnectionMimeFieldPolicy,
	},
	UploadFileConnectionName?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionNameKeySpecifier | (() => undefined | UploadFileConnectionNameKeySpecifier),
		fields?: UploadFileConnectionNameFieldPolicy,
	},
	UploadFileConnectionPreviewUrl?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionPreviewUrlKeySpecifier | (() => undefined | UploadFileConnectionPreviewUrlKeySpecifier),
		fields?: UploadFileConnectionPreviewUrlFieldPolicy,
	},
	UploadFileConnectionProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionProviderKeySpecifier | (() => undefined | UploadFileConnectionProviderKeySpecifier),
		fields?: UploadFileConnectionProviderFieldPolicy,
	},
	UploadFileConnectionProvider_metadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionProvider_metadataKeySpecifier | (() => undefined | UploadFileConnectionProvider_metadataKeySpecifier),
		fields?: UploadFileConnectionProvider_metadataFieldPolicy,
	},
	UploadFileConnectionSize?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionSizeKeySpecifier | (() => undefined | UploadFileConnectionSizeKeySpecifier),
		fields?: UploadFileConnectionSizeFieldPolicy,
	},
	UploadFileConnectionUpdatedAt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionUpdatedAtKeySpecifier | (() => undefined | UploadFileConnectionUpdatedAtKeySpecifier),
		fields?: UploadFileConnectionUpdatedAtFieldPolicy,
	},
	UploadFileConnectionUrl?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionUrlKeySpecifier | (() => undefined | UploadFileConnectionUrlKeySpecifier),
		fields?: UploadFileConnectionUrlFieldPolicy,
	},
	UploadFileConnectionWidth?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnectionWidthKeySpecifier | (() => undefined | UploadFileConnectionWidthKeySpecifier),
		fields?: UploadFileConnectionWidthFieldPolicy,
	},
	UploadFileConnection_id?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileConnection_idKeySpecifier | (() => undefined | UploadFileConnection_idKeySpecifier),
		fields?: UploadFileConnection_idFieldPolicy,
	},
	UploadFileGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadFileGroupByKeySpecifier | (() => undefined | UploadFileGroupByKeySpecifier),
		fields?: UploadFileGroupByFieldPolicy,
	},
	UserPermissionsPasswordPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermissionsPasswordPayloadKeySpecifier | (() => undefined | UserPermissionsPasswordPayloadKeySpecifier),
		fields?: UserPermissionsPasswordPayloadFieldPolicy,
	},
	UsersPermissionsLoginPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsLoginPayloadKeySpecifier | (() => undefined | UsersPermissionsLoginPayloadKeySpecifier),
		fields?: UsersPermissionsLoginPayloadFieldPolicy,
	},
	UsersPermissionsMe?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsMeKeySpecifier | (() => undefined | UsersPermissionsMeKeySpecifier),
		fields?: UsersPermissionsMeFieldPolicy,
	},
	UsersPermissionsMeRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsMeRoleKeySpecifier | (() => undefined | UsersPermissionsMeRoleKeySpecifier),
		fields?: UsersPermissionsMeRoleFieldPolicy,
	},
	UsersPermissionsPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsPermissionKeySpecifier | (() => undefined | UsersPermissionsPermissionKeySpecifier),
		fields?: UsersPermissionsPermissionFieldPolicy,
	},
	UsersPermissionsRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsRoleKeySpecifier | (() => undefined | UsersPermissionsRoleKeySpecifier),
		fields?: UsersPermissionsRoleFieldPolicy,
	},
	UsersPermissionsRoleAggregator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsRoleAggregatorKeySpecifier | (() => undefined | UsersPermissionsRoleAggregatorKeySpecifier),
		fields?: UsersPermissionsRoleAggregatorFieldPolicy,
	},
	UsersPermissionsRoleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsRoleConnectionKeySpecifier | (() => undefined | UsersPermissionsRoleConnectionKeySpecifier),
		fields?: UsersPermissionsRoleConnectionFieldPolicy,
	},
	UsersPermissionsRoleConnectionDescription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsRoleConnectionDescriptionKeySpecifier | (() => undefined | UsersPermissionsRoleConnectionDescriptionKeySpecifier),
		fields?: UsersPermissionsRoleConnectionDescriptionFieldPolicy,
	},
	UsersPermissionsRoleConnectionId?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsRoleConnectionIdKeySpecifier | (() => undefined | UsersPermissionsRoleConnectionIdKeySpecifier),
		fields?: UsersPermissionsRoleConnectionIdFieldPolicy,
	},
	UsersPermissionsRoleConnectionName?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsRoleConnectionNameKeySpecifier | (() => undefined | UsersPermissionsRoleConnectionNameKeySpecifier),
		fields?: UsersPermissionsRoleConnectionNameFieldPolicy,
	},
	UsersPermissionsRoleConnectionType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsRoleConnectionTypeKeySpecifier | (() => undefined | UsersPermissionsRoleConnectionTypeKeySpecifier),
		fields?: UsersPermissionsRoleConnectionTypeFieldPolicy,
	},
	UsersPermissionsRoleConnection_id?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsRoleConnection_idKeySpecifier | (() => undefined | UsersPermissionsRoleConnection_idKeySpecifier),
		fields?: UsersPermissionsRoleConnection_idFieldPolicy,
	},
	UsersPermissionsRoleGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsRoleGroupByKeySpecifier | (() => undefined | UsersPermissionsRoleGroupByKeySpecifier),
		fields?: UsersPermissionsRoleGroupByFieldPolicy,
	},
	UsersPermissionsUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserKeySpecifier | (() => undefined | UsersPermissionsUserKeySpecifier),
		fields?: UsersPermissionsUserFieldPolicy,
	},
	UsersPermissionsUserAggregator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserAggregatorKeySpecifier | (() => undefined | UsersPermissionsUserAggregatorKeySpecifier),
		fields?: UsersPermissionsUserAggregatorFieldPolicy,
	},
	UsersPermissionsUserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserConnectionKeySpecifier | (() => undefined | UsersPermissionsUserConnectionKeySpecifier),
		fields?: UsersPermissionsUserConnectionFieldPolicy,
	},
	UsersPermissionsUserConnectionBlocked?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserConnectionBlockedKeySpecifier | (() => undefined | UsersPermissionsUserConnectionBlockedKeySpecifier),
		fields?: UsersPermissionsUserConnectionBlockedFieldPolicy,
	},
	UsersPermissionsUserConnectionConfirmed?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserConnectionConfirmedKeySpecifier | (() => undefined | UsersPermissionsUserConnectionConfirmedKeySpecifier),
		fields?: UsersPermissionsUserConnectionConfirmedFieldPolicy,
	},
	UsersPermissionsUserConnectionCreatedAt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserConnectionCreatedAtKeySpecifier | (() => undefined | UsersPermissionsUserConnectionCreatedAtKeySpecifier),
		fields?: UsersPermissionsUserConnectionCreatedAtFieldPolicy,
	},
	UsersPermissionsUserConnectionEmail?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserConnectionEmailKeySpecifier | (() => undefined | UsersPermissionsUserConnectionEmailKeySpecifier),
		fields?: UsersPermissionsUserConnectionEmailFieldPolicy,
	},
	UsersPermissionsUserConnectionId?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserConnectionIdKeySpecifier | (() => undefined | UsersPermissionsUserConnectionIdKeySpecifier),
		fields?: UsersPermissionsUserConnectionIdFieldPolicy,
	},
	UsersPermissionsUserConnectionProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserConnectionProviderKeySpecifier | (() => undefined | UsersPermissionsUserConnectionProviderKeySpecifier),
		fields?: UsersPermissionsUserConnectionProviderFieldPolicy,
	},
	UsersPermissionsUserConnectionRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserConnectionRoleKeySpecifier | (() => undefined | UsersPermissionsUserConnectionRoleKeySpecifier),
		fields?: UsersPermissionsUserConnectionRoleFieldPolicy,
	},
	UsersPermissionsUserConnectionUpdatedAt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserConnectionUpdatedAtKeySpecifier | (() => undefined | UsersPermissionsUserConnectionUpdatedAtKeySpecifier),
		fields?: UsersPermissionsUserConnectionUpdatedAtFieldPolicy,
	},
	UsersPermissionsUserConnectionUsername?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserConnectionUsernameKeySpecifier | (() => undefined | UsersPermissionsUserConnectionUsernameKeySpecifier),
		fields?: UsersPermissionsUserConnectionUsernameFieldPolicy,
	},
	UsersPermissionsUserConnection_id?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserConnection_idKeySpecifier | (() => undefined | UsersPermissionsUserConnection_idKeySpecifier),
		fields?: UsersPermissionsUserConnection_idFieldPolicy,
	},
	UsersPermissionsUserGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPermissionsUserGroupByKeySpecifier | (() => undefined | UsersPermissionsUserGroupByKeySpecifier),
		fields?: UsersPermissionsUserGroupByFieldPolicy,
	},
	createCollectionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | createCollectionPayloadKeySpecifier | (() => undefined | createCollectionPayloadKeySpecifier),
		fields?: createCollectionPayloadFieldPolicy,
	},
	createItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | createItemPayloadKeySpecifier | (() => undefined | createItemPayloadKeySpecifier),
		fields?: createItemPayloadFieldPolicy,
	},
	createRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | createRolePayloadKeySpecifier | (() => undefined | createRolePayloadKeySpecifier),
		fields?: createRolePayloadFieldPolicy,
	},
	createUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | createUserPayloadKeySpecifier | (() => undefined | createUserPayloadKeySpecifier),
		fields?: createUserPayloadFieldPolicy,
	},
	deleteCollectionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | deleteCollectionPayloadKeySpecifier | (() => undefined | deleteCollectionPayloadKeySpecifier),
		fields?: deleteCollectionPayloadFieldPolicy,
	},
	deleteFilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | deleteFilePayloadKeySpecifier | (() => undefined | deleteFilePayloadKeySpecifier),
		fields?: deleteFilePayloadFieldPolicy,
	},
	deleteItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | deleteItemPayloadKeySpecifier | (() => undefined | deleteItemPayloadKeySpecifier),
		fields?: deleteItemPayloadFieldPolicy,
	},
	deleteRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | deleteRolePayloadKeySpecifier | (() => undefined | deleteRolePayloadKeySpecifier),
		fields?: deleteRolePayloadFieldPolicy,
	},
	deleteUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | deleteUserPayloadKeySpecifier | (() => undefined | deleteUserPayloadKeySpecifier),
		fields?: deleteUserPayloadFieldPolicy,
	},
	updateCollectionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | updateCollectionPayloadKeySpecifier | (() => undefined | updateCollectionPayloadKeySpecifier),
		fields?: updateCollectionPayloadFieldPolicy,
	},
	updateItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | updateItemPayloadKeySpecifier | (() => undefined | updateItemPayloadKeySpecifier),
		fields?: updateItemPayloadFieldPolicy,
	},
	updateRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | updateRolePayloadKeySpecifier | (() => undefined | updateRolePayloadKeySpecifier),
		fields?: updateRolePayloadFieldPolicy,
	},
	updateUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | updateUserPayloadKeySpecifier | (() => undefined | updateUserPayloadKeySpecifier),
		fields?: updateUserPayloadFieldPolicy,
	}
};