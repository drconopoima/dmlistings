import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull
} from "graphql";
import { listings } from "./listings";

const Listing = new GraphQLObjectType({
  name: "Listing",
  fields: {
    id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLFloat) },
    numberOfBedrooms: { type: GraphQLNonNull(GraphQLInt) },
    numberOfBathrooms: { type: GraphQLNonNull(GraphQLInt) },
    rating: { type: GraphQLNonNull(GraphQLInt) }
  }
});

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    listings: {
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(Listing))),
      resolve: () => listings
    }
  }
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    deleteListing: {
      type: GraphQLNonNull(Listing),
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (_root, { id }) => {
        for (let index = 0; index < listings.length; index++) {
          if (listings[index].id === id) {
            return listings.splice(index, 1)[0];
          }
        }
        throw new Error(`Failed to delete listing of id=${id}`);
      }
    }
  }
});

export const schema = new GraphQLSchema({
  query,
  mutation
});
