"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  // احصل على اللغة الحالية من المسار
  const locale = pathname.startsWith('/ar') ? 'ar' : 'en';

  const switchLanguage = (newLocale: string) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`) ?? `/${newLocale}`;
    router.push(path);
  };

  return (
    <div className="flex">
      {locale === 'ar' ? (
        <Button onClick={() => switchLanguage('en')}>
          English
        </Button>
      ) : (
        <Button onClick={() => switchLanguage('ar')}>
          العربية
        </Button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
