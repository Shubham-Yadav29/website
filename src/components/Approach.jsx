import React from "react";
import { FaSearch, FaPaintBrush, FaRocket, FaChartLine } from "react-icons/fa";  // Importing the appropriate icons

export default function LatestWork() {
  const projects = [
    {
      title: "Planning & Strategy",
      period: "Understand your goals, target audience, and desired outcomes to lay the groundwork for the website",
      icon: <FaSearch className="text-[#4fb1b2] text-xl" />, // Magnifying glass for planning and strategy
    },
    {
      title: "Design & Layout",
      period: "Choose an appealing, user-friendly design that aligns with your brand and message.",
      icon: <FaPaintBrush className="text-[#4fb1b2] text-xl" />, // Paintbrush for design
    },
    {
      title: "Development & Testing",
      period: "Build the site, ensuring it works seamlessly across all devices and platforms.",
      icon: <FaRocket className="text-[#4fb1b2] text-xl" />, // Rocket for development and testing
    },
    {
      title: "Launch & Optimization",
      period: "Go live, then monitor performance and continuously optimize based on user feedback and analytics.",
      icon: <FaChartLine className="text-[#4fb1b2] text-xl" />, // Chart line for launch and optimization
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
          My <span className="bg-gradient-to-r from-[#1C5B6C] to-[#3d8c94] bg-clip-text text-transparent">Approach</span> - Creating a Website in <span className="bg-gradient-to-r  from-[#1C5B6C] to-[#3d8c94]  bg-clip-text text-transparent">4 Easy</span> Steps
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-[#1C5B6C] md:left-1/2" />

          {projects.map((project, index) => (
            <div
              key={index}
              className="mb-16 flex justify-start md:justify-between md:odd:flex-row-reverse"
            >
              {/* Date bubble */}
              <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#4fb1b2] text-white shadow-lg shadow-[#4fb1b2]/30 md:left-[calc(50%-1.25rem)]">
                <span className="text-lg">{index + 1}</span>
              </div>

              {/* Content */}
              <div
                className={`ml-12 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                <div className="group rounded-xl bg-[#e0f7fa] p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#4fb1b2]/20 border border-[#e2e8f0]">
                  <div className="mb-4">
                    {/* Icon and Title */}
                    <div className="flex items-center space-x-3">
                      {project.icon}
                      <h3 className="mb-1 text-2xl font-bold text-gray-800">
                        <span className="bg-[#03222D] bg-clip-text text-transparent">
                          {project.title}
                        </span>
                      </h3>
                    </div>
                  </div>
                  <h3 className="mb-1 text-base text-gray-800">{project.period}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
