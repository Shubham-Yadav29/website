import {
  FaRobot,
  FaComments,
  FaEnvelopeOpenText,
  FaChartLine,
  FaUserPlus,
  FaShieldAlt,
  FaServer,
  FaMobileAlt,
  FaRocket
} from 'react-icons/fa'; 

export default function LeadForm({ group, me }) {
  return (
    <div className="min-h-screen bg-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto py-12 md:py-5 pt-5">
        <div className="grid lg:grid-cols-[50%_40%] md:grid-cols-[40%_50%] md:gap-0 xl:gap-20 gap-2 items-center">
          <div className="relative">
            <div className="absolute inset-0 sm:flex">
              <div className="absolute top-84 left-2 xl:top-4 xl:left-32 sm:top-40 sm:left-42 lg:top-4 lg:left-24 md:hidden sm:flex flex lg:flex xl:flex">
              <div className="flex items-center gap-2 bg-[#1C5B6C] flex-col z-20 p-3 rounded-3xl shadow-lg border border-[#a3e5d9]">
                <FaRobot className="sm:w-10 sm:h-10 h-7 w-7 text-[#fff]" />
                  <span className="sm:text-sm text-[12px] font-medium text-[#a3e5d9]">AI Chatbot</span>
                </div>
              </div>

              {/* Hook Strategy */}
              <div className="absolute top-45 right-12 xl:top-4 xl:right-34 sm:top-40 sm:right-39 lg:right-24 lg:top-4 sm:flex md:hidden flex lg:flex xl:flex">
                <div className="flex items-center gap-2 bg-[#1C5B6C] z-20 flex-col p-3 rounded-3xl shadow-lg border border-[#a3e5d9]">
                <FaComments className="sm:w-10 sm:h-10 w-7 h-7 text-[#fff]" />
                  <span className="sm:text-sm text-[12px] font-medium text-[#a3e5d9]">Live Chat Setups</span>
                </div>
              </div>

              {/* Website Tracking */}
              <div className="absolute bottom-88 left-7 xl:bottom-25 xl:left-17 sm:bottom-50 sm:left-23  lg:bottom-50 lg:left-8 md:hidden flex sm:flex lg:flex xl:flex">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 z-20 rounded-3xl flex-col shadow-lg border border-[#a3e5d9]">
                <FaUserPlus className="sm:w-10 sm:h-10 h-7 w-7 text-[#fff]" />
                  <span className="sm:text-sm text-[12px] font-medium text-[#a3e5d9]">Lead Capture</span>
                </div>
              </div>

              <div className="absolute xl:bottom-60 xl:right-120 sm:bottom-60 sm:right-120 hidden xl:flex lg:hidden sm:hidden">
                <div className="flex w-full items-center gap-2 bg-[#1C5B6C] z-20 p-3 flex-col rounded-3xl shadow-lg border border-[#a3e5d9]">
                <FaShieldAlt className="w-10 h-10 text-[#fff]" /> 
                  <span className="text-sm font-medium text-[#a3e5d9]"> Security Setup</span>
                </div>
              </div>

              <div className="absolute xl:bottom-60 xl:right-15 sm:bottom-60 sm:right-18 hidden xl:flex sm:flex md:hidden">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 z-20 rounded-3xl flex-col shadow-lg border border-[#a3e5d9]">
                <FaServer className="w-10 h-10 text-[#fff]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">Secure Hosting</span>
                </div>
              </div>

              {/* Smart Lead Form */}
              <div className="absolute bottom-20 right-12 xl:bottom-25 xl:right-22 sm:bottom-20 sm:right-30 lg:bottom-18 lg:right-22 md:hidden flex lg:flex sm:flex xl:flex">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 z-20 rounded-3xl flex-col shadow-lg border border-[#a3e5d9]">
                <FaEnvelopeOpenText className="sm:w-10 sm:h-10 h-7 w-7 text-[#fff]" /> 
                  <span className="sm:text-sm text-[12px] font-medium text-[#a3e5d9]">Direct Email</span>
                </div>
              </div>

              
            </div>
            <div className="md:hidden space-y-4 sm:pl-10 pb-0 p-6 pt-10 sm:pt-6 md:p-0 md:pr-6 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 text-[#a3e5d9]">
                  <div className="bg-[#1C5B6C] p-1 rounded-full w-5">
                    <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 sm:w-4 sm:h-4 md:h-3 md:w-3 lg:w-4 lg:h-4 text-[#a3e5d9]" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#1C5B6C] font-bold sm:text-base lg:text-base text-sm md:text-sm"> Easy to Use and Hard to Forget</p>
                </div>
                <div className="flex justify-center w-full text-center">
                  <h1 className="sm:text-3xl lg:text-3xl text-2xl items-center md:text-2xl font-bold text-[#1C5B6C]/70">
                    Partner with the Leading Website Development <span className="text-[#1C5B6C]">Expert</span>
                  </h1>
                </div>
            </div>

            {/* Main Image */}
            <div className="relative z-10">
            {/* Blue background circle FIRST so it's behind the image */}
            <div className="bg-[#9fd7d6] rounded-full h-100 w-90 mx-auto mt-10 md:h-70 md:w-60 lg:h-100 lg:w-90"  ></div>

            {/* Image on top */}
            <img
              src={me}
              width={400}
              height={400}
              className="mx-auto -mt-108 md:-mt-78 lg:-mt-108 p-10 pb-0 z-10 relative"
            />
          </div>

          </div>
          <div className=" space-y-4 sm:pl-10 p-6 pt-0 sm:pt-6 md:p-0 md:pr-6">
            {/* Partner Badge */}
            <div className="hidden md:flex items-center gap-2 text-[#a3e5d9]">
              <div className="bg-[#1C5B6C] p-1 rounded-full">
                <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 sm:w-4 sm:h-4 md:h-3 md:w-3 lg:w-4 lg:h-4 text-[#a3e5d9]" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="hidden  md:flex text-[#1C5B6C] font-bold sm:text-base lg:text-base text-sm md:text-sm">#1 Easy to Use and Hard to Forget</p>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="hidden md:block sm:text-3xl lg:text-3xl text-2xl md:text-2xl font-bold text-[#1C5B6C]/70">
                Partner with the Leading Website Development <span className="text-[#1C5B6C]">Expert</span>
                
              </h1>
              <div className="sm:text-lg md:text-base lg:text-lg text-base font-bold mt-4 text-[#1C5B6C]/90">— We Guarantee Results That Elevate Your Business and Drive Sales!</div>
              <p className="text-gray-600 sm:text-base text-sm md:text-sm lg:text-base">
              A website's true power lies in conversion. That's why we create dynamic, results-driven sites with{" "}
                <span className="font-semibold text-[#1C5B6C]">AI Chatbots, Live Chat, Direct Email </span>,to enhance engagement and drive business growth.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
