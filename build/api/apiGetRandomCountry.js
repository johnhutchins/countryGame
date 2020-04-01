"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const getRandomCountry = () => {
    const randIndex = Math.floor(Math.random() * data_1.DataStore.countries.length);
    let obj = {
        country: data_1.DataStore.countries[randIndex].country,
        city: data_1.DataStore.countries[randIndex].city
    };
    return obj;
};
exports.apiGetRandomCountry = (req, res, next) => {
    const country = getRandomCountry();
    return res.json(country);
};
