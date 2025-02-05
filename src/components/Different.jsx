import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';

const Different = ({icon , robert , robert2}) => {
    return (
        <div className="flex flex-col bg-[#e0f7fa]/50  p-10">
        <div className='text-[40px] text-center font-bold px-60 h-25 leading-12'>Uncover the <span className="bg-gradient-to-r from-[#1C5B6C] to-[#3d8c94] bg-clip-text text-transparent">Secrets</span> to Elevating Your Online Visibility</div>
        <div className='flex px-25 pt-5'>
        <div className="flex-1 p-8 pb-0 ">
            <h1 className="text-4xl font-semibold mb-4">
            Missing Smart AI Features? You're <span className='text-red-600'>Losing Out!</span>
            </h1>
            <p className="mb-2 ">
            Remember when a plain website with minimal features was enough to generate leads? <span className='font-medium'>That era is over...</span>
            A website with little to no user interaction simply won't cut it anymore.
            </p>

            <div className="grid grid-cols-1  gap-8">
            <div className="p-4 pl-0 gap-1 flex flex-col">
                <div className='flex gap-2 items-center'><img src='https://rankved.com/wp-content/uploads/2025/01/no_11560478.png' className='h-5 w-5'></img><p className='text-base font-medium'>By Not Using AI Features, You're Missing Huge Opportunities</p></div>
                <div className='flex gap-2 items-center'><img src='https://rankved.com/wp-content/uploads/2025/01/no_11560478.png' className='h-5 w-5'></img><p className='text-base font-medium'>Cluttered Designs and Endless Searching Frustrate Clients</p></div>
                <div className='flex gap-2 items-center'><img src='https://rankved.com/wp-content/uploads/2025/01/no_11560478.png' className='h-5 w-5'></img><p className='text-base font-medium'>Static Pages Can't Keep Up with Today's Demands</p></div>
                
            </div>
            </div>
        </div>

        <div className="flex-1 p-8 py-0">
            <div className="h-90 rounded-lg flex items-center justify-center">
            <img src={robert} alt="Relevant Image" className="w-[90%] h-[80%]" />
            </div>
        </div>
        </div>
        <div className='w-full h-25 bg-[#e0f7fa]/50 flex justify-center'>
            
            <div className='bg-[#1C5B6C] w-[90%] rounded-3xl p-2 h-[70%] px-10 py-5 text-white text-xl text-center flex justify-center items-center'>
                <div className='w-[60%] text-end'><p><span className='font-semibold'>Free Consultation</span> - Get on a Call Now</p></div>
                <div className='w-[40%] flex justify-end'><button className='flex cursor-pointer items-center bg-[#FFB74D] text-[#1C5B6C] py-2 px-6 text-lg rounded-full transition-transform transform hover:translate-x-2'>
                <FaPhoneAlt className='mr-2' /> 
                Get on Call
                </button></div>
            </div>
    </div>

        <div className='flex'>
        <div className="flex-1 p-8 py-0">
            <div className="h-90 rounded-lg flex items-center justify-center">
            <img src={robert2} alt="Relevant Image" className="max-w-full max-h-full" />
            </div>
        </div>
        <div className="flex-1 p-8 pb-0 mt-10">
            <h1 className="text-4xl font-semibold mb-4">
            What Makes Us Different??
            </h1>
            <p className="mb-2 text-lg">
            What if you could be present with every person visiting your website, explaining all your features and services, and helping them when needed?
            </p>
            <p className="mb-2 text-lg font-semibold"> Yes, that can be a reality—not you, but AI tools can do this for you!!</p>

            <div className="grid grid-cols-1  gap-8">
            <div className="p-4 pl-0 gap-1 flex flex-col">
                <div className='flex gap-2 items-center'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyabPUvHU6H44jY-j4sHLlbKm9LfH_wFVkA&s' className='h-5 w-5'></img><p className='text-base font-medium'>AI tools make every interaction meaningful and automated.</p></div>
                <div className='flex gap-2 items-center'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyabPUvHU6H44jY-j4sHLlbKm9LfH_wFVkA&s' className='h-5 w-5'></img><p className='text-base font-medium'>Personalized experiences build trust and drive results.</p></div>
                <div className='flex gap-2 items-center'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyabPUvHU6H44jY-j4sHLlbKm9LfH_wFVkA&s' className='h-5 w-5'></img><p className='text-base font-medium'>Enhance user experience with AI-powered guidance.</p></div>
                
            </div>
            </div>
        </div>

        </div>
        
    </div>
    )
}

export default Different
