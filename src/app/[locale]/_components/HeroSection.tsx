"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AOS from "aos";
import "aos/dist/aos.css";
import { Translations } from "@/types/Translationx";

const images = [
  "https://cdn.prod.website-files.com/642acdbc8f82ca0bc204f698/645c83e76df474b979968a99_banner1.jpg",
  "https://cloudinary.hbs.edu/hbsit/image/upload/s--jcW2HPqC--/f_auto,c_fill,h_375,w_750,/v20200101/EA99CC738B99D0AA67987EC2976D550F.jpg",
  "https://assetdigitalcom.com/wp-content/uploads/2023/05/B2B-Digital-Marketing-Agency-scaled.jpeg",
];

const HeroSection = ({ translations }: { translations: Translations }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full h-[600px] md:min-h-screen overflow-hidden bg-black text-white">
      {/* النص */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6 sm:p-10 bg-black/50">
        <h1
          data-aos="fade-down"
          className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 mt-12 md:mt-0"
        >
          <span className="text-primary">{translations.hero.title}</span>
        </h1>
        <p
          data-aos="fade-up"
          className="max-w-3xl text-sm sm:text-base lg:text-lg text-gray-200"
        >
          {translations.hero.description}
        </p>
        <Button className="mt-6 rounded-full px-6 py-3 text-sm sm:text-base">
          {translations.hero.learn_more}
        </Button>
      </div>

      {/* السلايدر */}
      <div className="relative">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full h-[600px] md:min-h-screen overflow-hidden"
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="w-full relative">
                <div className="relative w-full h-[600px] md:min-h-screen">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {/* الظل الشفاف على الجانبين */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent z-10"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* الأسهم */}
          <CarouselPrevious className="absolute hidden sm:flex left-4 top-1/2 -translate-y-1/2 z-20 border-none bg-none bg-black/50 text-white w-12 h-12 text-2xl rounded-full" />
          <CarouselNext className="absolute right-4 hidden sm:flex top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white w-12 h-12 text-2xl rounded-full" />
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
