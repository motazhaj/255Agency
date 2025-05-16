import Link from "next/link";
import React from "react";

const LinkButtonFill = ({ href, children, blank, className }) => {
  return (
    <Link
      href={href}
      {...(blank ? { target: "_blank" } : {})}
      className={
        className +
        " px-6 py-3 flex gap-4 justify-center text-xl font-bold items-center rounded-xl text-foreground bg-background transition drop-shadow-md hover:scale-105 hover:bg-transparent/20"
      }
    >
      {children}
    </Link>
  );
};

export default LinkButtonFill;
