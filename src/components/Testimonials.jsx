"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FaUser } from 'react-icons/fa';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      avatar: <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar" className="w-20 h-20 rounded-full object-cover" />,
      content:
        "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships.",
      color: "bg-white",
      name: "Shubham",
      bio: "Freelance Web Developer",
    },
    {
      id: 2,
      avatar: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeZjZWEr4oFmJhILQQgTy7-WUX9BmRrAAFw&s" alt="avatar" className="w-20 h-20 rounded-full object-cover" />,
      content:
        "Holistically cultivate tactical e-services before fully researched sources. Efficiently maintain extensive initiatives through sustainable benefits.",
      color: "bg-white",
      name: "Shubham",
      bio: "Freelance Web Developer",
    },
    {
      id: 3,
      avatar: <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar" className="w-20 h-20 rounded-full object-cover" />,
      content:
        "Credibly deliver enterprise-wide opportunities through optimal alignments. Dynamically foster cutting-edge infrastructures through innovative channels.",
      color: "bg-white",
      name: "Shubham",
      bio: "Freelance Web Developer",
    },
    {
      id: 4,
      avatar: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeZjZWEr4oFmJhILQQgTy7-WUX9BmRrAAFw&s" alt="avatar" className="w-20 h-20 rounded-full object-cover" />,
      content:
        "Professionally matrix cross-platformbdkubwh bwkudkwhb loremjbdwkdh leadership skills through efficient applications. Seamlessly implement customized initiatives.",
      color: "bg-white",
      name: "Shubham",
      bio: "Freelance Web Developer",
    },
    {
      id: 5,
      avatar: <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar" className="w-20 h-20 rounded-full object-cover" />,
      content:
        "Uniquely enable accurate supply chains rather than frictionless technology. Globally network focused materials vis-a-vis cost-effective services.",
      color: "bg-white",
      name: "Shubham",
      bio: "Freelance Web Developer",
    },
  ]

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
      }, 3000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isHovered])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <div id="testimonials" className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">

      <div className="w-full h-full flex justify-between">
        <div className="max-w-2xl w-full flex-col flex justify-center items-start pl-20">
          <h1 className="text-5xl font-bold text-gray-800">Great experiences of our previous <span className="bg-gradient-to-r from-[#1C5B6C] to-[#3d8c94] bg-clip-text text-transparent">clients</span></h1>
          <p className="text-xl text-gray-800/50 mt-7">Our team specializes in Professional Website Development for Businesses, ensuring a seamless online presence that reflects your vision and captivates your audience.</p>
        </div>

        <div
          className="relative w-[600px] max-w-2xl h-[370px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-[100%] flex items-center justify-center mr-20">
            {testimonials.map((testimonial, index) => {
              const position = (index - currentIndex + testimonials.length) % testimonials.length
              const zIndex = testimonials.length - Math.abs(position)
              const offset = position * 20 // Offset for stacking effect

              return (
                <div
                  key={testimonial.id}
                  className={`absolute w-[450px] max-w-md rounded-lg shadow-lg transition-all duration-500 ease-in-out ${testimonial.color}`}
                  style={{
                    transform: `translateX(${offset}px)`,
                    zIndex,
                    opacity: position === 0 ? 1 : 0.7,
                  }}
                >
                  <div className="bg-gradient-to-r from-[#1C5B6C] to-[#3d8c94] bg-clip-text text-transparent text-9xl h-20 ml-8 mt-4">&quot;</div>
                  <div className="flex flex-row items-center space-x-4">
                    <div className="flex flex-col gap-8">
                      <div> 
                    <p className="text-black text-lg leading-relaxed p-6 pt-4 pl-10">{testimonial.content}</p></div>
                    <div className="flex w-full gap-5 bg-[#1C5B6C]/10 p-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      {testimonial.avatar}
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-black font-semibold text-xl">{testimonial.name}</p>
                      <p className="text-[#1C5B6C]/80 text-[18px]">{testimonial.bio}</p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-[#1C5B6C] text-white hover:bg-[#1C5B6C]/80 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-[#1C5B6C] text-white hover:bg-[#1C5B6C]/80 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
