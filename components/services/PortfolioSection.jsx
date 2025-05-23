import React from "react";
import Container from "../layout/Container";
import PortfolioItemCard from "./PortfolioItemCard";
import LinkButtonFill from "../buttons/LinkButtonFill";
import { FaArrowCircleRight } from "react-icons/fa";
import FadeIn from "../animations/FadeIn";
import FadeInBottom from "../animations/FadeInBottom";
import FadeInRight from "../animations/FadeInRight";
import FadeInLeft from "../animations/FadeInLeft";

const portfolioItems = [
  {
    img: "/portfolio/01.png",
    title: "Grand Nablus Bus CO.",
    link: "grand-nablus-bus-co",
  },
  {
    img: "/portfolio/02.png",
    title: "Chicken Crush",
    link: "chicken-crush",
  },
  {
    img: "/portfolio/03.png",
    title: "Hulk Burger",
    link: "hulk-burger",
  },
  {
    img: "/portfolio/04.png",
    title: "Akko Group",
    link: "akko-group",
  },
];

const PortfolioSection = () => {
  return (
    <section className="flex flex-col gap-8">
      <FadeIn>
        <h2 className="text-4xl md:text-[70px] max-h-[110px] overflow-hidden flex items-center bg-background/30 -mt-12 animate-pulse min-w-[3000px] tracking-[.25em]">
          O-PORTFOLIO-PORTFOLIO-PORTFOLIO-PORTFOLIO
        </h2>
      </FadeIn>
      <Container className={"mb-32"}>
        <FadeInBottom>
          <ul className="flex flex-wrap gap-8 justify-center">
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
        </FadeInBottom>
        <FadeInRight>
          <p className="text-center text-xl my-10">See our full Portfolio!</p>
        </FadeInRight>
        <FadeInLeft>
          <LinkButtonFill href="/portfolio" className={"w-fit mx-auto"}>
            View Portfolio
            <FaArrowCircleRight size={24} className="ml-2" />
          </LinkButtonFill>
        </FadeInLeft>
      </Container>
    </section>
  );
};

export default PortfolioSection;
