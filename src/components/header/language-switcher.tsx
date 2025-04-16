"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { Languages } from "../constants/enum";
import { Button } from "../ui/button";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();

  const switchLanguage = (newLocale: string) => {
    const path =
      pathname?.replace(`/${locale}`, `/${newLocale}`) ?? `/${newLocale}`;
    router.push(path);
  };

  return (
    <div className="flex">
      {locale === Languages.ARABIC ? (
        <Button
          onClick={() => switchLanguage(Languages.ENGLISH)}
        >
          English
        </Button>
      ) : (
        <Button
          onClick={() => switchLanguage(Languages.ARABIC)}
        >
          العربية
        </Button>
      )}
    </div>
  );
};

export default LanguageSwitcher;