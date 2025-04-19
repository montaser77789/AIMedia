"use client";
import Image from "next/image";
import logo1 from "../../../../public/logos/0088.png";
import logo2 from "../../../../public/logos/GS_LOGO.png";
import logo4 from "../../../../public/logos/VET-LOGO.png";
import logo5 from "../../../../public/logos/lOGO222-png.png";
import logo7 from "../../../../public/logos/png-logo-2.png";
import logo8 from "../../../../public/logos/red zaman logo copy.png";
import logo9 from "../../../../public/logos/0088.png";
import logo10 from "../../../../public/logos/novotel-logo-1-1.png";
import logo11 from "../../../../public/logos/ooredoo.png";
import logo12 from "../../../../public/logos/pdo.png";
import logo13 from "../../../../public/logos/red zaman logo copy.png";
import logo14 from "../../../../public/logos/sheraton.png";
import logo15 from "../../../../public/logos/sohar logo.png";


const PartnersSection = () => {
  const PartnersLogos = [logo1, logo2, logo4, logo5, logo7, logo8 , logo9, logo10 , logo11 , logo12 , logo13 , logo14 , logo15];

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with the best brands to deliver exceptional results
          </p>
        </div>

        {/* Logo marquee container */}
        <div className="relative">
          {/* First marquee row */}
          <div className="flex mb-8">
            <div className="animate-marquee flex space-x-8 pr-8">
              {PartnersLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center p-1 transition-all duration-300 hover:grayscale-0 grayscale"
                  style={{ width: "160px", height: "160px" }}
                >
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    width={120}
                    height={120}
                    className="w-[140px] h-[140px] object-contain"
                  />
                </div>
              ))}
            </div>
            <div
              className="animate-marquee flex space-x-8 pr-8"
              aria-hidden="true"
            >
              {PartnersLogos.map((logo, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex-shrink-0 flex items-center justify-center p-1 grayscale"
                  style={{ width: "160px", height: "160px" }}
                >
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;