import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[url("/assets/heroSection.png")] bg-cover bg-center text-white py-20 px-6'>
            <div className='max-w-4xl mx-auto text-center'>
                <h2 className='text-3xl md:text-5xl font-bold leading-snug mb-6'>
                    Welcome to Sum Dim Sum - Where Every Bite Tells a Story
                </h2>
                <p className='text-lg md:text-xl leading-relaxed'>
                    At Sum Dim Sum, we bring families and friends together over the timeless tradition of sharing delectable dishes. From our expertly crafted dim sum to our vibrant ambiance, every moment here is a celebration of taste and togetherness. Explore our menu, reserve your table, or order your favorites online today!
                </p>
            </div>
        </div>
    );
};

export default Banner;
