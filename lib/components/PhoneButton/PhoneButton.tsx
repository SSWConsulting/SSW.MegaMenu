import { isMobile } from "react-device-detect";
// Fix for Next.js as per https://github.com/react-icons/react-icons/issues/821#issuecomment-1747679972
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa/index.js";
import { useLinkComponent } from "../../hooks/useLinkComponent";
import { cx } from "../../util/cx";

type PhoneButtonProps = {
  className?: string;
  isMobileProp?: boolean;
};

export const PhoneButton = ({ className }: PhoneButtonProps) => {
  const CustomLink = useLinkComponent();

  const [url, setUrl] = useState("https://www.ssw.com.au/company/contact-us");
  const [text, setText] = useState("CONTACT US");

  useEffect(() => {
    if (typeof window !== "undefined" && isMobile) {
      setUrl("tel:+61299533000");
      setText("CALL US");
    }
  }, []);

  return (
    <div
      className={cx(className, "flex flex-grow flex-wrap gap-2 sm:flex-grow-0")}
    >
      <CustomLink
        href={url}
        className={cx(
          "flex h-12 w-full shrink-0 cursor-pointer items-center justify-center rounded-lg bg-ssw-red px-5 text-xl hover:opacity-70 max-sm:my-5 sm:w-fit",
        )}
      >
        <FaPhoneAlt color="white" className="text-2xl" />
        <span className="ml-2 inline text-sm font-bold text-white">{text}</span>
      </CustomLink>
    </div>
  );
};
