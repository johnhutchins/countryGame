import { DataStore } from "../data"
import { RequestHandler } from "express"
import { CountrySummary } from "../model/CountrySummary"

const getRandomCountry = () => {
    const randIndex = Math.floor(Math.random() * DataStore.countries.length)
    let obj = {
        country: DataStore.countries[randIndex].country,
        city: DataStore.countries[randIndex].city
    }
    if (obj.city == null) {
        obj.city = 'N/A'
    }
    return obj
}

export const apiGetRandomCountry: RequestHandler = (req, res, next) => {
    return res.json(new CountrySummary(getRandomCountry()))
}