import React from "react";
import Container from "../layout/Container";
import PortfolioItemCard from "./PortfolioItemCard";
import LinkButtonFill from "../buttons/LinkButtonFill";
import { FaArrowCircleRight } from "react-icons/fa";

const portfolioItems = [
  {
    img: "/designs/portfolio1.png",
    title: "Grand Nablus Bus CO.",
    link: "grand-nablus-bus-co",
  },
  {
    img: "/designs/portfolio1.png",
    title: "Grand Nablus Bus CO.",
    link: "grand-nablus-bus-co",
  },
  {
    img: "/designs/portfolio1.png",
    title: "Grand Nablus Bus CO.",
    link: "grand-nablus-bus-co",
  },
  {
    img: "/designs/portfolio1.png",
    title: "Grand Nablus Bus CO.",
    link: "grand-nablus-bus-co",
  },
];

const PortfolioSection = () => {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-[70px] max-h-[110px] overflow-hidden flex items-center bg-background/30 -mt-12 animate-pulse min-w-[3000px] tracking-[.25em]">
        O-PORTFOLIO-PORTFOLIO-PORTFOLIO-PORT FOLIO
      </h2>
      <Container className={"mb-32"}>
        <ul className="flex gap-8 justify-center">
          {portfolioItems.map((item, index) => (
            <li key={index}>
              <PortfolioItemCard
                img={item.img}
                title={item.title}
                link={item.link}
              />
            </li>
          ))}
        </ul>

        <p className="text-center text-xl my-10">See our full Portfolio!</p>
        <LinkButtonFill href="/portfolio" className={"w-fit mx-auto"}>
          View Portfolio
          <FaArrowCircleRight size={24} className="ml-2" />
        </LinkButtonFill>
      </Container>
    </section>
  );
};

export default PortfolioSection;
