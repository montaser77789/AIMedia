
"use client";
import { Smartphone, Eye, TrendingUp, Award } from 'lucide-react';
import Image from 'next/image';
import image from "../../../../public/images/aii-png.png"
// Service data with icons
const services = [
    {
      title: "Social Media Management",
      description: "We create and manage social media strategies that captivate, engage, and grow your audience. From content calendars to analytics—we turn followers into loyal fans.",
      icon: Smartphone,
    },
    {
      title: "Websites & Mobile Apps UX/UI Design",
      description: "Our team builds sleek, high-performance websites and mobile apps with user-centric UX/UI design focused on clean aesthetics and responsive performance.",
    },
    {
      title: "Customized Software Solutions",
      description: "Streamline your operations with custom software tailored to your business needs. We develop scalable systems that boost efficiency and drive smart growth.",
    },
    {
      title: "Strategic Marketing & Advertisement",
      description: "We develop strategic marketing campaigns and paid advertising solutions that get results, whether you're looking to generate leads or raise brand awareness.",
    },
    {
      title: "Public Relations (PR)",
      description: "Build credibility and media presence with our tailored PR services through media outreach, press releases, and strategic reputation management.",
    },
    {
      title: "Branding & Graphic Design",
      description: "We create bold, cohesive brand identities that make lasting impressions, from logo design to full branding systems.",
    },
    {
      title: "Shopify Websites & Setup",
      description: "Full Shopify setup—from website design and hosting to product integration—so you can start and scale your store with confidence.",
    },
    {
      title: "Video Production & Photography",
      description: "Bring your message to life with stunning visuals, from corporate videos to promotional shoots tailored to your brand story.",
    },
    {
      title: "Event Planning & Management",
      description: "Create memorable brand experiences with our event planning services for launches, activations, or private gatherings.",
    }
  ];
const WhatWeDo = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full md:w-[60%] h-full bg-gradient-to-r from-[#f7d9fb] to-white z-0" />
      
      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            We Combine <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Creativity</span> With Strategy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive services are designed to elevate your brand, engage your audience, and drive measurable results.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-xl mb-20 animate-scale-in">
          {/* Replace with your actual image */}
          <Image 
            src={image}
            alt="Creative team at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <h2 className="text-white text-2xl md:text-3xl font-bold max-w-2xl">
              Every project is designed with your business objectives in mind
            </h2>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
           <div 
           key={index}
           className="bg-white text-center p-8 rounded-3xl min-h-[350px] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
         >
           <div className="mb-6 m-auto">
             <Image
               src={image}
               width={100}
               height={100}
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
         </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-[#f7d9fb] to-[#B3E8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              We&apos;re Not Just Here To Create
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in delay-100">
              We&apos;re here to help you grow. Every project is designed to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 p-8 rounded-2xl shadow-xl hover:shadow-2xl backdrop-blur-sm transition-all duration-300 animate-fade-in-up group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mx-auto mb-6 text-white">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Boost Visibility</h3>
              <p className="text-gray-600 text-center">Increase your brand&apos;s presence across all platforms</p>
              <div className="mt-6 flex justify-center">
                <span className="h-1 w-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full group-hover:w-24 transition-all duration-300"></span>
              </div>
            </div>

            <div className="bg-white/90 p-8 rounded-2xl shadow-xl hover:shadow-2xl backdrop-blur-sm transition-all duration-300 animate-fade-in-up delay-100 group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-6 text-white">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Increase Conversions</h3>
              <p className="text-gray-600 text-center">Turn your audience into paying customers</p>
              <div className="mt-6 flex justify-center">
                <span className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full group-hover:w-24 transition-all duration-300"></span>
              </div>
            </div>

            <div className="bg-white/90 p-8 rounded-2xl shadow-xl hover:shadow-2xl backdrop-blur-sm transition-all duration-300 animate-fade-in-up delay-200 group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mx-auto mb-6 text-white">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Build Brand Equity</h3>
              <p className="text-gray-600 text-center">Create lasting value for your business</p>
              <div className="mt-6 flex justify-center">
                <span className="h-1 w-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full group-hover:w-24 transition-all duration-300"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default WhatWeDo;