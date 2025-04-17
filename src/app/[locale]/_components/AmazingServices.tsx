import Image from "next/image";
import image from "../../../../public/images/Ellipse111.png";
import Link from "@/components/link/Link";
import { Routes } from "@/components/constants/enum";

const AmazingServices = () => {
  const services = [
    {
      title: "Social Media Management",
      description: "We create and manage social media strategies that captivate, engage, and grow your audience. From content calendars to analytics—we turn followers into loyal fans."
    },
    {
      title: "Websites & Mobile Apps UX/UI Design",
      description: "Our team builds sleek, high-performance websites and mobile apps with user-centric UX/UI design focused on clean aesthetics and responsive performance."
    },
    {
      title: "Customized Software Solutions",
      description: "Streamline your operations with custom software tailored to your business needs. We develop scalable systems that boost efficiency and drive smart growth."
    },

  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full md:w-[60%] h-full bg-gradient-to-r from-[#f7d9fb] to-white z-0" />

      <div className="container  px-4 sm:px-6 lg:px-8 text-black relative">
        {/* Section title */}
        <div className="relative z-10 text-center mb-12 sm:mb-16 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6 md:mb-0 md:w-[55%] text-left">
            Our Services: <br />
            Empowering Brands to Stand Out
          </h2>
          <p className="text-base sm:text-sm md:text-md lg:text-lg md:w-[40%] text-left">
            At Ai Media, we deliver a full suite of digital, creative, and
            strategic solutions designed to strengthen your brand, connect with
            your audience, and drive lasting success. From engaging content to
            tailored technology, we bring ideas to life with impact and
            precision.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white text-center p-8 rounded-3xl min-h-[400px] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 m-auto">
                <Image
                  src={image}
                  width={80}
                  height={80}
                  alt={`${service.title} Icon`}
                  className="object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-md text-gray-600">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 text-left">
              <span className="inline-flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                <Link  href={Routes.SERVICES}>Learn more</Link>
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AmazingServices;