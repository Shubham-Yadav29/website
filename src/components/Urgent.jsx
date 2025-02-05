import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'; // Importing the call icon

const Urgent = ({free , sec}) => {
  return (
    <div className="w-full bg-[#03222D] flex justify-center items-center pl-10 pr-0">
        {/* <img src={sec} className='h-70 w-80'></img>  */}
      <div className=" p-6 rounded-3xl text-center w-[100%] flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-white mb-4">
          Get on a Call Now !!
        </h2>
        <p className="text-xl text-white mb-6">
          It costs nothing! Get a free consultation today.
        </p>
        <button className="flex items-center bg-[#FFB74D] text-[#1C5B6C] py-3 px-8 rounded-2xl transition-transform transform hover:translate-x-2">
          <FaPhoneAlt className="mr-2" />
          Call Now
        </button>
      </div>
      <img src={free} className='h-80 w-80'></img>    
    </div>
  );
};

export default Urgent;
