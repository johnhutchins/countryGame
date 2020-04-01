import express from "express"
import cors from "cors"
import { apiGetRandomCountry } from "./api/apiGetRandomCountry"
import path from "path"
const app = express()


//app.use(express.static('public'))
// //this needs to be fixed....
// app.get('/', (req, res, next) => {
//     res.json({ 'status': "You didn't mean to come here..." })
// })

app.use(cors({
    origin: 'http://localhost:3000/'
}))

app.get('/country', apiGetRandomCountry)

app.listen(process.env.PORT || 8091, () => {
    console.log("Server Started")
})