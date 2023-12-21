import { Countries, countryMap } from "../../types/country";

export type CountryFlagProps = {
  country: Countries;
  className?: string;
};

export const Flag = ({ country, className }: CountryFlagProps) => {
  const CountryFlag = countryMap[country];
  return <CountryFlag className={className} />;
};
