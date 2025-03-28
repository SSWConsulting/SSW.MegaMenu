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
    url: "https://www.ssw.cn",
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
      const { hostname } = new URL(url || "https://www.ssw.com.au");

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
          "flex items-center justify-center gap-x-1 rounded-md px-1 py-1 text-sm font-semibold text-ssw-black outline-none xs:px-4",
          "hover:scale-105",
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
                className="block min-w-[80px] py-2 hover:scale-105"
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
