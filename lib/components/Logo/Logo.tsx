import React from "react";
import { CustomImage } from "../CustomImage";

export type LogoSize = "small" | "medium" | "large";

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
        height={60}
        width={100}
        className="h-full"
      />
      <span className="sr-only">SSW</span>
    </>
  );
};

export default Logo;
