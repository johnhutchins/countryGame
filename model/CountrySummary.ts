import { Country } from "../types";

export class CountrySummary {
    country: string
    city: string | null
    constructor(data: Country) {
        this.country = data.country
        this.city = data.city
    }
}