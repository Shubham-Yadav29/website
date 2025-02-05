import React from "react"

export default function LatestWork({plat}) {
  const projects = [
    {
      title: "Video Editors Portfolio",
      description:
        "This is a portfolio website for a video editor who wanted a website where he can showcase his work in a professional way.",
      tech: "Framer",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20180115-4BcJbHU8h93M9AiFJiO5PJGqsznG1T.png",
    },
    {
      title: "Logo Designer Portfolio",
      description:
        "I created this portfolio website for a logo designer who wanted to represent himself as a professional.",
      tech: "Framer",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20180115-4BcJbHU8h93M9AiFJiO5PJGqsznG1T.png",
    },
    {
      title: "Nand Vatika",
      description:
        "I created this Website for NandVatika and they are Real Estate company that helps people to find their dream house in Ranchi.",
      tech: "WordPress",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20180115-4BcJbHU8h93M9AiFJiO5PJGqsznG1T.png",
    },
    // Additional cards with the requested gradient
    {
      title: "Mobile App Design",
      description:
        "A sleek mobile application interface designed for a fitness tracking platform with real-time analytics.",
      tech: "React Native",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20180115-4BcJbHU8h93M9AiFJiO5PJGqsznG1T.png",
    },
    
  ]

  return (
    <div id="projects" className="min-h-screen bg-[#fff] p-8">

  <div className="mx-auto max-w-6xl relative"> {/* Add relative positioning to this container */}
    <h2 className="text-[43px] font-bold text-black text-center mb-10">
      Our Creative Journey -{" "}
      <span className="bg-gradient-to-r  from-[#1C5B6C] to-[#3d8c94]  bg-clip-text text-transparent">
        Top Projects
      </span>
      <h4 className="text-lg mt-3 text-[#7b828d]">Crafting impactful websites that accelerate business success, driven by a legacy of innovation and excellence</h4>
    </h2>

    {/* Image positioned absolutely */}
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-xl bg-gradient-to-r from-[#03222D] to-[#1C5B6C] text-white z-10"
        >
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="text-sm mb-2">{project.tech}</div>
            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <div className="pt-4">
              <a
                href="#"
                className="inline-block rounded-lg bg-[#4fb1b2] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#4fb1b2]/80"
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

  )
}
