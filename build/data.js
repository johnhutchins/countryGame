"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AllCountries_json_1 = __importDefault(require("./data/json/AllCountries.json"));
class DataStore {
}
exports.DataStore = DataStore;
DataStore.all = AllCountries_json_1.default;
