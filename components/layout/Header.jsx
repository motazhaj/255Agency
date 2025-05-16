"use client";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

import { navMenu1, navMenu2 } from "@/data/data";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`z-50 w-full h-24 py-4 fixed backdrop-blur-lg duration-500 ${
        isScrolled ? "bg-black/70" : ""
      }`}
    >
      <div className={"h-[70px] flex items-center max-w-screen-xl mx-auto"}>
        <div className="w-full flex items-center justify-between sm:px-6 px-2">
          <NavMenu items={navMenu1} />

          <Link
            href="/"
            className="w-2/6 flex items-center gap-1 hover:scale-110 duration-300 px-4 py-2"
          >
            <Image
              src="/255-logo-white.svg"
              alt="logo"
              width={70}
              height={70}
              className="size-[100px] mx-auto"
            />
          </Link>

          <NavMenu items={navMenu2} />
          <nav className="md:hidden">
            <MobileMenu items={navMenu1.concat(navMenu2)} />
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavMenu = ({ items }) => {
  return (
    <ul className="w-2/6 justify-between hidden font-bold md:flex text-lg">
      {items.map((item) => (
        <li
          key={item.name}
          className="hover:text-background hover:scale-110 duration-200 border-b-2 border-transparent hover:border-background"
        >
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
