"use client";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useLinkComponent } from "../../hooks/useLinkComponent";
import { Countries } from "../../types/country";
import { cx } from "../../util/cx";
import { Flag } from "../Flag";

const websites: { country: Countries; url: string }[] = [
  {
    country: "Australia",
    url: "https://www.ssw.com.au",
  },
  {
    country: "China",
    url: "https://www.ssw.com.cn",
  },
  {
    country: "France",
    url: "https://www.ssw.fr",
  },
] as const;

type CountryDropdownProps = {
  url?: string;
};

const CountryDropdown = ({ url }: CountryDropdownProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentCountry, setCurrentCountry] = useState<Countries>("Australia");

  const CustomLink = useLinkComponent();

  useEffect(() => {
    try {
      const { hostname } = new URL(url || "");

      const website = websites.find((w) => hostname?.endsWith(w.url));
      if (website) {
        setCurrentCountry(website.country);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }, [url]);

  return (
    <Popover>
      <Popover.Button
        className={cx(
          "flex items-center justify-center gap-x-1 rounded-md px-4 py-1 text-sm font-semibold text-ssw-black outline-none",
          "hover:bg-gray-100",
          isOpened && "bg-gray-100",
        )}
        onClick={() => setIsOpened(!isOpened)}
      >
        <Flag country={currentCountry} />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute z-10 bg-white text-center shadow-md shadow-gray-400">
          {websites
            .filter((w) => w.country !== currentCountry)
            .map((country) => (
              <CustomLink
                key={country.country}
                className="block py-2 hover:bg-gray-100 lg:min-w-[80px]"
                href={country.url}
                title={country.country}
              >
                <Flag country={country.country} />
              </CustomLink>
            ))}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default CountryDropdown;
