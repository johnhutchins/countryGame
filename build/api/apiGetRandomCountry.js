"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const getRandomCountry = () => {
    const randIndex = Math.floor(Math.random() * data_1.DataStore.countries.length);
    let countriesArr = {
        countries: getUniqueCountries(randIndex)
    };
    let obj = {
        country: data_1.DataStore.countries[randIndex].country,
        city: data_1.DataStore.countries[randIndex].city
    };
    countriesArr.countries.push(data_1.DataStore.countries[randIndex].country);
    obj.allCountries = countriesArr;
    return obj;
};
const getRandomIndex = () => {
    return Math.floor(Math.random() * data_1.DataStore.countries.length);
};
const getUniqueCountries = (num) => {
    let countryArray = new Array();
    let randomInd = getRandomIndex();
    while (countryArray.length < 3) {
        if (num != randomInd && !countryArray.includes(countryArray[randomInd])) {
            countryArray.push(data_1.DataStore.countries[randomInd].country);
        }
        randomInd = getRandomIndex();
    }
    return countryArray;
};
exports.apiGetRandomCountry = (req, res, next) => {
    const country = getRandomCountry();
    return res.json(country);
};
