import Image from 'next/image';
import React from 'react';
import { GoArrowRight } from "react-icons/go";
const Banner = () => {
    return (
        <div className='bg-[url("/assets/heroSection.png")] bg-cover bg-center text-white py-20 px-6'>
            <div className='max-w-4xl mx-auto text-center'>
                <h2 className='font-cinzel text-3xl md:text-3xl font-bold leading-snug mb-6 uppercase'>
                    Welcome to Sum Dim Sum - Where <br /> Every Bite Tells a Story
                </h2>
                <p className='text-lg md:text-xl leading-relaxed'>
                    At Sum Dim Sum, we bring families and friends together over the timeless tradition of sharing delectable dishes. From our expertly crafted dim sum to our vibrant ambiance, every moment here is a celebration of taste and togetherness. Explore our menu, reserve your table, or order your favorites online today!
                </p>
                <div className='py-[60px]'>
                    <button className='flex items-center justify-center mx-auto gap-[8px] bg-[#B31217] px-[20px] py-[12px] rounded-lg'>Explore Our Menu <GoArrowRight className=''/></button>
                </div>
             
            </div>
               <div className='lg:flex justify-end items-end container'>
                    <Image src="/assets/bannerLogo.png"alt='banner-logo' width={174} height={174} className='rounded-full'/>
                </div>
        </div>
    );
};

export default Banner;
