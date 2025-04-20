import React from "react";

export default function LatestWork({ plat, project1 }) {
  const projects = [
    {
      title: "Real-Estate Website",
      description:
        "This is a real estate website created for self-learning purposes to practice and gain a better understanding of various concepts..",
      tech: "React & Tailwind",
      image: project1,
    },
  ];

  return (
    <div id="projects" className="min-h-screen bg-[#fff] ">
      <div className="mx-auto max-w-6xl relative">
        <h2 className="sm:p-8 text-[35px] sm:text-[43px] font-bold text-black text-center mb-5 sm:mb-0 p-5 leading-11">
          Our Creative Journey -{" "}
          <span className="bg-gradient-to-r from-[#1C5B6C] to-[#3d8c94] bg-clip-text text-transparent">
            Top Projects
          </span>
          <h4 className="text-sm sm:text-base lg:text-lg mt-3 text-[#7b828d]">
            Designing future-ready websites that drive results — inspired by
            innovation, built on excellence.
          </h4>
        </h2>

        <div
          className="grid p-6 md:p-8 lg:p-0 sm:px-20 rounded-lg grid-cols-1 md:grid-cols-2 base:grid-cols-3 lg:grid-cols-3 gap-6"
          // className="grid p-6 md:p-8 lg:p-0 sm:px-20 rounded-lg grid-cols-1 md:grid-cols-2 base:grid-cols-3 lg:grid-cols-3 gap-6 h-122 sm:h-auto overflow-y-auto sm:overflow-y-hidden custom-scrollbar-container"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg sm:my-8 h-113 bg-[#e0f7fa]/10 shadow-xl text-black z-10"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <div className="text-sm mb-2">{project.tech}</div>
                <h2 className="text-xl font-bold mb-3 text-[#3d8c94]">
                  {project.title}
                </h2>
                <p className="mb-4 text-sm text-gray-600">
                  {project.description}
                </p>
                <div className="pt-4">
                  <a
                    href="https://real-estate-webdev.netlify.app/"
                    target="_blank"
                    className="inline-block rounded-lg bg-[#3d8c94] px-4 xl:px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1C5B6C]"
                  >
                    Visit Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
