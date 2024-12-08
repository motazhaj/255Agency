import React from "react";

const ServiceCard = ({ title, description, image, link }) => {
  return (
    <div className="group w-full mx-auto bg-foreground rounded-3xl overflow-hidden shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out">
      <div className="flex flex-col md:flex-row items-center gap-8 p-6">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition duration-500 ease-in-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-primary leading-tight transform transition-all duration-300 group-hover:translate-y-[-5px]">
            {title}
          </h3>
          <p className="text-lg text-background opacity-80 group-hover:opacity-100 transform transition-opacity duration-500">
            {description}
          </p>

          <a
            href={link}
            className="inline-block font-bold px-8 py-4 bg-primary text-background rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl hover:bg-secondary hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
