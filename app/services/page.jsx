import BacktoHome from "@/components/layout/BacktoHome";
import Container from "@/components/layout/Container";
import ServiceCard from "@/components/services/ServiceCard";
import React from "react";

const services = [
  {
    title: "Graphic Design",
    description: "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/",
  },
  {
    title: "Marketing",
    description: "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/1",
  },
  {
    title: "Web Development",
    description: "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/2",
  },
  {
    title: "Graphic Design",
    description: "Develop a compelling brand identity that resonates with your audience.",
    image: "https://placehold.co/600x400",
    link: "/3",
  },
];

const page = () => {
  return (
    <Container>
      <BacktoHome />
      <section className="bg-background z-50 shadow-lg min-h-[800px] w-full rounded-xl flex flex-col mt-24 p-8">
        <h2 className="text-2xl font-bold text-primary mb-2">What we do at 255!</h2>
        <p className="text-foreground max-w-prose mb-12">
          At 255, we help businesses grow by providing top-notch advertising solutions. Here's a
          glimpse of what we offer:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service) => (
            <ServiceCard {...service} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default page;
