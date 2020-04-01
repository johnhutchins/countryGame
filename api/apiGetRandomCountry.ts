import { DataStore } from "../data"
import { RequestHandler } from "express"
import { Country, IncorrectCountries } from "../types";


const getRandomCountry = (): Country => {
    const randIndex = Math.floor(Math.random() * DataStore.countries.length)
    let obj: Country = {
        country: DataStore.countries[randIndex].country,
        city: DataStore.countries[randIndex].city
    }
    let incorrect: IncorrectCountries = {
        countries: getUniqueCountries(randIndex)
    }
    obj.incorrectCountries = incorrect
    return obj
}

const getRandomIndex = () => {
    return Math.floor(Math.random() * DataStore.countries.length)
}

const getUniqueCountries = (num: number) => {
    let countryArray: Array<string> = new Array()
    let randomInd: number = getRandomIndex()
    while (countryArray.length < 3) {
        if (num != randomInd && !countryArray.includes(countryArray[randomInd])) {
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