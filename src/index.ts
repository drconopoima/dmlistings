import express from "express";
import bodyParser from "body-parser";
import { listings } from "./listings";

const app = express();
const port: number = 8085;

app.use(bodyParser.json());

app.get("/", (_request, response) =>
  response.send(`Hello visitor of port ${port}!`)
);

app.get("/listings", (_request, response) => {
  response.send(listings);
});

app.post("/listings/delete", (request, response) => {
  const id: string = request.body.id;

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      const deletedListing = listings.splice(i, 1);
      return response.send(deletedListing);
    }
  }

  return response.send(`Failed to delete listing of id=${id}.`);
});

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
