import Link from "next/link";
import React from "react";

const services = [
  {
    title: "SOCIAL MEDIA",
    link: "/social-media",
  },
  {
    title: "VIDEO PRODUCTION",
    link: "/video-production",
  },
  {
    title: "PHOTOGRAPHY",
    link: "/photography",
  },

  {
    title: "MARKETING",
    link: "/marketing-campaigns",
  },
  {
    title: "Printables",
    link: "/printables",
  },
  {
    title: "Events",
    link: "/events",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="flex flex-col gap-8 scroll-mt-24">
      <h2 className="text-[90px] max-h-[110px] overflow-hidden flex items-center bg-background/30 animate-pulse min-w-[3000px] tracking-[.25em]">
        E-SERVICES-SERVICES-SERVICES-SERVIC ES-SERVICES
      </h2>
      <ul>
        {services.map((item, index) => (
          <li key={index}>
            <ServiceItem title={item.title} link={"/services" + item.link} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const ServiceItem = ({ title, link }) => {
  return (
    <Link href={link} className="relative group">
      <h3 className="text-9xl tracking-wider w-full text-center">{title}</h3>
      <p className="absolute opacity-0 group-hover:opacity-100 duration-200 text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[5000px] text-center bg-black/70 tracking-wider ">
        View {title} - View {title} - View {title} - View {title} - View {title}{" "}
        - View {title}
      </p>
    </Link>
  );
};

export default ServicesSection;
