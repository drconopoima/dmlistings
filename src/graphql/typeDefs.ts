import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar IntString

  type Listing {
    id: ID!
    title: String!
    image: String!
    address: String!
    price: IntString!
    numberOfBedrooms: Int!
    numberOfBathrooms: Int!
    rating: Int!
  }

  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    deleteListing(id: ID!): Listing!
  }
`;
