import getTrans from "@/lib/translation";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import BrandoHero from "./_components/BrandoHero";
import TeamSection from "./_components/TeamSection";
import AmazingServices from "./_components/Services/AmazingServices";
import { QuestionSection } from "./_components/QuestionSection";
import PartnersSection from "./_components/PartnersSection";
import HeroSection from "./_components/HeroSection";

export default async function Home() {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);
  return (
    <div>
      <HeroSection translations={translations}  />
      <BrandoHero />
      <TeamSection />
      <AmazingServices />
      <PartnersSection />
      <QuestionSection />
    </div>
  );
}

