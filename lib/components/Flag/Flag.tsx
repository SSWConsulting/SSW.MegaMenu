import { Countries, countryMap } from "../../types/country";
import { cx } from "../../util/cx";

export type CountryFlagProps = {
  country: Countries;
  className?: string;
  height?: number;
  width?: number;
};

export const Flag = ({
  country,
  className,
  width,
  height,
}: CountryFlagProps) => {
  const countryFlag = countryMap[country];
  return (
    <img
      className={cx("my-0 inline", className)}
      alt={country + "flag"}
      src={countryFlag}
      width={width || 35}
      height={height || 35}
    />
  );
};
