export class CountrySummary {
    country: string
    capital: string
    constructor(data: any) {
        this.country = data.country
        this.capital = data.capital
    }
}