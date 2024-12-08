import CallToAction from "@/components/CallToAction";
import PageOverlayed from "@/components/layout/PageOverlayed";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/services/ServiceCard";
import React from "react";

const services = [
  {
    title: "Graphic Design",
    description: "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/services/design",
  },
  {
    title: "Marketing",
    description: "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/services/design",
  },
  {
    title: "Web Development",
    description: "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/services/design",
  },
  {
    title: "Graphic Design",
    description: "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/services/design",
  },
  {
    title: "Graphic Design",
    description: "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/services/design",
  },
];

const page = () => {
  return (
    <PageOverlayed title="Services" image="https://placehold.co/600x400">
      <PageHeader
        text="Our Services!"
        subtext="At 255, we help businesses grow by providing top-notch advertising solutions. Here's a glimpse of what we offer:"
      />

      <ul className="flex flex-col gap-8 w-full">
        {services.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </ul>
      <CallToAction />
    </PageOverlayed>
  );
};

export default page;
