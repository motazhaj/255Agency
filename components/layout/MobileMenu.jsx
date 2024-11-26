"use client";

import { useState } from "react";
import Link from "next/link";

const menu = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Media", href: "/blog" },
];

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className="text-primary focus:outline-none md:hidden mr-4"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div className="overflow-hidden">
        {isMenuOpen && (
          <div
            className="absolute h-[85svh] w-[90svw] top-[80px] -left-10 bottom-0 right-0"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
        <div
          className={`absolute top-[80px] z-50 w-5/6 opacity-[${
            isMenuOpen ? "100" : "0"
          }] duration-200 right-0 h-[85svh] bg-background rounded-xl`}
        >
          <nav>
            <ul className="flex flex-col items-center gap-8 py-16">
              {menu.map((item) => (
                <li
                  key={item.name}
                  className="border-b-2 border-primary w-5/6 text-center py-2"
                >
                  <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                    <p className="text-foreground hover:text-primary font-bold duration-300">
                      {item.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
