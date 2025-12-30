import React from "react";
import Container from "../layout/Container";
import PortfolioCarousel from "../PortfolioCarousel";
import LinkButtonFill from "../buttons/LinkButtonFill";
import { ArrowRightCircle } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import FadeInRight from "../animations/FadeInRight";
import FadeInLeft from "../animations/FadeInLeft";

const PortfolioSection = () => {
  return (
    <section className="flex flex-col gap-8" aria-labelledby="portfolio-heading">
      <FadeIn>
        <div className="overflow-hidden bg-background/30 -mt-12">
          <h2 id="portfolio-heading" className="sr-only">Our Portfolio</h2>
          <div className="text-4xl md:text-5xl lg:text-[70px] h-[80px] md:h-[100px] flex items-center text-foreground tracking-[.15em] md:tracking-[.25em] whitespace-nowrap" aria-hidden="true">
            <span className="inline-block animate-marquee">
              PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO
            </span>
          </div>
        </div>
      </FadeIn>
      <div className="w-full mb-16 md:mb-20">
        <PortfolioCarousel />
        <Container>
          <FadeInRight>
            <p className="text-center text-lg md:text-xl mt-6 mb-4 text-foreground/95">See our full Portfolio!</p>
          </FadeInRight>
          <FadeInLeft>
            <LinkButtonFill href="/portfolio" className={"w-full sm:w-auto mx-auto"}>
              View Portfolio
              <ArrowRightCircle size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </LinkButtonFill>
          </FadeInLeft>
        </Container>
      </div>
    </section>
  );
};

export default PortfolioSection;
