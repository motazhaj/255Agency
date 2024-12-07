import React from "react";
import BacktoHome from "./BacktoHome";

const PageOverlayed = ({ children }) => {
  return (
    <div className="bg-background rounded-[40px] mt-32 mb-4">
      <BacktoHome />
      <section className="z-50 min-h-[800px] max-w-screen-xl mx-auto flex flex-col mt-24 py-12 gap-4 px-8 ">
        {children}
      </section>
    </div>
  );
};

export default PageOverlayed;
