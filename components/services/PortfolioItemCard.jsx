import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const PortfolioItemCard = ({ img, title, link, textStyle }) => {
  return (
    <div className="hover:scale-105 duration-200 max-w-[400px]">
      <Link href={`/portfolio/${link}`}>
        <Image
          src={img}
          alt="logo"
          width={350}
          height={350}
          className="w-full h-[350px] object-cover drop-shadow-xl"
        />
        <div className="flex w-full justify-between items-center my-4">
          <h3 className={`text-xl font-bold ${textStyle}`}>{title}</h3>
          <FaArrowCircleRight size={24} />
        </div>
      </Link>
    </div>
  );
};

export default PortfolioItemCard;
