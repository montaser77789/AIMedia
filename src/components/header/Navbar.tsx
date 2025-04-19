"use client";
import React, { useState } from "react";
import { Routes } from "../constants/enum";
import { Translations } from "@/types/Translationx";
import { useParams, usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Menu, XIcon } from "lucide-react";
import LanguageSwitcher from "./language-switcher";
import Link from "../link/Link";

const Navbar = ({ translations }: { translations: Translations }) => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const { locale } = useParams();

  const links = [
    {
      id: crypto.randomUUID(),
      title: translations.navbar.home,
      href: Routes.HOME,
    },
    {
      id: crypto.randomUUID(),
      title: translations.navbar.services,
      href: Routes.SERVICES,
    },

    {
      id: crypto.randomUUID(),
      title: translations.navbar.protofolio,
      href: Routes.PORTFOLIO,
    },
    {
      id: crypto.randomUUID(),
      title: translations.navbar.blog,
      href: Routes.BLOG,
    },
    {
      id: crypto.randomUUID(),
      title: translations.navbar.contact,
      href: Routes.CONTACT,
    },
    {
      id: crypto.randomUUID(),
      title: translations.navbar.socialmedia,
      href: Routes.SOCIALMEDIA,
    },
  ];

  return (
    <nav>
      <Button
        variant="secondary"
        size="sm"
        className="lg:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="!w-6 !h-6" />
      </Button>
      <ul
  className={`fixed lg:static ${
    openMenu ? "top-0 z-50 !h-3/4" : "-top-full"
  } left-0 z-50 px-10 py-20 lg:p-0 bg-black md:bg-none transition-all duration-200 w-full lg:w-auto flex-col lg:flex-row flex items-center justify-center gap-10`}
>
        {/* Close button */}
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-4 right-4 lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6" />
        </Button>

        {/* Menu links */}
        {links.map((link) => (
          <li key={link.id}>
            <Link
              onClick={() => setOpenMenu(false)} // Close menu after clicking
              className={`font-semibold hover:text-primary duration-200 transition-colors ${
                pathname === `/${locale}/${link.href}`
                  ? "text-primary"
                  : "text-white"
              }`}
              href={`/${locale}/${link.href}`}
            >
              {link.title}
            </Link>
          </li>
        ))}

        {/* Language switcher only in mobile view */}
        <li className="lg:hidden flex flex-col gap-4">
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
