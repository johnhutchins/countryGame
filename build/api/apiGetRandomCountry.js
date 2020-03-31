"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const CountrySummary_1 = require("../model/CountrySummary");
const getRandomCountry = () => {
    const randIndex = Math.floor(Math.random() * data_1.DataStore.countries.length);
    let obj = {
        country: data_1.DataStore.countries[randIndex].country,
        city: data_1.DataStore.countries[randIndex].city
    };
    if (obj.city == null) {
        obj.city = 'N/A';
    }
    return obj;
};
exports.apiGetRandomCountry = (req, res, next) => {
    return res.json(new CountrySummary_1.CountrySummary(getRandomCountry()));
};
