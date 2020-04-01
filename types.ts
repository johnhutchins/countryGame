export interface Country {
    country: string
    city: string | null
    allCountries?: AllCountries
}

export interface AllCountries {
    countries: Array<string>
}