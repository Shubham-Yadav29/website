import { Github, Instagram, Linkedin } from "lucide-react"
import { FaWhatsapp } from 'react-icons/fa';

export default function LandingSection() {
  return (
    <div id="contact" className=" flex flex-col justify-between bg-[#03222D] text-white px-4 py-16">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-16 ">
        Unlock <span className="text-[#a3e5d9]">your</span> Business Potential and get out of the crowd!!
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
        Get in touch today, and let’s explore how I can help you achieve your goals.
        </p>

        <a
          href="https://wa.me/918708328865"  target="_blank"
          className="inline-flex items-center px-8 py-4 rounded-full bg-[#1C5B6C] hover:bg-[#1C5B6C]/50 hover:text-white transition-colors duration-300"
        >
          Connect on WhastApp <span className="ml-2 text-xl"><FaWhatsapp className="mr-2" /></span>
        </a>
      </div>

      {/* Footer */}
      <div className="w-full max-w-7xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-gray-400">
          Copyright © 2024 <span className="text-[#a3e5d9]">Shubham Yadav</span>
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/Shubham-Yadav29" target="_blank" className="p-2 rounded-full bg-[#1C5B6C] hover:bg-[#1C5B6C]/50 transition-colors duration-300">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.instagram.com/shubhamyadavdev/" target="_blank" className="p-2 rounded-full bg-[#1C5B6C] hover:bg-[#1C5B6C]/50 transition-colors duration-300">
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/shubham-yadav-009805310" target="_blank" className="p-2 rounded-full bg-[#1C5B6C] hover:bg-[#1C5B6C]/50 transition-colors duration-300">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}

