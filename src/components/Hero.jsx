import React, { useEffect, useState } from 'react';
import { FaRocket, FaDollarSign, FaPaintBrush } from 'react-icons/fa';
import { CiLocationArrow1 } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from 'react-icons/io5';

const Hero = ({bulb}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollingUp, setScrollingUp] = useState(true);


    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
    // Track scroll direction
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setScrollingUp(false);
            } else {
                // Scrolling up
                setScrollingUp(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        // Intersection observer to highlight navbar items based on section in view
        const sections = ['home', 'projects', 'testimonials', 'services','contact'];
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // 50% of section needs to be in view
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id); // Set active link based on section in view
                }
            });
        }, options);

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMenuOpen(false);
    };

    return (
        <div id="home" className="bg-gradient-to-b from-[#050E1E] via-[#03222D] to-[#1C5B6C] relative overflow-hidden">
            <nav
                className={`sm:items-end sm:flex h-16 fixed top-0 left-0 right-0 z-20 backdrop-blur-md transition-transform duration-300 ${
                    scrollingUp ? 'transform translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="container mx-auto flex justify-center items-end px-4 z-10 backdrop-blur-md">
                <div className="relative w-full sm:w-0">
                <div
                        className="sm:hidden absolute w-full flex justify-end top-4 z-30 text-white hover:bg-transparent p-2 rounded-full cursor-pointer"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <IoCloseOutline
                                className="text-3xl transition-all duration-300 ease-in-out transform hover:scale-125 z-10"
                            />
                        ) : (
                            <GiHamburgerMenu
                                className="text-2xl transition-all duration-300 ease-in-out transform hover:scale-125"
                            />
                        )}
                    </div>

                    {isMenuOpen && (
  <div className="z-10 h-90 fixed top-0 left-0 w-full bg-[#1C5B6C] flex justify-start pl-18 items-end pb-15">
    <div className="space-y-3 text-2xl flex flex-col text-start">
      {['home', 'projects', 'services', 'testimonials', 'contact'].map((link) => (
        <a
          key={link}
          href={`#${link}`}
          onClick={() => handleLinkClick(link)}
          className={`block relative text-white text-xl font-medium px-2 py-1 overflow-hidden
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#a3e5d9]
            after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300
            hover:after:scale-x-100
            ${activeLink === link ? 'text-[#a3e5d9] after:scale-x-100' : ''}`}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </a>
      ))}
    </div>
  </div>
)}


                    </div>
                    <div className="hidden sm:flex sm:gap-0 md:gap-1 text-sm xl:text-base lg:gap-3 xl:gap-3 text-white border-2 border-white p-1 rounded-full px-1">
                        <a
                            href="#home"
                            className={`${
                                activeLink === 'home' ? 'bg-[#a3e5d9] text-black' : ''
                            } hover:text-[#7b828d] transition duration-300 px-4 py-2 rounded-full`}
                            onClick={() => handleLinkClick('home')}
                        >
                            Home
                        </a>
                        <a
                            href="#projects"
                            className={`${
                                activeLink === 'projects' ? 'bg-[#a3e5d9] text-black' : ''
                            } hover:text-[#7b828d] transition duration-300 px-4 py-2 rounded-full`}
                            onClick={() => handleLinkClick('projects')}
                        >
                            Projects
                        </a>
                        <a
                            href="#services"
                            className={`${
                                activeLink === 'services' ? 'bg-[#a3e5d9] text-black' : ''
                            } hover:text-[#7b828d] transition duration-300 px-4 py-2 rounded-full`}
                            onClick={() => handleLinkClick('services')}
                        >
                            Services
                        </a>
                        <a
                            href="#testimonials"
                            className={`${
                                activeLink === 'testimonials' ? 'bg-[#a3e5d9] text-black' : ''
                            } hover:text-[#7b828d] transition duration-300 px-4 py-2 rounded-full`}
                            onClick={() => handleLinkClick('testimonials')}
                        >
                            Testimonials
                        </a>
                        <a
                            href="#contact"
                            className={`${
                                activeLink === 'contact' ? 'bg-[#a3e5d9] text-black' : ''
                            } hover:text-[#7b828d] transition duration-300 px-4 py-2 rounded-full`}
                            onClick={() => handleLinkClick('services')}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10"><img src={bulb} alt="Bulb" /></div>
                <div className="absolute top-16 left-1/2 -translate-x-1/2">
                    <div className="w-7 h-8 bg-white rounded-full mt-14 ml-1 shadow-[0_0_100px_60px_rgba(255,255,255,0.3)]" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#4169E1]/10 blur-3xl rounded-full" />
            </div>

            {/* Concave curved shape at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-15 sm:h-20 ">
                <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 128" preserveAspectRatio="none">
                    <path fill="#ffffff" d="M0,0 C480,128 960,128 1440,0 L1440,128 L0,128 Z" />
                </svg>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 pt-50 pb-50 sm:pb-30 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-base md:text-[17px] xl:text-[18px] text-gray-300">Design So Simple, It Feels Like Magic</h2>
                    <h1 className="text-[34px] md:text-[40px] xl:text-[50px] font-bold text-white mb-4 md:leading-12 xl:leading-14 leading-11 mt-2">
                        Helping You <span className="bg-gradient-to-b from-[#a3e5d9] to-[#4fb1b2] bg-clip-text text-transparent">Stand Out</span> in a World of Scrolls and Clicks
                    </h1>
                    <p className="text-[18px] md:text-[20px] xl:text-[21px] text-gray-300 mb-8 sm:mb-4">
                        Hi, I'm Shubham, Website Developer & Designer
                    </p>

                        <div className="sm:flex hidden text-sm xl:text-base sm:flex-wrap justify-center gap-6 mb-5 p-4 rounded-lg">
                            <div className="flex items-center gap-2 text-gray-300">
                                <FaRocket className="text-lg text-[#70c7c0] "/>
                                <span>High Performance</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-300">
                                <FaDollarSign className="text-xl text-[#4fb1b2] "/>
                                <span>Affordable Pricing</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <FaPaintBrush className="text-lg text-[#4fb1b2] "/>
                                <span>Fully Customizable Design</span>
                            </div>
                        </div>

                    {/* Buttons without hover transform effect */}
                    <div className="flex gap-7 sm:gap-10 justify-center">
                        <div className="relative h-12 w-35 sm:h-13 sm:w-36 xl:w-41 xl:h-13 bg-black bg-opacity-95 cursor-pointer overflow-hidden box-hover rounded-lg">
                            <div className="rotate-gradient"></div>
                            <button
                                    onClick={() => {
                                        document.getElementById('projects').scrollIntoView({
                                            behavior: 'smooth', // Smooth scroll animation
                                            block: 'start' // Scroll to the top of the element
                                        });
                                    }}
                                    className={`bg-[#041b28]/90 cursor-pointer text-white hover:bg-gradient-to-b from-[#a3e5d9] to-[#4fb1b2] hover:text-black flex justify-center items-center gap-2 rounded-lg text-sm xl:text-base font-medium transition-all duration-300 absolute inset-0.5 bg-opacity-95 z-10 ${
                                        isHovered ? "shadow-lg" : ""
                                    }`}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    Recent Works  <CiLocationArrow1 />
                                </button>

                        </div>

                        <div className="relative h-12 w-34 sm:h-13 sm:w-35 xl:w-41 xl:h-13 bg-black bg-opacity-95 cursor-pointer overflow-hidden box-hover rounded-lg">
                            <div className="rotate-gradient"></div>
                            <a href='#contact'>
                            <button
                                className={`text-white cursor-pointer bg-[#041b28]/90 hover:bg-gradient-to-b from-[#a3e5d9] to-[#4fb1b2] hover:text-black rounded-lg text-sm xl:text-base font-medium transition-all duration-300 absolute inset-0.5 bg-opacity-95 flex justify-center items-center gap-2 z-10 ${
                                    isHovered ? "shadow-lg" : ""
                                }`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                Contact Me  <CiLocationArrow1 />
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;