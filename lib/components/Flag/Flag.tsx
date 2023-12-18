import { Countries, countryMap } from "../../types/country";
import { cx } from "../../util/cx";

export type CountryFlagProps = {
  country: Countries;
  className?: string;
};

export const Flag = ({ country, className }: CountryFlagProps) => {
  const countryUrl = countryMap[country];
  return <img src={countryUrl} className={cx("inline-block my-0", className)} height={32} width={32} />;
};