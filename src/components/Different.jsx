import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { Phone } from "lucide-react"
import { FaLocationArrow } from "react-icons/fa6";

const Different = ({icon , robert , robert2 ,cross}) => {
    const phoneNumber = "+1234567890";

    return (
        <div className="flex flex-col ">
        <div className='z-10 text-[34px] sm:text-[36px] xl:text-[40px] bg-[#e0f7fa]/50 p-5 sm:p-6 text-center font-bold xl:px-60 h-25 leading-10 sm:leading-12 '>Uncover the <span className="bg-gradient-to-r from-[#1C5B6C] to-[#3d8c94] bg-clip-text text-transparent">Secrets</span> to Elevating Your Online Visibility</div>
        <div className='flex flex-col pt-10 md:flex-row xl:px-25 bg-[#e0f7fa]/50 p-5 sm:p-6 md:pt-0 md:pb-5'>
        <div className="flex-1 sm:p-8 md:px-4 pb-0 px-2 pt-10 sm:pb-0 justify-center items-start flex flex-col">
            <h1 className="text-3xl sm:text-[32px] md:text-[30px] xl:text-[32px] font-semibold mb-4">
            Missing Smart AI Features? You're <span className='text-red-600'>Losing Out!</span>
            </h1>
            <p className="mb-2 xl:text-base md:text-sm">
            Remember when a plain website with minimal features was enough to generate leads? <span className='font-medium'>That era is over...</span>
            A website with little to no user interaction simply won't cut it anymore.
            </p>

            <div className="grid grid-cols-1  gap-8">
            <div className="p-4 pl-0 gap-1 flex flex-col">
                <div className='flex gap-2 items-center'><img src={cross} className='h-4 w-4 md:h-4 md:w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6'></img><p className='sm:text-base md:text-sm xl:text-base text-sm font-medium'>By Not Using AI Features, You're Missing Huge Opportunities</p></div>
                <div className='flex gap-2 items-center'><img src= {cross} className='h-4 w-4 md:h-4 md:w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6'></img><p className='sm:text-base md:text-sm xl:text-base text-sm font-medium'>Cluttered Designs and Endless Searching Frustrate Clients</p></div>
                <div className='flex gap-2 items-center'><img src={cross} className='h-4 w-4 md:h-4 md:w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 '></img><p className='sm:text-base md:text-sm xl:text-base text-sm font-medium'>Static Pages Can't Keep Up with Today's Demands</p></div>
                
            </div>
            </div>
        </div>

        <div className="flex-1 p-8 md:px-1 py-0">
            <div className="h-50 sm:h-90 rounded-lg flex items-center justify-center">
            <img src={robert} alt="Relevant Image" className="w-100 sm:w-110 h-50 sm:h-70 md:w-90 md:h-60 xl:w-110 xl:h-70" />
            </div>
        </div>
        </div>
        {/* <div className='h-30 flex justify-center'>
        <div className="flex items-center justify-between gap-5 mb-2 bg-[#1C5B6C] p-6 rounded-4xl">
            <div className="text-[#e8f5e9] text-5xl font-bold w-[12%] ml-2">67%</div>
            <div className='flex gap-6 w-[88%]'>
            <div className="text-gray-300 text-lg w-[75%]">
            increase in sales is brought by chatbots, according to business leaders (Outgrow)
            </div>
            <button className="flex cursor-pointer w-[20%] items-center bg-[#FFB74D] text-[#1C5B6C] py-2 px-4 sm:px-6 text-sm sm:text-base rounded-full transition-transform transform hover:translate-x-2">
                <Phone className="mr-2 h-4 w-4" />
                Get on Call
            </button>
            </div>
        </div> */}
    {/* </div> */}
    
    <div className="relative sm:py-16 py-5">
        {/* Blue background div that covers the top half */}
        <div className="absolute sm:top-0 top-0 left-0 w-full sm:h-1/2 h-1/2 bg-[#e0f7fa]/50"></div>

        {/* Stats container with absolute positioning */}
        <div className="relative max-w-[1000px] mx-auto">
            <div className="flex items-center mx-5 md:mx-10 sm:mx-7 justify-between gap-5 sm:gap-2 md:gap-4 lg:gap-0 bg-[#1C5B6C] p-6 rounded-2xl shadow-lg">
            <div className="text-[#e8f5e9] md:text-5xl text-4xl font-bold w-[16%] sm:ml-2 mr-2">67%</div>
            <div className="flex items-end w-[88%]">
                <div className="text-gray-300 lg:text-lg ml-2 mr-2 text-base w-[100%] sm:w-[75%]">
                increase in sales is brought by chatbots, according to business leaders (Outgrow)
                </div>
                <a href='#contact'>
                <FaLocationArrow  className="cursor-pointer p-2 sm:hidden h-10 w-10 text-[#FFB74D] border-[#FFB74D] border-1 rounded-full " />
                </a>
                <a href='#contact'>
                <button className="hidden sm:flex cursor-pointer w-[45%] sm:w-[155px] md:w-[155px] items-center bg-[#FFB74D] text-[#1C5B6C] py-3 px-4 sm:px-4  text-sm sm:text-base rounded-full transition-transform transform hover:translate-x-2">
                    <Phone className="mr-2 h-4 w-4" />
                    Get on Call
                </button>
                </a>
            </div>
            </div>
        </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center'>
        <div className="flex-1 p-8 md:px-0 py-0">
            <div className="h-70 rounded-lg flex items-center justify-center">
            <img src={robert2} alt="Relevant Image" className="max-w-full max-h-full md:w-100 md:h-70" />
            </div>
        </div>
        <div className="flex-1 p-4 sm:p-8 md:px-4 pb-0 md:mt-10">
            <h1 className="text-3xl sm:text-4xl md:text-[30px] xl:text-[32px] font-semibold mb-4">
            What Makes Us Different??
            </h1>
            <p className="mb-2 text-base sm:text-lg md:text-base xl:text-[17px]">
            What if you could be present with every person visiting your website, explaining all your features and services, and helping them when needed?
            </p>
            <p className="mb-2 text-base sm:text-lg md:text-[16px] xl:text-[18px] font-semibold"> Yes, that can be a reality—not you, but AI tools can do this for you!!</p>

            <div className="grid grid-cols-1  gap-8">
            <div className="p-4 pl-0 gap-1 flex flex-col">
                <div className='flex gap-2 items-center'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyabPUvHU6H44jY-j4sHLlbKm9LfH_wFVkA&s' className='h-4 w-4 md:h-4 md:w-4 sm:h-5 sm:w-5 xl:h-5 xl:w-5'></img><p className='sm:text-base md:text-sm text-sm xl:text-base font-medium'>AI tools make every interaction meaningful and automated.</p></div>
                <div className='flex gap-2 items-center'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyabPUvHU6H44jY-j4sHLlbKm9LfH_wFVkA&s' className='h-4 w-4 md:h-4 md:w-4 sm:h-5 sm:w-5 xl:h-5 xl:w-5'></img><p className='sm:text-base md:text-sm text-sm xl:text-base font-medium'>Personalized experiences build trust and drive results.</p></div>
                <div className='flex gap-2 items-center'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyabPUvHU6H44jY-j4sHLlbKm9LfH_wFVkA&s' className='h-4 w-4 md:h-4 md:w-4 sm:h-5 sm:w-5 xl:h-5 xl:w-5'></img><p className='sm:text-base md:text-sm text-sm xl:text-base font-medium'>Enhance user experience with AI-powered guidance.</p></div>
                
            </div>
            </div>
        </div>

        </div>
        
    </div>
    )
}

export default Different
