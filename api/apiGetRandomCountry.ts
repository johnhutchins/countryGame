import { DataStore } from "../data"
import { RequestHandler } from "express"
import { CountrySummary } from "../model/CountrySummary"

const getRandomCountry = () => {
    const randIndex = Math.floor(Math.random() * DataStore.all.length)

    //const countryKeys = DataStore.all.keys()
    //console.log("country keys = " + countryKeys)

    const obj = DataStore.all[randIndex]

    return DataStore.all[randIndex]
}

export const apiGetRandomCountry: RequestHandler = (req, res, next) => {
    return res.json(new CountrySummary(getRandomCountry()))
}