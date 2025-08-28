"use client";

import Link from "next/link";
import { Grechen_Fuemen } from "next/font/google";
import { usePathname } from "next/navigation";

const grechen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: "400",
});

import ModeToggle from "./mode-toggle";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  return (
    <Disclosure as="nav" className="relative md:grid md:place-items-center px-6 py-4 border-b shadow-sm bg-background text-foreground" style={{ height: "10vh" }}>
      <div className="px-2 w-full sm:px-2 lg:px-4">
        <div className="relative flex h-8 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-2 focus:-outline-offset-1 focus:outline-blue-600 dark:focus:outline-blue-400">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href={"/"} className={`${grechen.className} font-bold text-3xl hover:text-blue-600 dark:hover:text-blue-400`}>
                RUDI HADI
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 pr-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={classNames(isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-600 dark:text-gray-300", "font-semibold rounded-md px-3 py-2 text-xl hover:text-blue-600 dark:hover:text-blue-400")}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <ModeToggle />
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 mt-2 rounded-md border-2 border-solid bg-white dark:bg-black">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={classNames(isActive ? "text-blue-600 dark:text-blue-400" : "", "block rounded-md px-3 py-2 text-base font-medium hover:text-blue-600 dark:hover:text-blue-400")}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
