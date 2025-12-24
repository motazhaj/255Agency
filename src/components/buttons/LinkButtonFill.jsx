import Link from "next/link";
import React from "react";

const LinkButtonFill = ({ href, children, blank, className }) => {
  return (
    <Link
      href={href}
      {...(blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={
        className +
        " px-6 py-3 flex gap-4 justify-center text-base md:text-xl font-bold items-center rounded-xl text-foreground bg-background transition-all duration-300 drop-shadow-md hover:scale-105 hover:bg-background/80 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:scale-105 active:scale-95"
      }
    >
      {children}
    </Link>
  );
};

export default LinkButtonFill;
