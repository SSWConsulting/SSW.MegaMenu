import { AustraliaFlag } from "../components/Flag/flags/AustraliaFlag";
import { ChinaFlag } from "../components/Flag/flags/ChinaFlag";
import { FranceFlag } from "../components/Flag/flags/FranceFlag";

export type FlagProps = {
  className?: string;
};

export const countryMap = {
  Australia: AustraliaFlag,
  China: ChinaFlag,
  France: FranceFlag,
};

export type Countries = keyof typeof countryMap;
