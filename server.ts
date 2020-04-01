import express from "express"
import cors from "cors";
import { apiGetRandomCountry } from "./api/apiGetRandomCountry"
const app = express()

app.use(cors())

app.get('/country', apiGetRandomCountry)

app.listen(process.env.PORT || 8091, () => {
    console.log("Server Started")
})