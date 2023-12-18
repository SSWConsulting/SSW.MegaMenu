import australiaFlag from "../assets/countries/australia-flag.svg";
import chinaFlag from "../assets/countries/china-flag.svg";
import franceFlag from "../assets/countries/france-flag.svg";

export const countryMap = {
  Australia: australiaFlag,
  China: chinaFlag,
  France: franceFlag,
}

export type Countries = (keyof typeof countryMap);