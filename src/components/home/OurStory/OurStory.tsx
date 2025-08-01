import Image from 'next/image';
import React from 'react';
import { GoArrowRight } from "react-icons/go";

interface Item {
  id: number;   
  img:string;     
  counter: string;   
  subtitle: string;  
};

const data: Item[] = [
  {
    id: 1,
    img: "/assets/items/Happy Guests.png",
    counter: "6,000+",
    subtitle: "Happy Guests"
  },
  {
    id: 2,
    img: "/assets/items/Unique Dishes .png",
    counter: "50+",
    subtitle: "Unique Dishes"
  },
  {
    id: 3,
    img: "/assets/items/Years Of Quality.png",
    counter: "20+",
    subtitle: "Years Of Quality"
  },
  {
    id: 4,
    img: "/assets/items/Monthly Events.png",
    counter: "12+",
    subtitle: "Monthly Events"
  },
];

const OurStory = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left Side - Text Content */}
        <div
          className="w-full md:w-[500px] bg-[#F7E7E8] lg:w-[1100px] bg-[url('/assets/storyBg.png')] bg-contain bg-no-repeat bg-center pt-9 px-6"
          style={{ minHeight: '300px', }} 
        >
          <h3 className="text-3xl font-bold mb-4 ">Our Story</h3>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed lg:pr-[300px] md:pr-[150px]">
            At Sum Dim Sum, we are a local Singaporean brand that prepares dim sum dishes with wholehearted dedication and passion. Our chefs use traditional techniques to craft our dishes, ensuring that they are of the highest quality. Come and experience our fresh and flavorful cuisine.
          </p>

          <div className="pt-10">
            <button className="flex items-center gap-2 bg-[#B31217] hover:bg-[#a10f13] text-white px-6 py-3 rounded-lg transition-all duration-300">
              Learn More <GoArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-[512px] md:w-[412px] h-[260px] lg:-ml-[400px] md:-ml-[200px] lg:mt-[160px] flex justify-center">
          <Image
            src="/assets/ourStory.png"
            alt="Our Story"
            width={512}
            height={265}
            className="rounded-lg object-contain"
          />
        </div>
      </div>

      {/* Items Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-[60px] px-6 text-center">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <Image
              src={item.img}
              alt={item.subtitle}
              width={60}
              height={60}
              className="mb-3"
            />
            <p className="font-bold text-2xl">{item.counter}</p>
            <p className="text-gray-700">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStory;
