import australiaFlag from "../components/Flag/flags/australia-flag.svg";
import chinaFlag from "../components/Flag/flags/china-flag.svg";
import franceFlag from "../components/Flag/flags/france-flag.svg";

export type FlagProps = {
  className?: string;
};

export const countryMap = {
  Australia: australiaFlag,
  China: chinaFlag,
  France: franceFlag,
};

export type Countries = keyof typeof countryMap;
