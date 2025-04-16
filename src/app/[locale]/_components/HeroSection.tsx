import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image from "../../../../public/images/Frame 1039.png";
import { Translations } from "@/types/Translationx";

const HeroSection = ({ translations }: { translations: Translations }) => {
  return (
    <section
      className="min-h-screen w-full"
      style={{
        backgroundImage: `linear-gradient(135deg, #1e3a8a, #6d28d9, #ec4899, #f0f0ff)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-screen items-center justify-center text-white px-6 md:px-20">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center mt-30 lg:mt-0 items-center text-center md:items-start md:text-start gap-6">
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            dangerouslySetInnerHTML={{ __html: translations.hero.title }}
          />

          <p
            className="text-white/80 max-w-md leading-relaxed text-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: translations.hero.description }}
          />

          <div className="flex flex-wrap gap-4">
            <Button className="bg-lime-300 text-black px-6 py-2 rounded-full text-sm hover:bg-lime-400">
              {translations.hero.learn_more}
            </Button>
            <Button
              variant={"outline"}
              className="border-white text-white px-6 py-2 rounded-full text-sm"
            >
              {translations.hero.get_started}
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <SectionRight translations={translations} />
      </div>
    </section>
  );
};

export default HeroSection;

// RIGHT COMPONENT
const SectionRight = ({ translations }: { translations: Translations }) => {
  return (
    <div className="space-y-6 mt-8 md:mt-0">
      {/* PROJECTS BOX */}
      <div className="rounded-3xl bg-white/10 backdrop-blur-md p-6 space-y-4 text-white shadow-lg">
        <div className="flex items-center gap-4">
          <Image src={image} alt="projects" width={60} height={60} />
          <div>
            <h3 className="text-2xl font-bold">{translations.hero.projects}</h3>
            <p className="text-sm text-white/80">
              {translations.hero.projects_description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {/* Avatar Images placeholders */}
            <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white" />
            <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white" />
            <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white" />
          </div>
          <p className="text-white/90 text-sm">{translations.hero.clients}</p>
          <div className="flex items-center gap-1 text-yellow-400 text-sm">
            ★★★★★ <span className="text-white ml-1">4.7/5</span>
          </div>
        </div>
      </div>

      {/* TEAM CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TeamCard
          name={translations.hero.team.hanida.name}
          description={translations.hero.team.hanida.desc}
          bgColor="bg-pink-300"
        />
        <TeamCard
          name={translations.hero.team.gamalin.name}
          description={translations.hero.team.gamalin.desc}
          bgColor="bg-blue-300"
        />
      </div>
    </div>
  );
};

// TEAM CARD COMPONENT
const TeamCard = ({
  name,
  description,
  bgColor,
}: {
  name: string;
  description: string;
  bgColor: string;
}) => {
  return (
    <div className="rounded-3xl bg-white/10 backdrop-blur-md p-4 shadow-md text-white space-y-2">
      <div className={`w-14 h-14 rounded-full ${bgColor} mx-auto`} />
      <h4 className="text-center font-semibold">{name}</h4>
      <p className="text-sm text-white/80 text-center">{description}</p>
    </div>
  );
};
