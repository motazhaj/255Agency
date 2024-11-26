import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

const menu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/Services",
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
    <header className="z-50 w-full h-20 p-4">
      <Container className={"backdrop-blur-xl bg-background/60 h-[70px] rounded-xl flex items-center"}>
        <div className="w-full flex items-center justify-between px-8">
          <Link href="/" className="flex items-center gap-4 -ml-16 hover:scale-110 duration-300">
            <Image src="/255-logo.svg" alt="logo" width={80} height={80} className="drop-shadow-lg" />
            <h1 className="text-xl font-bold drop-shadow-lg">255 Agency</h1>
          </Link>
          <nav>
            <ul className="gap-8 hidden md:flex">
              {menu.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <p className="hover:text-primary hover:scale-110 font-bold duration-300">{item.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
