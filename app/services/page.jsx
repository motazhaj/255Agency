import BacktoHome from "@/components/layout/BacktoHome";
import Container from "@/components/layout/Container";
import ServiceCard from "@/components/services/ServiceCard";
import React from "react";

const services = [
  {
    title: "Graphic Design",
    description:
      "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/",
  },
  {
    title: "Marketing",
    description:
      "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/1",
  },
  {
    title: "Web Development",
    description:
      "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/2",
  },
  {
    title: "Graphic Design",
    description:
      "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/3",
  },
  {
    title: "Graphic Design",
    description:
      "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/3",
  },
  {
    title: "Graphic Design",
    description:
      "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/3",
  },
  {
    title: "Graphic Design",
    description:
      "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/3",
  },
  {
    title: "Graphic Design",
    description:
      "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/3",
  },
];

const page = () => {
  return (
    <div className="to-primary/80 from-orange-100 bg-gradient-to-b rounded-[40px] mt-32 mb-24">
      <BacktoHome />
      <section className="z-50 min-h-[800px] max-w-screen-xl mx-auto flex flex-col mt-24 py-12 gap-4 px-8">
        <div className="w-full border-b-2 border-primary pb-2 mb-2">
          <h2 className="text-2xl font-bold text-background mb-2">
            What we do at 255!
          </h2>
          <p className="text-background font-bold">
            At 255, we help businesses grow by providing top-notch advertising
            solutions. Here's a glimpse of what we offer:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service) => (
            <ServiceCard {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
