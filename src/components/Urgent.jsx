import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'; // Importing the call icon

const Urgent = ({free , sec}) => {
  return (
    <div className="w-full bg-[#03222D] flex justify-center items-center sm:flex sm:justify-center sm:items-center sm:pl-10 pr-0 pt-5 md:pt-0">
      <div className=" p-2 rounded-3xl text-center w-[100%] flex flex-col items-center">
        <h2 className="xl:text-4xl text-[19px] sm:text-[25px] md:text-[30px] font-semibold text-white md:mb-3 mb-2">
          Get on a Call Now !!
        </h2>
        <p className="md:text-xl text-[13px] sm:text-[16px] md:text-[18px] text-white md:mb-6 mb-4">
          It costs nothing! Get a free consultation today.
        </p>
        <button className="flex items-center bg-[#FFB74D] text-[#1C5B6C] text-sm sm:text-base md:py-3 md:px-8 py-2 px-3 rounded-2xl transition-transform transform hover:translate-x-2">
          <FaPhoneAlt className="mr-2" />
          Call Now
        </button>
      </div>
      <img src={free} className='md:h-80 md:w-80 h-50 w-50 sm:h-60 sm:w-60'></img>    
    </div>
  );
};

export default Urgent;

