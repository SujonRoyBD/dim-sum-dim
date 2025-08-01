import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
const ContactUs = () => {
    return (
        <div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='w-'>

                </div>
                <div className='w-2/4 h-auto lg:h-[746px] border-2 border-red-500 bg-[url("/assets/contactusFrom2.png")] bg-contain bg-no-repeat bg-center px-6'>
                <h3 className='font-poppins font-semibold text-[24px] leading-[150%] tracking-normal py-[20px] pt-[200px]'>Contact Information</h3>
                <p className=' font-normal text-base leading-[150%] tracking-normal'>Maui, Hawaii, USA</p>
                <p className=' font-normal text-base leading-[150%] tracking-normal'>Call us: +1234567890</p>
                <p className=' font-normal text-base leading-[150%] tracking-normal'>Whatsapp: +1234567890</p>
                <p className=' font-semibold text-xl leading-[150%] tracking-normal pt-[60px]'>Follow Us</p>
                <div className='flex gap-3 py-[20px]'>
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <RiTwitterXLine />
                </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;