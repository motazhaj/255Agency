import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export const navMenu1 = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
];

export const navMenu2 = [
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];
const Navbar = () => {
  return (
    <header className="z-50 w-full h-20 py-4 fixed backdrop-blur-lg">
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
        <li key={item.name} className="hover:text-background hover:scale-110 duration-200 border-b-2 border-transparent hover:border-background">
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
