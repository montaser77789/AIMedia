import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/aii-png.png"
import Navbar from "./Navbar";
import LanguageSwitcher from "./language-switcher";

const Header = async () => {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container flex items-center justify-between gap-6 lg:gap-10">
        <Link  href={`/${locale}`}>
          <Image 
          src={logo}
          alt="logo"
          width={100}
          height={100}
          />
        </Link>
        <Navbar translations={translations} />
        <div className="hidden lg:flex lg:items-center lg:gap-6 ">

        <LanguageSwitcher  />
        </div>
      </div>
    </header>
  );
};

export default Header;
