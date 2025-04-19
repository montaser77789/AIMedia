import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyWork = [
  {
    id: 1,
    title: "Work 1",
    description: "Description of Work 1",
    date: "2023-10-15",
    image:
      "https://cdn.prod.website-files.com/643502b2111f060f3c9b12d2/669e2b195430668a29b49e5e_st_regis_residences.jpg",
    images: [
      {
        id: 1,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
      },
      {
        id: 2,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
      },
    ],
  },
  {
    id: 2,
    title: "Work 2",
    description: "Description of Work 2",
    date: "2023-10-15",
    image:
      "https://cdn.prod.website-files.com/643502b2111f060f3c9b12d2/669e2b195430668a29b49e5e_st_regis_residences.jpg",
    images: [
      {
        id: 1,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
      },
      {
        id: 2,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
      },
    ],
  },
  {
    id: 3,
    title: "Work 3",
    description: "Description of Work 3",
    date: "2023-10-15",
    image:
      "https://cdn.prod.website-files.com/643502b2111f060f3c9b12d2/669e2b195430668a29b49e5e_st_regis_residences.jpg",
    images: [
      {
        id: 1,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
      },
      {
        id: 2,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
      },
    ],
  },
  {
    id: 4,
    title: "Work 4",
    description: "Description of Work 4",
    date: "2023-10-15",
    image:
      "https://cdn.prod.website-files.com/643502b2111f060f3c9b12d2/669e2b195430668a29b49e5e_st_regis_residences.jpg",
    images: [
      {
        id: 1,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
      },
      {
        id: 2,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kJO8moJNb0YG6VlaUTU4VQlQla5PDw9dYA&s",
      },
    ],
  },
];
const OurWork = async () => {
    const locale = await getCurrentLocale();
  
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-white text-black">
      <div className="container mx-auto   relative z-10">
        <h2 className="text-3xl font-bold text-center mb-10">All Our Work</h2>
        <p> </p>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {MyWork.map((work) => (
            <Card
              key={work.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={work.image}
                  alt={work.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white space-y-3">
                  <h3 className="text-xl font-semibold">{work.title}</h3>
                  <Link href={`${locale}/our-work/${work.id}`}>
                    <Button variant={"outline"}>View Project</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Gradient background on the left */}
      <div className="absolute top-0 left-0 w-full md:w-[60%] h-full bg-gradient-to-r from-[#f7d9fb] to-white z-0" />
    </section>
  );
};
export default OurWork;
