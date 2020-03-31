"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const CountrySummary_1 = require("../model/CountrySummary");
const getRandomCountry = () => {
    const randIndex = Math.floor(Math.random() * data_1.DataStore.all.countries.length);
    const countryKeys = data_1.DataStore.all.countries.keys();
    console.log("country keys = " + countryKeys);
    return data_1.DataStore.all.countries[randIndex];
};
exports.apiGetRandomCountry = (req, res, next) => {
    return res.json(new CountrySummary_1.CountrySummary(getRandomCountry()));
};
