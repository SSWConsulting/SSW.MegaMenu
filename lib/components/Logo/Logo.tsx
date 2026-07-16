import React from "react";
import { CustomImage } from "../CustomImage";

export type LogoSize = "small" | "medium" | "large";

// White-with-red logo for dark backgrounds (matches the SSW footer). Served from
// the consuming site's /images dir; swapped in via the `dark:` scope rather than
// inverting, so the red ring is preserved.
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
        className="hidden h-14 w-auto object-contain dark:block"
      />
      <span className="sr-only">SSW</span>
    </>
  );
};

export default Logo;
