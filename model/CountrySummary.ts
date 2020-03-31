export class CountrySummary {
    country: string
    city: string
    constructor(data: any) {
        this.country = data.country
        this.city = data.city
    }
}