import React from "react";
import { CustomImage } from "../CustomImage";

export type LogoSize = "small" | "medium" | "large";

const LIGHT_LOGO = "/images/ssw-logo-lightmode.svg";
const DARK_LOGO = "/images/ssw-logo-darkmode.svg";

const Logo: React.FC = () => {
  // show the xmas logo for 1-25 December
  const date = new Date();
  const isXmas = date.getMonth() === 11 && date.getDate() <= 25;
  const logoPath = isXmas
    ? "https://www.ssw.com.au/images/ssw-logo-xmas.svg"
    : LIGHT_LOGO;

  return (
    <>
      <CustomImage
        src={logoPath}
        alt="SSW - Enterprise Software Development"
        className="h-14 w-auto object-contain xl:h-11 min-[1400px]:h-14 dark:hidden"
      />
      <CustomImage
        src={DARK_LOGO}
        alt=""
        aria-hidden="true"
        className="hidden h-14 w-auto object-contain xl:h-11 min-[1400px]:h-14 dark:block"
      />
    </>
  );
};

export default Logo;
