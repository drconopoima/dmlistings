import express from "express";
// GraphQL API
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql";
// // REST API
// import bodyParser from "body-parser";
// import { listings } from "./listings";

const app = express();
const port: number = 8085;

const server = new ApolloServer({ schema: schema, playground: true });
server.applyMiddleware({ app, path: "/api" });

// // REST API
// app.use(bodyParser.json());
// app.use(bodyParser.text());

// app.get("/", (_request, response) =>
//   response.send(`Hello visitor of port ${port}!`)
// );

// app.get("/listings", (_request, response) => {
//   response.send(listings);
// });

// // JSON Requests
// // curl -X POST http://localhost:8085/listings/delete -H "Content-Type: text/plain" -d '{"id": "0001"}'
// // Text/plain Requests
// // curl -X POST http://localhost:8085/listings/delete -H "Content-Type: text/plain" -d '0001'
// app.post("/listings/delete", (request, response) => {
//   // If exists id key in request body, otherwise guess text request
//   const id: string = request.body.id ? request.body.id : request.body;

//   for (let i = 0; i < listings.length; i++) {
//     if (listings[i].id === id) {
//       const deletedListing = listings.splice(i, 1);
//       return response.send(deletedListing);
//     }
//   }

//   return response.send(`Failed to delete listing of id=${id}.`);
// });

app.listen(port);
