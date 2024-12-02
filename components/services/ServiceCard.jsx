import Link from "next/link";
import React from "react";

const ServiceCard = ({ title, description, image, link = "#" }) => {
  return (
    <Link href={link} className="bg-background shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300">
      <div className="rounded-full w-full">
        <img src={image} alt={title} />
      </div>
      <div className="px-6 pt-4 pb-8 flex flex-col">
        <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
        <p className="text-foreground">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
