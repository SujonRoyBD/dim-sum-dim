import React from "react";
import { GoArrowRight } from "react-icons/go";
const DiveInto = () => {
  return (
    <div className='bg-[url("/assets/devinto.png")] bg-cover bg-center text-white py-20 px-6'>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-bold leading-snug mb-6 uppercase">
          Dive Into the World of Sumptuous <br /> Sum Dim Sum
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
         Embark on a culinary journey where every bite tells a story of tradition and passion. At Sum Dim Sum, we bring you an authentic Asian dining experience with handcrafted dishes, vibrant flavors, and the warmth of our culture. From delicate dumplings to savory
bites, our menu is a celebration of taste and artistry. Come, savor the joy of good food, and let
every dish transport you to the heart of dim sum perfection.
        </p>
        <div className="py-[60px]">
          <button className="flex items-center justify-center mx-auto gap-[8px] bg-[#B31217] px-[20px] py-[12px] rounded-lg">
            Explore Our Menu <GoArrowRight className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiveInto;
