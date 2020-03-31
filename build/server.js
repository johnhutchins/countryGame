"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiGetRandomCountry_1 = require("./api/apiGetRandomCountry");
const app = express_1.default();
app.use(express_1.default.static('public'));
// //this needs to be fixed....
// app.get('/', (req, res, next) => {
//     res.json({ 'status': "You didn't mean to come here..." })
// })
app.get('/country', apiGetRandomCountry_1.apiGetRandomCountry);
app.listen(process.env.PORT || 8091, () => {
    console.log("Server Started");
});
