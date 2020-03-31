"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CountrySummary {
    constructor(data) {
        this.country = data.country;
        this.alpha2 = data.alpha2;
        this.alpha3 = data.alpha3;
        this.numeric = data.numeric;
        this.latitude = data.latitude;
        this.longitude = data.longitude;
    }
}
exports.CountrySummary = CountrySummary;
