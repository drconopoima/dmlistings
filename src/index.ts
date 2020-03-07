import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";
import { connectDatabase } from "./database";

const port: number = 8085;

const mount = async (app: Application) => {
  const db = await connectDatabase();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
    playground: true
  });
  server.applyMiddleware({ app, path: "/api" });

  app.listen(port);

  const listings = await db.listings.find({}).toArray();
  console.log(listings);
};

mount(express());
