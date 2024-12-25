import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export const navMenu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "Media",
    href: "/blog",
  },
];

const Navbar = () => {
  return (
    <header className="z-50 w-full h-20 py-4 fixed">
      <div className={"h-[70px] flex items-center"}>
        <div className="w-full flex items-center justify-between sm:px-6 px-2">
          <Link
            href="/"
            className="flex items-center gap-1 hover:scale-110 duration-300 drop-shadow-[0_0_4px_black] px-4 py-2"
          >
            <Image
              src="/255-logo-white.svg"
              alt="logo"
              width={70}
              height={70}
              className="sm:size-[70px] size-[60px]"
            />
            <h1 className="text-xl sm:text-3xl font-bold">255 Agency</h1>
          </Link>
          <nav>
            <MobileMenu />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
