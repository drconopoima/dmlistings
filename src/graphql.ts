import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "Hello query world"
    }
  }
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "Hello mutation world"
    }
  }
});

export const schema = new GraphQLSchema({
  query,
  mutation
});
