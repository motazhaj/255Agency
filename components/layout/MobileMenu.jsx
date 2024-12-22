"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

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
        className="text-primary bg-foreground hover:bg-secondary duration-300 drop-shadow-xl rounded-full size-16 flex justify-center items-center focus:outline-none"
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
            d="M4 6h16M4 12h16M4 18h16"
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
        <motion.div
          className="absolute top-0 z-50 w-5/6 right-0 max-w-screen-sm h-[100svh] bg-background"
          initial={{ x: "100%" }}
          animate={isMenuOpen ? { x: 0 } : { x: "100%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex w-[90%] justify-between items-center m-[5%] pb-8 border-b-2 border-primary">
            <h2 className="text-4xl font-bold">Navigation Menu</h2>

            <button
              className="text-primary bg-foreground rounded-full hover:bg-secondary duration-300 size-16 flex justify-center items-center focus:outline-none"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav>
            <ul className="flex flex-col items-center gap-8 py-16">
              {menu.map((item) => (
                <li key={item.name} className=" w-5/6 text-center py-2">
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center w-full justify-between hover:w-[105%] duration-200 text-foreground hover:text-primary"
                  >
                    <p className=" text-xl font-bold duration-300">{item.name}</p>
                    <FaArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </>
  );
};

export default MobileMenu;
