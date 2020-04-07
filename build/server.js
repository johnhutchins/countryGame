"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apiGetRandomCountry_1 = require("./api/apiGetRandomCountry");
const app = express_1.default();
app.use(cors_1.default());
app.get('/country', apiGetRandomCountry_1.apiGetRandomCountry);
app.listen(process.env.PORT || 8091, () => {
    console.log("Server Started");
});
