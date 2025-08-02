"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/assets/devinto.png",
    text: `Sum Dim Sum is more than just a restaurant—it’s an experience that transports
    you to the heart of Asian culinary tradition. Each bite is a harmonious blend of
    flavor, texture, and passion, crafted meticulously to reflect the essence of dim
    sum culture...`,
  },
  {
    id: 2,
    image: "/assets/blue.jpg",
    text: `Sum Dim Sum delivers flavors that spark joy. From the first bite to the last,
    it’s a flavorful journey through Asian cuisine that never fails to impress.
    A truly memorable culinary destination.`,
  },
    {
    id: 1,
    image: "/assets/food.jpg",
    text: `Sum Dim Sum is more than just a restaurant—it’s an experience that transports
    you to the heart of Asian culinary tradition. Each bite is a harmonious blend of
    flavor, ...`,
  },
];

const TalkTown = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="text-center pt-[120px] px-4">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
          The Talk of the Town
        </h3>
        <div className="flex justify-center mt-2 mb-[80px]">
          <Image
            src="/assets/objects.png"
            alt="Decorative object"
            width={117}
            height={48}
            className="h-auto w-auto"
          />
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="bg-cover bg-center text-white py-20 px-4 "
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex  items-center mb-10">
              <Image
                src="/assets/coma.png"
                alt="coma"
                width={64}
                height={50}
                className="w-16 h-auto"
              />
              <Image
                src="/assets/townhead.png"
                alt="head"
                width={100}
                height={100}
                className="ml-[70px] md:ml-[314px] lg:ml-[450px] flex justify-center items-center w-24 h-auto"
              />
            </div>
            <div className="flex justify-center items-center mx-auto">
              <p className="font-raleway font-normal text-base leading-[150%] tracking-normal text-center max-w-3xl">
                {slides[current].text}
              </p>
            </div>
            <div className="pt-14 flex justify-center items-center">
              <Image
                src="/assets/star.png"
                alt="star"
                width={150}
                height={150}
                className="w-32 h-auto"
              />
            </div>
            <div className="flex justify-end items-end">
              <Image
                src="/assets/signature.png"
                alt="signature"
                width={250}
                height={200}
                className="w-[250px] h-auto"
              />
            </div>
            <div className="flex gap-4 justify-center items-center pt-6">
              {[...Array(slides.length)].map((_, i) => (
                <div
                  key={i}
                  className={`w-[10px] h-[10px] rotate-[-45deg] border ${
                    i === current ? "bg-white" : "opacity-50"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TalkTown;
