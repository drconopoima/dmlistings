const express = require('express');
const app = express();
const port = 8085;

app.get("/", (request, response) => response.send("Hello World!"));

app.listen(port);

console.log(`[app]: http://localhost:${port}`);