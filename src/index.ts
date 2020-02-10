import express from "express";

import { listings } from "./listings";

const app = express();
const port: number = 8085;

app.get("/", (_request, response) =>
  response.send(`Hello visitor of port ${port}!`)
);

app.get("/listings", (_request, response) => {
  response.send(listings);
});

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
