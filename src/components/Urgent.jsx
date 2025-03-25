import { FaPhoneAlt } from "react-icons/fa";

const CtaBanner = () => {
  return (
    <div className="w-full mx-auto justify-center bg-[#e0f7fa]/50 flex items-center h-80">
      <div className="bg-[#3d8c94] flex justify-between items-center sm:gap-10 flex-col sm:flex-row rounded-xl p-8 md:p-12 w-[88%]">
      <div className="text-white mb-6 md:mb-0 md:pr-8 ">
        <h2 className="text-2xl md:text-2xl lg:text-[33px] xl:text-[34px] font-bold mb-3">Ready to turn your ideas into a reality?</h2>
        <p className="text-sm md:text-base xl:text-lg opacity-90 max-w-2xl">
          Contact us to get the best solutions tailored to your specific needs and requirements.
        </p>
      </div>
<a href="#contact">
      <button className="cursor-pointer flex items-center text-sm bg-white text-[#1C5B6C] py-3 px-6 sm:px-0 md:w-45 lg:w-40 sm:w-45 justify-center  h-12 rounded-lg font-medium transition-transform transform hover:translate-x-2">
        <FaPhoneAlt className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
        Contact Us
      </button>
      </a>
      </div>
    </div>
  );
};

export default CtaBanner;
