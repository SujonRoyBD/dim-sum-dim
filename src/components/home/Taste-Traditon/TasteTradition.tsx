import Image from 'next/image';
import React from 'react';

const TastTradition = () => {
  return (
    <section className="py-4 px-4  container">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">Taste the Tradition</h3>
        <div className="flex justify-center mt-2">
          <Image
            src="/assets/objects.png"
            alt="Decorative object"
            width={117}
            height={48}
            className="h-auto w-auto"
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-3/4">
          <div className="h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/assets/taste/Taste1.png"
              alt="Taste Image 1"
              width={848}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <div className="h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/assets/taste/Taste2.png"
              alt="Taste Image 2"
              width={448}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <div className="h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/assets/taste/Taste3.png"
              alt="Taste Image 3"
              width={448}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div className="h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/assets/taste/Taste4.png"
              alt="Taste Image 4"
              width={848}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className='flex gap-[12px] pt-[60px] justify-center items-center'>
       <div className="w-[10px] h-[10px] rotate-[-45deg] opacity-100 border border-[#E7B6B7] hover:bg-red-500 hover:w-[20px] hover:h-[20px]"></div>
       <div className="w-[10px] h-[10px] rotate-[-45deg] opacity-100 border border-[#E7B6B7]"></div>
       <div className="w-[10px] h-[10px] rotate-[-45deg] opacity-100 border border-[#E7B6B7]"></div>
       <div className="w-[10px] h-[10px] rotate-[-45deg] opacity-100 border border-[#E7B6B7]"></div>

      </div>
    </section>
  );
};

export default TastTradition;
