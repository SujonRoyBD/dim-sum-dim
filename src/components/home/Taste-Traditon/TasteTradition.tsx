"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type CardProps = {
  img: string;
  title: string;
  description: string;
};

const HoverImageCard = ({ img, title, description }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-[300px] overflow-hidden rounded-lg relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={img}
        alt={title}
        fill
        className="w-full h-full object-cover rounded-lg"
      />

      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-black bg-opacity-50 text-white p-4 flex items-start justify-start transform transition-transform duration-500 ease-in-out ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex gap-9 justify-between h-full">
          <div>
            <p className="text-xl font-medium">{title}</p>
            <p className="opacity-50 text-sm mt-1">{description}</p>
          </div>
          <div className="mt-2">
            <button className="border-2 border-white rounded-lg px-3 py-1 flex items-center gap-2">
              View Details <FaArrowRight className="mt-[2px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TastTradition = () => {
  return (
    <section className="py-4 px-4 container">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
          Taste the Tradition
        </h3>
        <div className="flex justify-center mt-2 relative">
          <Image
            src="/assets/objects.png"
            alt="Decorative object"
            width={117}
            height={48}
            className="h-auto w-auto"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-3/4 relative">
          <HoverImageCard
            img="/assets/taste/Taste4.png"
            title="Wolfberry with Mushroom Siew Mai 枸杞子烧卖"
            description="A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness."
          />
        </div>
        <div className="w-full md:w-1/4">
          <HoverImageCard
            img="/assets/taste/Taste2.png"
            title="Tasty Dumplings"
            description="Delicious dumplings filled with meat and vegetables."
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <HoverImageCard
            img="/assets/taste/Taste3.png"
            title="Steamed Chicken Bun"
            description="Soft and fluffy buns filled with marinated chicken."
          />
        </div>
        <div className="w-full md:w-3/4">
          <HoverImageCard
            img="/assets/taste/Taste4.png"
            title="Wolfberry with Mushroom Siew Mai 枸杞子烧卖"
            description="A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness."
          />
        </div>
      </div>


      <div className="flex gap-[12px] pt-[60px] justify-center items-center">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-[10px] h-[10px] rotate-[-45deg] opacity-100 border border-[#E7B6B7] hover:bg-red-500 hover:w-[20px] hover:h-[20px] transition-all`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default TastTradition;
