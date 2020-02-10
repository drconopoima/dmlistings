"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 8085;
app.get("/", (request, response) => response.send(`Hello visitor of port ${port}!`));
app.listen(port);
console.log(`[app]: http://localhost:${port}`);