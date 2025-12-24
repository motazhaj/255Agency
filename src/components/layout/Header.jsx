"use client";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { Search, User } from "lucide-react";

import { navMenu1, navMenu2 } from "@/data/data";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`z-[200] w-screen h-24 py-4 fixed backdrop-blur-lg duration-500 ${
        isHomePage || isScrolled ? "  " : "text-primary "
      } ${isScrolled ? "bg-black/50 text-foreground" : " "} `}
    >
      <div className="h-full flex items-center max-w-screen-xl mx-auto">
        <div className="w-full h-full flex items-center justify-between sm:px-6 px-2 gap-2 lg:gap-4">
          <div className="hidden lg:flex items-center flex-1 gap-6">
            <Link
              href="/account"
              className={`p-2 rounded-full border-2 border-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isHomePage || isScrolled
                  ? "hover:bg-white/10 focus:ring-white"
                  : "hover:bg-primary/10 focus:ring-primary"
              }`}
              aria-label="Account"
            >
              <User
                className={`w-6 h-6 ${
                  isHomePage || isScrolled ? "text-white" : "text-primary"
                }`}
              />
            </Link>
            <NavMenu items={navMenu1} isScrolled={isScrolled} spread={false} />
          </div>

          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-1 hover:scale-110 duration-300 px-2 lg:px-4 py-2 focus:outline-none focus:ring-4 focus:ring-primary/50 rounded-lg"
            aria-label="255 Agency Home"
          >
            {isHomePage || isScrolled ? (
              <Image
                src="/255-logo-white.svg"
                alt="255 Agency Logo"
                width={120}
                height={120}
                className={`mx-auto duration-200 ${
                  isScrolled ? "size-[80px] lg:size-[100px]" : "mt-3 size-[100px] lg:size-[130px]"
                }`}
                priority
              />
            ) : (
              <Image
                src="/255-logo-primary.svg"
                alt="255 Agency Logo"
                width={70}
                height={70}
                className={`mx-auto duration-200 ${
                  isScrolled ? "size-[80px] lg:size-[100px]" : "mt-3 size-[100px] lg:size-[130px]"
                }`}
                priority
              />
            )}
          </Link>

          <div className="hidden lg:flex justify-end items-center gap-4 flex-1">
            <NavMenu items={navMenu2} isScrolled={isScrolled} />

            <div className="flex items-center">
              <div className="relative w-56">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="I'am looking for..."
                  className={`w-full px-5 py-2 pr-11 rounded-full border-2 bg-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm ${
                    isHomePage || isScrolled
                      ? "border-white text-white placeholder:text-white/60 focus:ring-white"
                      : "border-primary text-primary placeholder:text-primary/60 focus:ring-primary"
                  }`}
                />
                <Search
                  className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                    isHomePage || isScrolled ? "text-white" : "text-primary"
                  }`}
                />
              </div>
            </div>
          </div>

          <nav className="lg:hidden">
            <MobileMenu
              items={navMenu1.concat(navMenu2)}
              isHomePage={isHomePage}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              isScrolled={isScrolled}
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavMenu = ({ items, isScrolled, spread = false }) => {
  return (
    <nav className={`${spread ? 'w-full' : ''}`} aria-label="Main navigation">
      <ul className={`flex font-bold text-base lg:text-lg ${spread ? 'justify-between w-full' : 'gap-4 lg:gap-6'}`}>
        {items.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href}
              className={`inline-block py-2 px-1 border-b-2 border-transparent transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded ${
                !isScrolled
                  ? "hover:border-background hover:text-background focus:ring-background"
                  : "hover:border-primary hover:text-primary focus:ring-primary"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
