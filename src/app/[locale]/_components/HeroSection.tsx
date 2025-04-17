"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Translations } from "@/types/Translationx";
import logo from "../../../../public/images/aii-png - Copy.png";
import background from "../../../../public/images/SECTIONHERO.png";

export const HeroSection = ({ translations }: { translations: Translations }) => {
  return (
    <section
      className="min-h-screen  w-full relative overflow-hidden"
      style={{
        backgroundImage: `url('${background.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-screen items-center justify-center text-white px-4 md:px-20">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center mt-30 lg:mt-0 items-center text-center md:items-start md:text-start gap-6 z-10">
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            dangerouslySetInnerHTML={{ __html: translations.hero.title }}
          />

          <p
            className="text-white/80 max-w-md leading-relaxed text-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: translations.hero.description }}
          />

          <div className="flex flex-wrap gap-4">
            <Button className="bg-lime-300 text-black px-6 py-2 rounded-full text-sm hover:bg-lime-400 transition-colors">
              {translations.hero.learn_more}
            </Button>
            <Button
              variant={"outline"}
              className="border-white text-white px-6 py-2 rounded-full text-sm hover:bg-white/10 transition-colors"
            >
              {translations.hero.get_started}
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <SectionRight  />
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes ultraFastFade {
          0% {
            opacity: 0;
            transform: scale(1.05);
          }
          15% {
            opacity: 1;
            transform: scale(1);
          }
          30% {
            opacity: 1;
            transform: scale(1);
          }
          45% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 0;
            transform: scale(1.05);
          }
        }
        .animate-ultraFastFade {
          animation: ultraFastFade 6s infinite ease-in-out;
        }
        @keyframes progressBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-progressBar {
          animation: progressBar linear infinite;
        }
      `}</style>
    </section>
  );
};

// RIGHT COMPONENT
const SectionRight = () => {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
  ];

  return (
    <div className="space-y-6 mt-8 md:mt-0 relative">
      {/* Logo with animated background */}
      <div
        className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden bg-black/20 
        border border-white/10 shadow-2xl hover:shadow-white/20 transition-all duration-500"
      >
        <>
          {/* Animated background images */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {backgroundImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Background ${index + 1}`}
                  fill
                  className="object-cover animate-ultraFastFade absolute opacity-0"
                  style={{
                    animationDelay: `${index * 1.2}s`,
                  }}
                  quality={80}
                  loading="eager"
                  priority={index === 0}
                />
              ))}
            </div>
          </div>

          {/* Transparent logo */}
          <div className="absolute  inset-0 top-0 right-0  flex items-center justify-center z-10 p-4">
            <Image
              src={logo}
              alt="Company Logo"
              width={400}
              height={400}
              className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          {/* Progress indicators */}
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
            {backgroundImages.map((_, index) => (
              <div
                key={index}
                className="h-1 w-8 bg-white/30 rounded-full overflow-hidden"
              >
                <div
                  className="h-full bg-white animate-progressBar"
                  style={{
                    animationDuration: `${backgroundImages.length * 1.2}s`,
                    animationDelay: `${index * 1.2}s`,
                  }}
                />
              </div>
            ))}
          </div>
        </>
      </div>
    </div>
  );
};

// TEAM CARD COMPONENT
// const TeamCard = ({
//   name,
//   description,
//   bgColor,
// }: {
//   name: string;
//   description: string;
//   bgColor: string;
// }) => {
//   return (
//     <div className="rounded-3xl bg-white/10 backdrop-blur-md p-4 shadow-md text-white space-y-2 hover:bg-white/20 transition-all duration-300">
//       <div
//         className={`w-14 h-14 rounded-full ${bgColor} mx-auto flex items-center justify-center text-2xl font-bold`}
//       >
//         {name.charAt(0)}
//       </div>
//       <h4 className="text-center font-semibold">{name}</h4>
//       <p className="text-sm text-white/80 text-center">{description}</p>
//     </div>
//   );
// };

// export default HeroSection;
