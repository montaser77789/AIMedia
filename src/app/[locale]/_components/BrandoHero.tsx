"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

const BrandoHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative py-8 sm:py-12 lg:py-20 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full md:w-[60%] h-full bg-gradient-to-r from-[#f7d9fb] to-white z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-black flex items-center justify-center relative z-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-10 items-center">
          {/* Image Column */}
          <div
            data-aos="fade-up"
            className="relative  aspect-square w-full max-w-[400px] md:max-w-[500px] mx-auto bg-white rounded-3xl md:rounded-4xl"
          >
            {/* Main Image */}
            <div className="absolute inset-0 m-4 sm:m-6 md:m-8 lg:m-10 xl:m-14 bg-gradient-to-r from-[#211F97] to-[#F080DD] rounded-2xl md:rounded-3xl border-4 sm:border-6 md:border-8 border-[#B3E8FF]">
              <div className="w-full h-full flex items-center justify-center p-4">
                <Image
                  src="https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/digital-marketing-header.jpg?itok=YZDb8Tug"
                  alt="Ai Media"
                  width={300}
                  height={300}
                  className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px]"
                />
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div
            data-aos="fade-left"
            className="space-y-4 sm:space-y-6 lg:space-y-8 mt-8 md:mt-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="block">Shaping Tomorrow&apos;s</span>
              <span className="block">Brands, Today</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed sm:leading-loose">
              At Ai Media, we don&apos;t just follow digital trends—we create
              them. We are a team of passionate innovators, strategists, and
              creators dedicated to shaping the future of brands in the
              ever-evolving digital world. Inspired by industry leaders like
              Nascode, we merge creativity with cutting-edge technology to
              deliver powerful results. From concept to execution, we transform
              your vision into a compelling digital experience. At Ai Media, we
              don&apos;t just build brands—we shape what&apos;s next.
            </p>

            <Button className="rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandoHero;
