import React, { useEffect, useState } from 'react';
import { FaRocket, FaDollarSign, FaPaintBrush } from 'react-icons/fa';
import { CiLocationArrow1 } from "react-icons/ci";

const Hero = ({bulb}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollingUp, setScrollingUp] = useState(true);

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
    };

    return (
        <div id="home" className="bg-gradient-to-b from-[#050E1E] via-[#03222D] to-[#1C5B6C] relative overflow-hidden">
            <nav
                className={`bg-transparent pt-4 fixed top-0 left-0 right-0 z-20 backdrop-blur-md transition-transform duration-300 ${
                    scrollingUp ? 'transform translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="container mx-auto flex justify-center items-end px-4 z-10 backdrop-blur-md">
                    <div className="flex gap-4 text-white border-2 border-white p-1 rounded-full px-1">
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
            <div className="absolute bottom-0 left-0 right-0 h-32">
                <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 128" preserveAspectRatio="none">
                    <path fill="#ffffff" d="M0,0 C480,128 960,128 1440,0 L1440,128 L0,128 Z" />
                </svg>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 pt-50 pb-25 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-xl text-gray-300">Design So Simple, It Feels Like Magic</h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-[4.5rem]">
                        Helping You <span className="bg-gradient-to-b from-[#a3e5d9] to-[#4fb1b2] bg-clip-text text-transparent">Stand Out</span> in a World of Scrolls and Clicks
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Hi, I'm Shubham, founder of Glizz Media.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 mb-5 p-4 rounded-lg">
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
                    <div className="flex gap-10 justify-center">
                        <div className="relative w-47 h-14 bg-black bg-opacity-95 cursor-pointer overflow-hidden box-hover rounded-lg">
                            <div className="rotate-gradient"></div>
                            <button
                                    onClick={() => {
                                        document.getElementById('projects').scrollIntoView({
                                            behavior: 'smooth', // Smooth scroll animation
                                            block: 'start' // Scroll to the top of the element
                                        });
                                    }}
                                    className={`bg-[#041b28] cursor-pointer text-white hover:bg-gradient-to-b from-[#a3e5d9] to-[#4fb1b2] hover:text-black flex justify-center items-center gap-2 rounded-lg text-base font-medium transition-all duration-300 absolute inset-0.5 bg-opacity-95 z-10 ${
                                        isHovered ? "shadow-lg" : ""
                                    }`}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    Recent Works  <CiLocationArrow1 />
                                </button>

                        </div>

                        <div className="relative w-46 h-14 bg-black bg-opacity-95 cursor-pointer overflow-hidden box-hover rounded-lg">
                            <div className="rotate-gradient"></div>
                            <button
                                className={`text-white cursor-pointer bg-[#041b28] hover:bg-gradient-to-b from-[#a3e5d9] to-[#4fb1b2] hover:text-black rounded-lg text-base font-medium transition-all duration-300 absolute inset-0.5 bg-opacity-95 flex justify-center items-center gap-2 z-10 ${
                                    isHovered ? "shadow-lg" : ""
                                }`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                Get on Call  <CiLocationArrow1 />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
