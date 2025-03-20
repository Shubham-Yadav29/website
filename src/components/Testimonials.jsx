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
      avatar: <img src="https://media.istockphoto.com/id/1316947194/vector/messenger-profile-icon-on-white-isolated-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1iQ926GXQTJkopoZAdYXgU17NCDJIRUzx6bhzgLm9ps=" alt="avatar" className="w-20 h-20 rounded-full object-cover" />,
      content:
        "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships.",
      color: "bg-white",
      name: "User-1",
      bio: "Client-1",
    },
    {
      id: 2,
      avatar: <img src="https://media.istockphoto.com/id/1316947194/vector/messenger-profile-icon-on-white-isolated-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1iQ926GXQTJkopoZAdYXgU17NCDJIRUzx6bhzgLm9ps=" alt="avatar" className="w-20 h-20 rounded-full object-cover" />,
      content:
        "Holistically cultivate tactical e-services before fully researched sources. Efficiently maintain extensive initiatives through sustainable benefits.",
      color: "bg-white",
      name: "User-2",
      bio: "Client-2",
    },
    {
      id: 3,
      avatar: <img src="https://media.istockphoto.com/id/1316947194/vector/messenger-profile-icon-on-white-isolated-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1iQ926GXQTJkopoZAdYXgU17NCDJIRUzx6bhzgLm9ps=" alt="avatar" className="w-20 h-20 rounded-full object-cover" />,
      content:
        "Credibly deliver enterprise-wide opportunities through optimal alignments. Dynamically foster cutting-edge infrastructures through innovative channels.",
      color: "bg-white",
      name: "User-3",
      bio: "Client-3",
    },
    {
      id: 4,
      avatar: <img src="https://media.istockphoto.com/id/1316947194/vector/messenger-profile-icon-on-white-isolated-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1iQ926GXQTJkopoZAdYXgU17NCDJIRUzx6bhzgLm9ps=" alt="avatar" className="w-20 h-20 rounded-full object-cover" />,
      content:
        "Professionally matrix cross-platformbdkubwh bwkudkwhb loremjbdwkdh leadership skills through efficient applications. Seamlessly implement customized initiatives.",
      color: "bg-white",
      name: "User-3",
      bio: "Client-4",
    },
    {
      id: 5,
      avatar: <img src="https://media.istockphoto.com/id/1316947194/vector/messenger-profile-icon-on-white-isolated-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1iQ926GXQTJkopoZAdYXgU17NCDJIRUzx6bhzgLm9ps=" alt="avatar" className="w-20 h-20 rounded-full object-cover" />,
      content:
        "Uniquely enable accurate supply chains rather than frictionless technology. Globally network focused materials vis-a-vis cost-effective services.",
      color: "bg-white",
      name: "User-5",
      bio: "Client-5",
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
    <div id="testimonials" className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 pb-27 lg:pb-5">

      <div className="w-full h-full flex flex-col items-center lg:flex-row justify-between">
        <div className="md:max-w-4xl lg:max-w-xl xl:max-w-4xl max-w-2xl w-full flex-col flex justify-center items-start xl:pl-10 xl:pr-60 pb-10">
          <h1 className="md:text-5xl xl:text-[45px] lg:text-[38px] sm:text-[40px] font-bold text-gray-800 text-4xl text-center lg:text-start mt-5 px-1 lg:px-5">Great experiences of our previous <span className="bg-gradient-to-r from-[#1C5B6C] to-[#3d8c94] bg-clip-text text-transparent">clients</span></h1>
          <p className="xl:text-xl text-sm lg:text-base md:text-lg text-center lg:text-start text-gray-800/60 mt-7 sm:ml-5 lg:pr-14">Our team specializes in Professional Website Development for Businesses, ensuring a seamless online presence that reflects your vision and captivates your audience.</p>
        </div>

        <div
          // className="relative w-[500px] h-[370px] sm:w-[600px] max-w-2xl sm:h-[370px]"
          className="relative w-full h-[370px] max-w-full sm:h-[370px]verflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-[100%] flex items-center justify-center mr-20 xl:mr-40 lg:mr-35">
            {testimonials.map((testimonial, index) => {
              const position = (index - currentIndex + testimonials.length) % testimonials.length
              const zIndex = testimonials.length - Math.abs(position)
              const offset = position * 20 // Offset for stacking effect

              return (
                <div
                  key={testimonial.id}
                  className={`absolute sm:w-[400px] lg:w-[400px] w-[280px] max-w-md rounded-lg shadow-lg transition-all duration-500 ease-in-out ${testimonial.color}`}

                  style={{
                    transform: `translateX(${offset}px)`,
                    zIndex,
                    opacity: position === 0 ? 1 : 0.7,
                  }}
                >
                  <div className="bg-gradient-to-r from-[#1C5B6C] to-[#3d8c94] bg-clip-text text-transparent sm:text-9xl text-8xl h-20 ml-8 mt-4">&quot;</div>
                  <div className="flex flex-row items-center space-x-4">
                    <div className="flex flex-col gap-4 sm:gap-8">
                      <div> 
                    <p className="text-black h-40  sm:text-lg lg:text-base xl:text-lg text-sm leading-relaxed p-6 pb-0 sm:pb-5 sm:pt-4 pt-0 pl-10">{testimonial.content}</p></div>
                    <div className="flex w-full gap-5 bg-[#1C5B6C]/10 p-4">
                    <div className="sm:w-20 sm:h-20 xl:w-20 xl:h-20 lg:w-14 lg:h-14 h-15 w-15 rounded-full overflow-hidden">
                      {testimonial.avatar}
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-black font-semibold sm:text-xl lg:text-lg text-base xl:text-xl">{testimonial.name}</p>
                      <p className="text-[#1C5B6C]/80 sm:text-[18px] lg:text-[16px] text-[14px] xl:text-[18px]">{testimonial.bio}</p>
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
