import { servicesData } from "@/data/data";
import Link from "next/link";
import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="flex flex-col gap-8 scroll-mt-24">
      <h2 className="text-[70px] max-h-[110px] overflow-hidden flex items-center bg-background/30 text-foreground animate-pulse min-w-[3000px] tracking-[.25em]">
        E-SERVICES-SERVICES-SERVICES-SERVICES-SERVICES
      </h2>
      <ul>
        {servicesData.map((item, index) => (
          <li key={index}>
            <ServiceItem title={item.title} link={"/services/" + item.slug} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const ServiceItem = ({ title, link }) => {
  return (
    <Link href={link} className="relative group">
      <h3 className="text-8xl tracking-wider w-full text-center">{title}</h3>
      <p className="absolute opacity-0 group-hover:opacity-100 duration-200 text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5000px] text-center bg-black/70 text-foreground tracking-wider ">
        View {title} - View {title} - View {title} - View {title} - View {title}{" "}
        - View {title}
      </p>
    </Link>
  );
};

export default ServicesSection;
