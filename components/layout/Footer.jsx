import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { navMenu1, navMenu2 } from "@/data/data";

const Footer = () => {
  return (
    <footer className="w-full mt-12 z-10 py-4 bg-primary">
      <Container className="flex">
        <div className="p-12 min-h-[200px] w-full flex flex-col">
          <div className="w-full flex items-start justify-between">
            <div className="w-2/3 h-full flex flex-col gap-4 justify-start">
              <Link
                href="/"
                className="flex items-center gap-2 w-fit hover:scale-110 duration-300"
              >
                <Image
                  src="/255-logo-white.svg"
                  alt="logo"
                  width={70}
                  height={70}
                  className="size-[70px]"
                />
                <h1 className="text-xl font-bold drop-shadow-lg"> Agency</h1>
              </Link>
              <p>
                Our website is a gateway into a bold creative universe where
                design meets technology
              </p>
            </div>
            <nav className="w-1/3 ml-4 lg:ml-32 flex gap-24">
              <ul className="gap-4 flex flex-col">
                {navMenu1.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <p className="hover:text-secondary hover:scale-110 font-bold duration-300 w-fit">
                        {item.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="gap-4 flex flex-col">
                {navMenu2.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <p className="hover:text-secondary hover:scale-110 font-bold duration-300 w-fit">
                        {item.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="text-center border-t mt-8 pt-4">
            <p>© {new Date().getFullYear()} 255 Agency. All rights reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
