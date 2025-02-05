import { Bot, MousePointerClick, LineChart, FormInput } from "lucide-react"
export default function LeadForm({ group, me }) {
  return (
    <div className="min-h-screen bg-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto py-12 md:py-20">
        <div className="grid md:grid-cols-[55%_45%] gap-15 items-center">
          <div className="relative">
            <div className="absolute inset-0">
              
            <div className="absolute bottom-94 left-73 animate-bounce">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <Bot className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">AI Chatbot</span>
                </div>
              </div>

              <div className="absolute top-23 left-15 animate-bounce">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <Bot className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">AI Chatbot</span>
                </div>
              </div>

              {/* Hook Strategy */}
              <div className="absolute top-23 right-10 animate-bounce delay-100">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <MousePointerClick className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">Hook Strategy</span>
                </div>
              </div>

              {/* Website Tracking */}
              <div className="absolute bottom-1/100 left-10 animate-bounce delay-200">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <LineChart className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">Website Tracking</span>
                </div>
              </div>

              <div className="absolute bottom-1/3 right-140 animate-bounce delay-200">
                <div className="flex w-full items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <LineChart className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">Website Track</span>
                </div>
              </div>

              <div className="absolute bottom-1/3 right-0 animate-bounce delay-300">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <FormInput className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">Smart Lead </span>
                </div>
              </div>

              {/* Smart Lead Form */}
              <div className="absolute bottom-1/100 right-10 animate-bounce delay-300">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <FormInput className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">Smart Lead Form</span>
                </div>
              </div>

              <div className="absolute top-102 right-67 animate-bounce delay-300">
                <div className="flex items-center gap-2 bg-[#1C5B6C] p-3 rounded-full shadow-lg border border-[#a3e5d9]">
                  <FormInput className="w-5 h-5 text-[#a3e5d9]" />
                  <span className="text-sm font-medium text-[#a3e5d9]">Smart Lead Form</span>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="https://img.freepik.com/premium-photo/abstract-digital-business-chart-graph-technology-background-futuristic-concept_923894-22330.jpg"
                width={400}
                height={400}
                className="mx-auto rounded-full p-10"
              />
            </div>
          </div>
          <div className="space-y-4 pr-10">
            {/* Partner Badge */}
            <div className="flex items-center gap-2 text-[#a3e5d9]">
              <div className="bg-[#1C5B6C] p-1 rounded-full">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#a3e5d9]" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className=" text-[#1C5B6C] font-bold text-base">#1 Easy to Use and Hard to Forget</p>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-4xl font-bold text-[#1C5B6C]/70">
              Partner with the Leading Website Development <span className="text-[#1C5B6C]">Experts</span>
                <div className="text-xl mt-4 text-[#1C5B6C]/90">— We Guarantee Results That Elevate Your Business and Drive Sales!</div> 
                
              </h1>
              <p className="text-gray-600 text-lg">
                A website is only effective when it converts. That’s why we build dynamic, results-driven sites{" "}
                <span className="font-semibold text-[#1C5B6C]">AI Chatbots , Lead forms, User Tracking</span>, to boost
                engagement and fuel your business growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
