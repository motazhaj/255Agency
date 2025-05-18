import LinkButtonFill from "@/components/buttons/LinkButtonFill";
import Container from "@/components/layout/Container";
import PortfolioItemCard from "@/components/services/PortfolioItemCard";
import React from "react";
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

const PortfolioPage = () => {
  return (
    <section className="flex flex-col gap-8 pt-32 bg-foreground text-primary">
      <Container className={"mb-32"}>
        <ul className="flex gap-8 flex-wrap justify-center">
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
      </Container>
    </section>
  );
};

export default PortfolioPage;
