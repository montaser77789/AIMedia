import getTrans from "@/lib/translation";
import HeroSection from "./_components/HeroSection";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

export default  async function Home() {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);
  return (
    <div >
      <HeroSection translations={translations} />
    </div>
  );
}
