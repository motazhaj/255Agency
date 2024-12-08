import Link from "next/link";
import React from "react";

const LinkButtonFill = ({ href, children, blank }) => {
  return (
    <Link
      href={href}
      {...(blank ? { target: "_blank" } : {})}
      className="px-8 py-4 flex gap-4 justify-center text-xl font-bold items-center rounded-xl text-slate-800 bg-gradient-to-t from-primary to-orange-500 transition drop-shadow-md hover:scale-105 hover:from-secondary hover:to-yellow-300"
    >
      {children}
    </Link>
  );
};

export default LinkButtonFill;
