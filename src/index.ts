import express from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql";

const app = express();
const port: number = 8085;

const server = new ApolloServer({ schema: schema, playground: true });
server.applyMiddleware({ app, path: "/api" });

app.listen(port);
