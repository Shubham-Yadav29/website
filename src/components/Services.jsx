    import { FaLaptopCode, FaMapMarkerAlt, FaSearch, FaBullhorn, FaPen, FaUsers } from 'react-icons/fa';

    export default function AudienceSection() {
    const audiences = [
        {
        title: "Web Development",
        description:
            "We create websites that are not just fast and responsive but also beautifully designed to reflect your brand's unique story, building trust and connection with your audience.",
        icon: FaLaptopCode,  // Store the reference to the icon component
        },
        {
        title: "GMB Optimisation",
        description:
            "Tourists, visitors, and new customers use Google search to find you. Optimised Business profile builds credibility signalling your brand is reputable and trustworthiness.",
        icon: FaMapMarkerAlt,
        },
        {
        title: "Website SEO",
        description:
            "We specialize in SEO with expert keyword research, on-page optimization, and technical fixes. Our strategies boost your rankings, drive traffic, and build lasting online trust.",
        icon: FaSearch,
        },
        {
        title: "Digital Marketing",
        description:
            "Strategic digital marketing campaigns that drive engagement, convert leads, and grow your online presence across multiple channels.",
        icon: FaBullhorn,
        },
        {
        title: "Content Strategy",
        description:
            "Develop compelling content strategies that resonate with your target audience and establish your brand as an industry authority.",
        icon: FaPen,
        },
        {
        title: "Social Media Management",
        description:
            "Comprehensive social media management to build your brand, engage your audience, and drive meaningful interactions across platforms.",
        icon: FaUsers,
        },
    ];
    return (
        <div id='services' className="min-h-screen bg-[#03222D] py-15 px-4">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center mb-7 text-5xl font-bold text-white">Services</h1>
            <h1 className="text-center mb-14 text-base font-bold">
            <span className="text-[#fff]/60">Our team specializes in Professional <span className="text-[#a3e5d9]">Website Development</span> for Businesses, ensuring a seamless online presence
            that reflects your <span className="text-[#a3e5d9]">vision</span> and captivates your audience.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((item, index) => (
                <div
                key={index}
                className=" relative p-6 rounded-lg border border-[#1e2d4d] bg-[#050E1E]/20 backdrop-blur-sm group hover:border-[#60A5FA]/30 transition-all duration-300"
                >
                <div className="flex flex-col gap-4">
                    <div className="text-[#4fb1b2] w-10 h-10 ">
                    <item.icon size={96} className="w-full h-full stroke-[1.5]" />
                    </div>
                    <h2 className="text-white text-2xl font-semibold">{item.title}</h2>
                    <p className="text-gray-400 text-base">{item.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
    }

