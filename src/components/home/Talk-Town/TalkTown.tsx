import Image from 'next/image';
import React from 'react';

const TalkTown = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-center pt-[120px] px-4">
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">
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

      {/* Background Section */}
      <div className='bg-[url("/assets/devinto.png")] bg-cover bg-center text-white py-20 px-4'>
        <div className="max-w-6xl mx-auto">
          
          {/* coma + townhead image section */}
          <div className='flex gap-[70px] md:gap-[465px] lg:gap-[465px] mb-10'>
            {/* coma.png */}
            <Image
              src="/assets/coma.png"
              alt='coma'
              width={64}
              height={50}
              className="w-16 h-auto"
            />
            {/* townhead.png */}
            <Image
              src="/assets/townhead.png"
              alt='head'
              width={100}
              height={100}
              className="w-24 h-auto"
            />
          </div>

          {/* Description Paragraph */}
          <div className="flex justify-center items-center mx-auto">
            <p className="font-raleway font-normal text-base leading-[150%] tracking-normal text-center max-w-3xl">
              Sum Dim Sum is more than just a restaurant—it’s an experience that transports
              you to the heart of Asian culinary tradition. Each bite is a harmonious blend of
              flavor, texture, and passion, crafted meticulously to reflect the essence of dim
              sum culture. The moment you step in, you’re greeted by the comforting aroma of
              freshly steamed dumplings, the vibrant energy of a bustling kitchen, and the warm
              smiles of a team dedicated to delivering perfection on every plate.
            </p>
          </div>

          {/* Star Image */}
          <div className="pt-14 flex justify-center items-center">
            <Image
              src="/assets/star.png"
              alt='star'
              width={150}
              height={150}
              className="w-32 h-auto"
            />
          </div>
          <div className=" flex justify-end items-end">
            <Image
              src="/assets/signature.png"
              alt='star'
              width={250}
              height={200}
              className="w-[250px] h-auto"
            />
          </div>
        <div className="flex gap-4 justify-center items-center">
              <div className="w-[10px] h-[10px] rotate-[-45deg] opacity-100 border"></div>
              <div className="w-[10px] h-[10px] rotate-[-45deg] opacity-100 border"></div>
              <div className="w-[10px] h-[10px] rotate-[-45deg] opacity-100 border"></div>
              <div className="w-[10px] h-[10px] rotate-[-45deg] opacity-100 border"></div>
        </div>


        </div>
      </div>
    </div>
  );
};

export default TalkTown;
