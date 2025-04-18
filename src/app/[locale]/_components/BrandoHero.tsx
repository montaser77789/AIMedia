import React from "react";
import logo from "../../../../public/images/aii-png.png";
import logo2 from "../../../../public/images/aii-png - Copy.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const BrandoHero = () => {
  return (
    <section className="relative py-8 sm:py-12 lg:py-20 overflow-hidden">
      {/* Gradient overlay - responsive positioning */}
      <div className="absolute top-0 left-0 w-full md:w-[60%] h-full bg-gradient-to-r from-[#f7d9fb] to-white z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-black flex items-center justify-center relative z-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-10 items-center">
          {/* Image Column - Responsive adjustments */}
          <div className="relative md:mr-6 aspect-square w-full max-w-[400px]  md:max-w-[500px] mx-auto bg-white rounded-3xl md:rounded-4xl">
            {/* Top Right Card - Responsive positioning */}
            <div className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 lg:p-5 absolute top-2 sm:top-4 md:top-[-20px] right-2 sm:right-4 md:right-[-40px] lg:right-[-20px] rounded-3xl md:rounded-4xl z-50 shadow-lg">
              <Image
                src={logo2}
                alt="Brando Studio"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
              />
              <div className="flex flex-col text-xs sm:text-sm md:text-base">
                <span className="font-medium">Brando</span>
                <span className="text-black">@brando.studio</span>
              </div>
            </div>

            {/* Bottom Left Card - Responsive positioning */}
            <div className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 lg:p-5 absolute bottom-2 sm:bottom-4 md:bottom-[-20px] left-2 sm:left-4 md:left-[-40px] lg:left-[-60px] rounded-3xl md:rounded-4xl z-50 shadow-lg">
              <Image
                src={logo2}
                alt="Brando Studio"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
              />
              <div className="flex flex-col text-xs sm:text-sm md:text-base">
                <span className="font-medium">Brando</span>
                <span className="text-black">@brando.studio</span>
              </div>
            </div>

            {/* Main Image Container */}
            <div className="absolute inset-0 m-4 sm:m-6 md:m-8 lg:m-10 xl:m-14 bg-gradient-to-r from-[#211F97] to-[#F080DD] rounded-2xl md:rounded-3xl border-4 sm:border-6 md:border-8 border-[#B3E8FF]">
              <div className="w-full h-full flex items-center justify-center p-4">
                <Image 
                  src={logo} 
                  alt="Ai Media" 
                  width={300} 
                  height={300}
                  className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px]"
                />
              </div>
            </div>
          </div>

          {/* Text Column - Responsive adjustments */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 mt-8 md:mt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="block">Shaping Tomorrow&apos;s</span>
              <span className="block">Brands, Today</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed sm:leading-loose">
              At Ai Media, we don&apos;t just follow digital trends—we create them.
              We are a team of passionate innovators, strategists, and creators
              dedicated to shaping the future of brands in the ever-evolving
              digital world. Inspired by industry leaders like Nascode, we merge
              creativity with cutting-edge technology to deliver powerful
              results. From concept to execution, we transform your vision into
              a compelling digital experience. At Ai Media, we don&apos;t just build
              brands—we shape what&apos;s next.
            </p>

            <Button   className="rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandoHero;