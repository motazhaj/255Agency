import Link from "next/link";
import React from "react";

const ServiceCard = ({ title, description, image, link = "#" }) => {
  return (
    <Link href={link} className="bg-primary shadow-xl rounded-lg overflow-hidden hover:scale-105 duration-300">
      <div className="rounded-full w-full">
        <img className="w-full" src={image} alt={title} />
      </div>
      <div className="px-6 pt-4 pb-8 flex flex-col">
        <h3 className="text-xl font-bold text-background mb-2">{title}</h3>
        <p className="text-foreground font-semibold">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
