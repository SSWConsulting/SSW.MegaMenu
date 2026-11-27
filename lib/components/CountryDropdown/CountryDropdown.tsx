"use client";
import { Popover, Transition } from "@headlessui/react";
import type { ClassValue } from "clsx";
import { Fragment, useEffect, useState } from "react";
import { useLinkComponent } from "../../hooks/useLinkComponent";
import { Countries } from "../../types/country";
import { cx } from "../../util/cx";
import { Flag } from "../Flag";

// Absolute on purpose: the dropdown hides the current country, so these links
// only ever take a visitor to another country's site.
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

const bareHost = (hostname: string) => hostname.replace(/^www\./, "");

// The country whose site `url` belongs to, e.g. "https://www.ssw.fr" → France.
const countryForUrl = (url?: string): Countries | undefined => {
  try {
    const hostname = bareHost(new URL(url || websites[0].url).hostname);
    return websites.find((w) =>
      hostname.endsWith(bareHost(new URL(w.url).hostname)),
    )?.country;
  } catch {
    return undefined;
  }
};

type CountryDropdownProps = {
  url?: string;
  className?: ClassValue;
};

const CountryDropdown = ({ url, className }: CountryDropdownProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentCountry, setCurrentCountry] = useState<Countries>("Australia");

  const CustomLink = useLinkComponent();

  useEffect(() => {
    const country = countryForUrl(url);
    if (country) {
      setCurrentCountry(country);
    }
  }, [url]);

  return (
    <Popover className={cx(className)}>
      <Popover.Button
        className={cx(
          "flex items-center justify-center gap-x-1 rounded-md px-4 py-1 text-sm font-semibold text-foreground outline-none xl:pr-0",
          "hover:scale-105",
        )}
        onClick={() => setIsOpened(!isOpened)}
        aria-label={`Change country site, current: ${currentCountry}`}
      >
        <Flag country={currentCountry} alt="" />
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
        <Popover.Panel className="absolute z-10 mt-2 border bg-white px-4 text-center shadow-md">
          {websites
            .filter((w) => w.country !== currentCountry)
            .map((country) => (
              <CustomLink
                key={country.country}
                className="block min-w-[35px] py-2 hover:scale-105"
                href={country.url}
                title={country.country}
              >
                <Flag
                  country={country.country}
                  alt={`SSW ${country.country}`}
                />
              </CustomLink>
            ))}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default CountryDropdown;
