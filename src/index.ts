import express from "express";
const app = express();
const port: number = 8085;

app.get("/", (_request, response) =>
  response.send(`Hello visitor of port ${port}!`)
);

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
