/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./context"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BookListRelationFilter: { // input type
    every?: NexusGenInputs['BookWhereInput'] | null; // BookWhereInput
    none?: NexusGenInputs['BookWhereInput'] | null; // BookWhereInput
    some?: NexusGenInputs['BookWhereInput'] | null; // BookWhereInput
  }
  BookOrderByInput: { // input type
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    isbn?: NexusGenEnums['SortOrder'] | null; // SortOrder
    title?: NexusGenEnums['SortOrder'] | null; // SortOrder
    userId?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  BookWhereInput: { // input type
    AND?: NexusGenInputs['BookWhereInput'][] | null; // [BookWhereInput!]
    author?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    isbn?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['BookWhereInput'][] | null; // [BookWhereInput!]
    OR?: NexusGenInputs['BookWhereInput'][] | null; // [BookWhereInput!]
    reviews?: NexusGenInputs['ReviewListRelationFilter'] | null; // ReviewListRelationFilter
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
    userId?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  BookWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  EnumroleFilter: { // input type
    equals?: NexusGenEnums['role'] | null; // role
    in?: NexusGenEnums['role'][] | null; // [role!]
    not?: NexusGenInputs['NestedEnumroleFilter'] | null; // NestedEnumroleFilter
    notIn?: NexusGenEnums['role'][] | null; // [role!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedEnumroleFilter: { // input type
    equals?: NexusGenEnums['role'] | null; // role
    in?: NexusGenEnums['role'][] | null; // [role!]
    not?: NexusGenInputs['NestedEnumroleFilter'] | null; // NestedEnumroleFilter
    notIn?: NexusGenEnums['role'][] | null; // [role!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NestedStringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  ReviewListRelationFilter: { // input type
    every?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
    none?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
    some?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
  }
  ReviewOrderByInput: { // input type
    bookId?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    rating?: NexusGenEnums['SortOrder'] | null; // SortOrder
    text?: NexusGenEnums['SortOrder'] | null; // SortOrder
    userId?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  ReviewWhereInput: { // input type
    AND?: NexusGenInputs['ReviewWhereInput'][] | null; // [ReviewWhereInput!]
    author?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    book?: NexusGenInputs['BookWhereInput'] | null; // BookWhereInput
    bookId?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['ReviewWhereInput'][] | null; // [ReviewWhereInput!]
    OR?: NexusGenInputs['ReviewWhereInput'][] | null; // [ReviewWhereInput!]
    rating?: NexusGenInputs['IntFilter'] | null; // IntFilter
    text?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    userId?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  ReviewWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserOrderByInput: { // input type
    email?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    role?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    books?: NexusGenInputs['BookListRelationFilter'] | null; // BookListRelationFilter
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    reviews?: NexusGenInputs['ReviewListRelationFilter'] | null; // ReviewListRelationFilter
    role?: NexusGenInputs['EnumroleFilter'] | null; // EnumroleFilter
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
  QueryMode: "default" | "insensitive"
  SortOrder: "asc" | "desc"
  role: "CONSUMER" | "VENDOR"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Book: { // root type
    id: string; // String!
    isbn: string; // String!
    title: string; // String!
    userId: string; // String!
  }
  Mutation: {};
  Query: {};
  Review: { // root type
    bookId: string; // String!
    id: string; // String!
    rating: number; // Int!
    text?: string | null; // String
    userId: string; // String!
  }
  Subscription: {};
  User: { // root type
    email: string; // String!
    id: string; // String!
    name: string; // String!
    role: NexusGenEnums['role']; // role!
  }
  bookSubResponse: { // root type
    data?: NexusGenRootTypes['Book'] | null; // Book
    mutation?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Book: { // field return type
    author: NexusGenRootTypes['User']; // User!
    id: string; // String!
    isbn: string; // String!
    reviews: NexusGenRootTypes['Review'][]; // [Review!]!
    title: string; // String!
    userId: string; // String!
  }
  Mutation: { // field return type
    createBook: NexusGenRootTypes['Book'] | null; // Book
    createReview: NexusGenRootTypes['Review'] | null; // Review
    createUser: NexusGenRootTypes['User'] | null; // User
    deleteBook: NexusGenRootTypes['Book'] | null; // Book
    deleteReview: NexusGenRootTypes['Review'] | null; // Review
    deleteUser: NexusGenRootTypes['User'] | null; // User
    updateBook: NexusGenRootTypes['Book'] | null; // Book
    updateReview: NexusGenRootTypes['Review'] | null; // Review
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    book: NexusGenRootTypes['Book'] | null; // Book
    bookCount: number | null; // Int
    books: NexusGenRootTypes['Book'][]; // [Book!]!
    review: NexusGenRootTypes['Review'] | null; // Review
    reviewCount: number | null; // Int
    reviews: NexusGenRootTypes['Review'][]; // [Review!]!
    user: NexusGenRootTypes['User'] | null; // User
    userCount: number | null; // Int
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Review: { // field return type
    author: NexusGenRootTypes['User']; // User!
    book: NexusGenRootTypes['Book']; // Book!
    bookId: string; // String!
    id: string; // String!
    rating: number; // Int!
    text: string | null; // String
    userId: string; // String!
  }
  Subscription: { // field return type
    bookSub: NexusGenRootTypes['bookSubResponse'] | null; // bookSubResponse
    bookSubByUser: NexusGenRootTypes['bookSubResponse'] | null; // bookSubResponse
  }
  User: { // field return type
    books: NexusGenRootTypes['Book'][]; // [Book!]!
    email: string; // String!
    id: string; // String!
    name: string; // String!
    reviews: NexusGenRootTypes['Review'][]; // [Review!]!
    role: NexusGenEnums['role']; // role!
  }
  bookSubResponse: { // field return type
    data: NexusGenRootTypes['Book'] | null; // Book
    mutation: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Book: { // field return type name
    author: 'User'
    id: 'String'
    isbn: 'String'
    reviews: 'Review'
    title: 'String'
    userId: 'String'
  }
  Mutation: { // field return type name
    createBook: 'Book'
    createReview: 'Review'
    createUser: 'User'
    deleteBook: 'Book'
    deleteReview: 'Review'
    deleteUser: 'User'
    updateBook: 'Book'
    updateReview: 'Review'
    updateUser: 'User'
  }
  Query: { // field return type name
    book: 'Book'
    bookCount: 'Int'
    books: 'Book'
    review: 'Review'
    reviewCount: 'Int'
    reviews: 'Review'
    user: 'User'
    userCount: 'Int'
    users: 'User'
  }
  Review: { // field return type name
    author: 'User'
    book: 'Book'
    bookId: 'String'
    id: 'String'
    rating: 'Int'
    text: 'String'
    userId: 'String'
  }
  Subscription: { // field return type name
    bookSub: 'bookSubResponse'
    bookSubByUser: 'bookSubResponse'
  }
  User: { // field return type name
    books: 'Book'
    email: 'String'
    id: 'String'
    name: 'String'
    reviews: 'Review'
    role: 'role'
  }
  bookSubResponse: { // field return type name
    data: 'Book'
    mutation: 'String'
  }
}

export interface NexusGenArgTypes {
  Book: {
    reviews: { // args
      after?: NexusGenInputs['ReviewWhereUniqueInput'] | null; // ReviewWhereUniqueInput
      before?: NexusGenInputs['ReviewWhereUniqueInput'] | null; // ReviewWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Mutation: {
    createBook: { // args
      isbn: string; // String!
      title: string; // String!
      userId: string; // ID!
    }
    createReview: { // args
      bookId: string; // ID!
      rating: number; // Int!
      text?: string | null; // String
      userId: string; // ID!
    }
    createUser: { // args
      email: string; // String!
      name: string; // String!
      role: NexusGenEnums['role']; // role!
    }
    deleteBook: { // args
      id: string; // ID!
    }
    deleteReview: { // args
      id: string; // ID!
    }
    deleteUser: { // args
      id: string; // ID!
    }
    updateBook: { // args
      updateIsbn?: string | null; // String
      updateTitle?: string | null; // String
      whereId: string; // ID!
    }
    updateReview: { // args
      updateRating?: number | null; // Int
      updateText?: string | null; // String
      whereId: string; // ID!
    }
    updateUser: { // args
      updateEmail?: string | null; // String
      updateName?: string | null; // String
      whereId: string; // ID!
    }
  }
  Query: {
    book: { // args
      where: NexusGenInputs['BookWhereUniqueInput']; // BookWhereUniqueInput!
    }
    books: { // args
      after?: NexusGenInputs['BookWhereUniqueInput'] | null; // BookWhereUniqueInput
      before?: NexusGenInputs['BookWhereUniqueInput'] | null; // BookWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['BookOrderByInput'][] | null; // [BookOrderByInput!]
      where?: NexusGenInputs['BookWhereInput'] | null; // BookWhereInput
    }
    review: { // args
      where: NexusGenInputs['ReviewWhereUniqueInput']; // ReviewWhereUniqueInput!
    }
    reviews: { // args
      after?: NexusGenInputs['ReviewWhereUniqueInput'] | null; // ReviewWhereUniqueInput
      before?: NexusGenInputs['ReviewWhereUniqueInput'] | null; // ReviewWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['ReviewOrderByInput'][] | null; // [ReviewOrderByInput!]
      where?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['UserOrderByInput'][] | null; // [UserOrderByInput!]
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  Subscription: {
    bookSub: { // args
      bookId: string; // ID!
    }
    bookSubByUser: { // args
      userId: string; // ID!
    }
  }
  User: {
    books: { // args
      after?: NexusGenInputs['BookWhereUniqueInput'] | null; // BookWhereUniqueInput
      before?: NexusGenInputs['BookWhereUniqueInput'] | null; // BookWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    reviews: { // args
      after?: NexusGenInputs['ReviewWhereUniqueInput'] | null; // ReviewWhereUniqueInput
      before?: NexusGenInputs['ReviewWhereUniqueInput'] | null; // ReviewWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}