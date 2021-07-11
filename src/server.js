"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
require("reflect-metadata");
require("express-async-errors");
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
require("./database");
var app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(function (err, req, res, next) {
    if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({
        status: "error",
        message: "internal Server Error",
    });
});
app.listen(process.env.PORT, function () {
    return console.log("Server is running on port, ", process.env.PORT);
});
