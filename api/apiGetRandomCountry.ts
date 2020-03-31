import { DataStore } from "../data"
import { RequestHandler } from "express"
import { CountrySummary } from "../model/CountrySummary"

const getRandomCountry = () => {
    const randIndex = Math.floor(Math.random() * DataStore.countries.countries.length)
    return DataStore.countries.countries[randIndex]
}

export const apiGetRandomCountry: RequestHandler = (req, res, next) => {
    return res.json(new CountrySummary(getRandomCountry()))
}