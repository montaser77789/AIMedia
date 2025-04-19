"use client";
import { Routes } from "@/components/constants/enum";
import Link from "@/components/link/Link";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

interface Service {
  title: string;
  description: string;
  image: string;
}

const ItemServices = ({
  service,
  delay = 0,
}: {
  service: Service;
  delay?: number;
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={delay}
      className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
    >
      <div className="relative w-full h-52 sm:h-60 md:h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            {service.description}
          </p>
        </div>

        <div className="mt-6">
          <Link
            href={Routes.SERVICES}
            className="inline-flex items-center text-primary font-semibold text-sm hover:underline"
          >
            Learn more
            <svg
              className="ml-1 w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemServices;
