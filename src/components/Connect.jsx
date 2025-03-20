import { Bot, MousePointerClick, LineChart, FormInput } from "lucide-react";

export default function LeadForm({ group, me }) {
  return (
    <div className="min-h-screen bg-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto py-12 md:py-5 pt-5">
        <div className="grid lg:grid-cols-[55%_45%] md:grid-cols-[45%_55%] md:gap-0 xl:gap-20 gap-2 items-center">
          <div className="relative">
            <div className="absolute inset-0 hidden sm:flex">
              <div className="absolute bottom-90 left-73 hidden xl:flex">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <Bot className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">AI Chatbot</span>
                </div>
              </div>

              <div className="absolute top-19 left-15 md:hidden hidden lg:flex xl:flex">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <Bot className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">AI Chatbot</span>
                </div>
              </div>

              {/* Hook Strategy */}
              <div className="absolute top-19 right-10 md:hidden hidden lg:flex xl:flex">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <MousePointerClick className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">Hook Strategy</span>
                </div>
              </div>

              {/* Website Tracking */}
              <div className="absolute bottom-1/100 left-10 md:hidden hidden lg:flex xl:flex">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <LineChart className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">Website Tracking</span>
                </div>
              </div>

              <div className="absolute bottom-1/3 right-140 hidden xl:flex">
                <div className="flex w-full items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <LineChart className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">Website Track</span>
                </div>
              </div>

              <div className="absolute bottom-1/3 right-0 hidden xl:flex">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <FormInput className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">Smart Lead </span>
                </div>
              </div>

              {/* Smart Lead Form */}
              <div className="absolute bottom-1/100 right-10 md:hidden hidden lg:flex  xl:flex">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <FormInput className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">Smart Lead Form</span>
                </div>
              </div>

              <div className="absolute top-102 right-67 hidden xl:flex">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <FormInput className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">Smart Lead Form</span>
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
                  <p className="text-[#1C5B6C] font-bold sm:text-base lg:text-base text-sm md:text-sm">#1 Easy to Use and Hard to Forget</p>
                </div>
                <div className="flex justify-center w-full text-center">
                  <h1 className="sm:text-3xl lg:text-3xl text-2xl items-center md:text-2xl font-bold text-[#1C5B6C]/70">
                    Partner with the Leading Website Development <span className="text-[#1C5B6C]">Experts</span>
                  </h1>
                </div>
            </div>

            {/* Main Image */}
            <div className="relative z-10">
              <img
                src={me}
                width={400}
                height={400}
                className="mx-auto p-10"
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
                Partner with the Leading Website Development <span className="text-[#1C5B6C]">Experts</span>
                
              </h1>
              <div className="sm:text-lg md:text-base lg:text-lg text-base font-bold mt-4 text-[#1C5B6C]/90">— We Guarantee Results That Elevate Your Business and Drive Sales!</div>
              <p className="text-gray-600 sm:text-base text-sm md:text-sm lg:text-base">
                A website is only effective when it converts. That’s why we build dynamic, results-driven sites{" "}
                <span className="font-semibold text-[#1C5B6C]">AI Chatbots, Lead forms, User Tracking</span>, to boost
                engagement and fuel your business growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
