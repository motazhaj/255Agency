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
      <Container>
        <div
          className={
            "backdrop-blur-xl bg-background/60 h-[70px] rounded-full flex items-center"
          }
        >
          <div className="w-full flex items-center justify-between pl-6 pr-14">
            <Link
              href="/"
              className="flex items-center gap-1 hover:scale-110 duration-300"
            >
              <Image
                src="/255-logo.svg"
                alt="logo"
                width={70}
                height={70}
                className="drop-shadow-lg size-[70px]"
              />
              <h1 className="text-xl font-bold drop-shadow-lg">255 Agency</h1>
            </Link>
            <nav>
              <ul className="gap-8 hidden md:flex">
                {navMenu.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <p className="hover:text-primary hover:scale-110 font-bold duration-300">
                        {item.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
