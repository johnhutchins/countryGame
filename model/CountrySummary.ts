export class CountrySummary {
    country: string
    alpha2: string
    alpha3: string
    numeric: number
    latitude: number
    longitude: number
    constructor(data: any) {
        this.country = data.country
        this.alpha2 = data.alpha2
        this.alpha3 = data.alpha3
        this.numeric = data.numeric
        this.latitude = data.latitude
        this.longitude = data.longitude
    }
}