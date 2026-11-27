import { Countries, countryMap } from "../../types/country";
import { cx } from "../../util/cx";

export type CountryFlagProps = {
  country: Countries;
  className?: string;
  height?: number;
  width?: number;
  // Defaults to the country name. Pass "" when the control around the flag
  // already has its own label, so the flag isn't announced twice.
  alt?: string;
  "aria-hidden"?: boolean;
};

export const Flag = ({
  country,
  className,
  width,
  height,
  alt,
  "aria-hidden": ariaHidden,
}: CountryFlagProps) => {
  const countryFlag = countryMap[country];
  return (
    <img
      className={cx("my-0 inline", className)}
      alt={alt ?? country}
      src={countryFlag}
      width={width || 35}
      height={height || 35}
      aria-hidden={ariaHidden}
    />
  );
};
