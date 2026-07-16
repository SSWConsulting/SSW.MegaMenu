import React from "react";
import { CustomImage } from "../CustomImage";

export type LogoSize = "small" | "medium" | "large";

const DARK_LOGO = "/images/ssw-logo-darkmode.svg";

const Logo: React.FC = () => {
  // show the xmas logo for 1-25 December
  const date = new Date();
  const isXmas = date.getMonth() === 11 && date.getDate() <= 25;
  const logoPath = isXmas
    ? "https://www.ssw.com.au/images/ssw-logo-xmas.svg"
    : "https://www.ssw.com.au/images/ssw-logo.svg";

  return (
    <>
      <CustomImage
        src={logoPath}
        alt="SSW - Enterprise Software Development"
        className="h-14 w-auto object-contain dark:hidden"
      />
      <CustomImage
        src={DARK_LOGO}
        alt=""
        aria-hidden="true"
        className="hidden h-14 w-auto object-contain dark:block xl:h-11 min-[1400px]:h-14"
      />
      <span className="sr-only">SSW</span>
    </>
  );
};

export default Logo;
