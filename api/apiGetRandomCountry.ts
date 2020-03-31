import { DataStore } from "../data"
import { RequestHandler } from "express"
import { CountrySummary } from "../model/CountrySummary"
import { Country } from "../types";

const getRandomCountry = (): Country => {
    const randIndex = Math.floor(Math.random() * DataStore.countries.length)
    let obj: Country = {
        country: DataStore.countries[randIndex].country,
        city: DataStore.countries[randIndex].city
    }
    return obj
}

export const apiGetRandomCountry: RequestHandler = (req, res, next) => {
    const country: Country = getRandomCountry()
    return res.json(country)
}