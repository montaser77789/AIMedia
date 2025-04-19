import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Locale } from "@/i18n.config";
import { Directions, Languages } from "@/components/constants/enum";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import NextAuthSessionProvider from "../providers/NextAuthSessionProvider";


const robote = Roboto({
  subsets: ["latin"],

  weight: ["400", "500", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "AIMedia",
  description: "AIMedia",
  icons: {
    icon: "/ar/favicon.png",
  },
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const local = (await params).locale;
  return (
    <html
      lang={local}
      dir={local === Languages.ARABIC ? Directions.RTL : Directions.LTR}
    >
      <body className={robote.className}>
<NextAuthSessionProvider>

          <Header />
          <Toaster />

          {children}
          <Footer />
</NextAuthSessionProvider>
      </body>
    </html>
  );
}
