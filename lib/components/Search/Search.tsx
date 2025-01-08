import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { MegaIcon } from "../MegaIcon";

export interface SearchTermProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  performSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Search: React.FC<SearchTermProps> = ({
  searchTerm,
  performSearch,
  setSearchTerm,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchRef = useRef(null);
  useEffect(() => {
    if (isOpen && searchRef?.current) {
      const searchInput: HTMLElement = searchRef?.current;
      searchInput?.focus();
    }
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    performSearch(e);
    setIsOpen(false);
    setSearchTerm("");
  };

  useHotkeys(
    "mod+k",
    () => {
      if (!isOpen) {
        setIsOpen(true);
      }
    },
    [isOpen],
    { preventDefault: true },
  );

  return (
    <>
      <button
        className="rounded p-3 text-ssw-black hover:text-ssw-red"
        onClick={() => setIsOpen(true)}
      >
        <MegaIcon icon="magnifyingGlass" className="h-5 w-5" />
      </button>
      <Transition.Root show={isOpen} as={Fragment} appear>
        <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500/50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto p-8 sm:p-12 md:p-28">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto max-w-2xl divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white/80 shadow-2xl backdrop-blur transition-all">
                <SearchInput
                  setSearchTerm={setSearchTerm}
                  searchTerm={searchTerm}
                  performSearch={handleSearch}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

interface SearchInputProps extends SearchTermProps {
  className?: string | undefined;
  inputClassName?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  className,
  performSearch,
  searchTerm,
  setSearchTerm,
  inputClassName,
}) => {
  return (
    <div className={className ?? "relative"}>
      <MegaIcon
        icon="magnifyingGlass"
        className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-ssw-black text-opacity-40"
        aria-hidden="true"
      />
      <form
        className="isolate inline-flex w-full rounded-md shadow-sm"
        onSubmit={(e) => performSearch(e)}
      >
        <input
          type="text"
          className={
            inputClassName ??
            "h-12 grow rounded-l-md border bg-transparent pl-11 text-ssw-black focus:ring-0 sm:text-sm"
          }
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <button
          type="submit"
          className="relative -ml-px inline-flex items-center rounded-r-md bg-ssw-red px-3 py-2 text-sm font-semibold text-white hover:bg-ssw-light-red focus:z-10"
        >
          Search
        </button>
      </form>
    </div>
  );
};
