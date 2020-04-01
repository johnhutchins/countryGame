export interface Country {
    country: string
    city: string | null
    incorrectCountries?: IncorrectCountries
}

export interface IncorrectCountries {
    countries: Array<string>
}