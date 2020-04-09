import { DataStore } from "../data"
import { RequestHandler } from "express"
import { Country, AllCountries } from "../types";


const getRandomCountry = (): Country => {
    const randIndex = Math.floor(Math.random() * DataStore.countries.length)
    let countriesArr: AllCountries = {
        countries: getUniqueCountries(randIndex)
    }
    let obj: Country = {
        country: DataStore.countries[randIndex].country,
        city: DataStore.countries[randIndex].city
    }
    countriesArr.countries.push(DataStore.countries[randIndex].country)
    obj.allCountries = countriesArr
    return obj
}

const getRandomIndex = () => {
    return Math.floor(Math.random() * DataStore.countries.length)
}

const getUniqueCountries = (num: number) => {
    let countryArray: Array<string> = new Array<string>()
    let randomInd: number = getRandomIndex()
    while (countryArray.length < 3) {
        if (num !== randomInd && !countryArray.includes(DataStore.countries[randomInd].country)) {
            countryArray.push(DataStore.countries[randomInd].country)
        }
        randomInd = getRandomIndex()
    }
    return countryArray
}

export const apiGetRandomCountry: RequestHandler = (req, res, next) => {
    const country: Country = getRandomCountry()
    return res.json(country)
}