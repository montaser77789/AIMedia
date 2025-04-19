"use client";
import { Pages, Routes } from "@/components/constants/enum";
import Link from "@/components/link/Link";
import { buttonVariants } from "@/components/ui/button";
import { useParams, usePathname } from "next/navigation";

const AdminTabs = () => {
  const pathname = usePathname();
  const { locale } = useParams();

  const tabs = [
    {
      id: crypto.randomUUID(),
      title: "Dashboard",
      href: Routes.ADMIN,
    },
    {
      id: crypto.randomUUID(),
      title: "Questions",
      href: `${Routes.ADMIN}/${Pages.QUESTIONS}`,
    },
 
  ];
  const isActiveTab = (href: string) => {
    const hrefArray = href.split("/");
    return hrefArray.length > 1
      ? pathname.startsWith(`/${locale}/${href}`)
      : pathname === `/${locale}/${href}`;
  };
  return (
    <nav className="mt-20">
      <ul className="flex items-center flex-wrap gap-4 justify-center">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <Link
              href={`/${locale}/${tab.href}`}
              className={`hover:!text-white ${
                isActiveTab(tab.href)
                  ? buttonVariants({ variant: "default" })
                  : buttonVariants({ variant: "outline" })
              } `}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AdminTabs;
