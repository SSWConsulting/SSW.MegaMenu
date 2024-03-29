import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { MegaIcon } from "../MegaIcon";

export interface SearchProps {
  url?: string;
  callback?: (searchTerm: string) => void;
}

export const Search: React.FC<SearchProps> = ({ url, callback }) => {
  const searchRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  useEffect(() => {
    if (isOpen && searchRef?.current) {
      const searchInput: HTMLElement = searchRef?.current;
      searchInput?.focus();
    }
  }, [isOpen]);

  const performSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm) {
      if (callback) {
        callback(searchTerm);
      } else {
        const searchUrl = `https://www.google.com.au/search?q=site:${url}%20${encodeURIComponent(
          searchTerm,
        )}`;
        window.open(searchUrl, "_blank");
      }
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <>
      <button
        className="rounded p-4 text-ssw-black hover:bg-gray-100"
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
                <div className="relative">
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
                      ref={searchRef}
                      type="text"
                      className="h-12 grow border-0 bg-transparent pl-11 text-ssw-black focus:ring-0 sm:text-sm"
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
