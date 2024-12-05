import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { navMenu } from "./Header";

const Footer = () => {
  return (
    <footer className="w-full z-10 py-4">
      <Container className="flex">
        <div className="bg-primary/60 p-12 backdrop-blur-xl rounded-[40px] min-h-[200px]">
          <div className="w-full flex items-start justify-between">
            <div className="w-2/3 h-full flex flex-col gap-4 justify-start">
              <Link
                href="/"
                className="flex items-center gap-1 w-fit hover:scale-110 duration-300"
              >
                <Image
                  src="/255-logo-white.svg"
                  alt="logo"
                  width={70}
                  height={70}
                  className="size-[70px]"
                />
                <h1 className="text-xl font-bold drop-shadow-lg">255 Agency</h1>
              </Link>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
                repudiandae aut tenetur mollitia pariatur magni qui maxime quisquam ullam
                incidunt sapiente beatae ab numquam in, velit dolores officia illo omnis.
              </p>
            </div>
            <nav className="w-1/3 ml-4 lg:ml-32">
              <ul className="gap-4 flex flex-col">
                {navMenu.map((item) => (
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
