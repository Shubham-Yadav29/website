import { FaLaptopCode, FaMapMarkerAlt, FaSearch, FaPen , FaBullhorn,} from 'react-icons/fa';

    export default function AudienceSection() {
        const audiences = [
        {
            title: "Web Development",
            description:
            "We build fast, responsive, and visually striking websites that tell your brand's story and strengthen audience trust.",
            icon: FaLaptopCode,
        },
        {
            title: "Website SEO",
            description:
            "With in-depth keyword research and smart optimization, we help your website rank higher, attract traffic, and gain credibility.",
            icon: FaSearch,
        },
        {
            title: "GMB Optimisation",
            description:
            "An optimized Google Business Profile boosts visibility, attracts local customers, and reinforces your brand's trustworthiness.",
            icon: FaMapMarkerAlt,
        },
        {
            title: "Logo Designing",
            description:
            "We craft memorable and impactful logos that align with your brand identity, helping you stand out and make a lasting first impression.",
            icon: FaPen,
        },
        {
            title: "Digital Marketing",
            description:
                "We don't just market—we build momentum. Our digital strategies spark engagement, fuel conversions, and grow your brand everywhere it matters.",
            icon: FaBullhorn,
            },
        // {
        // title: "Content Strategy",
        // description:
        //     "Develop compelling content strategies that resonate with your target audience and establish your brand as an industry authority.",
        // icon: FaPen,
        // },
        // {
        // title: "Social Media Management",
        // description:
        //     "Comprehensive social media management to build your brand, engage your audience, and drive meaningful interactions across platforms.",
        // icon: FaUsers,
        // },
    ];
    return (
        <div id='services' className="min-h-screen bg-[#03222D] py-15 px-4">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center mb-7 text-5xl font-bold text-white">Services</h1>
            <h1 className="text-center mb-14 text-sm xl:text-base font-bold">
            <span className="text-[#fff]/60">Crafting professional websites for <span className="text-[#a3e5d9]">Businesses & Creators</span> ,ensuring a smooth, engaging digital experience that truly represents <span className="text-[#a3e5d9]">your</span> brand.
            </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((item, index) => (
                <div
                key={index}
                className="pb-5 relative p-6 rounded-lg border border-[#1e2d4d] bg-[#050E1E]/20 backdrop-blur-sm group hover:border-[#60A5FA]/30 transition-all duration-300"
                >
                <div className="flex flex-col gap-4 sticky">
                    <div className="text-[#4fb1b2] w-8 h-8  ">
                    <item.icon size={96} className="w-full h-full stroke-[1.5]" />
                    </div>
                    <h2 className="text-white text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-400 text-base">{item.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
    }


    