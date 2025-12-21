import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountriesData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// Http Get Method for the individual country details
// Getting Individual Countries Data
export const getCountriesIndiData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
