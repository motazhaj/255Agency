import React from "react";
import Container from "../layout/Container";
import Image from "next/image";

const featuredWorks = [
  {
    title: "Social Media",
    images: [
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
    ],
  },
  {
    title: "Reels",
    images: [
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
    ],
  },
  {
    title: "Marketing",
    images: [
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
    ],
  },
  {
    title: "Printables",
    images: [
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
    ],
  },
  {
    title: "Branding",
    images: [
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
      "/featured-works/featured1.jpg",
    ],
  },
];

const FeaturedWorks = () => {
  return (
    <section>
      <Container>
        <h3 className="text-5xl font-bold">Featrued Works</h3>
        {featuredWorks.map((item, index) => (
          <FeaturedWorkCard key={index} {...item} />
        ))}
      </Container>
    </section>
  );
};

const FeaturedWorkCard = ({ title, images }) => {
  return (
    <div className="flex flex-col gap-4 my-6 bg-white p-4 w-full rounded-xl">
      <h3 className="text-5xl font-bold text-primary">{title}</h3>
      <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {images.map((item, index) => (
          <li key={index}>
            <Image
              className="rounded-lg drop-shadow-lg h-[250px] w-full object-cover"
              src={item}
              alt=""
              width={250}
              height={250}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedWorks;
