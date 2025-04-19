"use client";
import React from "react";
import imageProfile from "../../../../public/images/Ellipse111.png";
import Image from "next/image";

const TeamSection = () => {
  // Team data array
  const teamMembers = [
    { name: "Tarek Y.", role: "Marketing Director", image: imageProfile },
    { name: "Jana M.", role: "Business Development Manager" },
    { name: "Abeer Mh.", role: "Content Strategist", image: imageProfile },
    { name: "Doaa' K.", role: "Senior Graphic Designer" },
    { name: "Karim S.", role: "Senior Video Editor" },
    { name: "Omar M.", role: "Motion Graphics Designer" },
    {
      name: "Mohamad G.",
      role: "Videographer & Drone Operator",
      image: imageProfile,
    },
    { name: "Sherina A.", role: "Lifestyle & Product Photographer" },
    { name: "Lina F.", role: "Social Media Manager" },
    { name: "Sam R.", role: "UI/UX Designer" },
    { name: "Huda B.", role: "Copywriter" },
    {
      name: "Nabil T.",
      role: "Digital Advertising Specialist (Meta & Google Ads)",
    },
    { name: "Rami D.", role: "Account Manager" },
    { name: "Yasmin K.", role: "Community Manager" },
    { name: "Montaser H.", role: "Web Developer" },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full md:w-[60%] h-full bg-gradient-to-r from-[#f7d9fb] to-white z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-black relative">
        {/* Section title */}
        <div className="relative z-10 text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black">
            Crafting Excellence <br /> The People Behind Our Brand
          </h2>
        </div>

        {/* First scrolling row (left to right) */}
        <div className="relative mb-8 overflow-hidden">
          <div className="animate-scrollLeft flex gap-4 w-max">
            {teamMembers.slice(0, 8).map((member, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white shadow-sm min-w-[250px] rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-600">
                    {member.image ? (
                      <>
                        {console.log(member.image)}
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={100}
                          height={100}
                        />
                      </>
                    ) : (
                      member.name.charAt(0)
                    )}
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {teamMembers.slice(0, 8).map((member, index) => (
              <div
                key={`dup-${index}`}
                className="flex items-center gap-4 bg-white shadow-sm min-w-[250px] rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-600">
                    {member.image ? (
                      <>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={100}
                          height={100}
                        />
                      </>
                    ) : (
                      member.name.charAt(0)
                    )}
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second scrolling row (right to left) */}
        <div className="relative overflow-hidden">
          <div className="animate-scrollRight flex gap-4 w-max">
            {teamMembers.slice(8).map((member, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white shadow-sm min-w-[250px] rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-600">
                    {member.image ? (
                      <>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={100}
                          height={100}
                        />
                      </>
                    ) : (
                      member.name.charAt(0)
                    )}
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {teamMembers.slice(8).map((member, index) => (
              <div
                key={`dup-${index}`}
                className="flex items-center gap-4 bg-white shadow-sm min-w-[250px] rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-600">
                    {member.image ? (
                      <>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={100}
                          height={100}
                        />
                      </>
                    ) : (
                      member.name.charAt(0)
                    )}
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scrollLeft {
          animation: scrollLeft 30s linear infinite;
        }
        .animate-scrollRight {
          animation: scrollRight 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
