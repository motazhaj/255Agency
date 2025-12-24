import Footer from "@/components/layout/Footer";
import "./globals.css";
import Header from "@/components/layout/Header";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsent from "@/components/CookieConsent";
import CustomCursor from "@/components/CustomCursor";
import localFont from 'next/font/local';

const madaniArabic = localFont({
  src: [
    {
      path: '../../public/Madani-Arabic-Font-Family/Madani Arabic Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/Madani-Arabic-Font-Family/Madani Arabic Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/Madani-Arabic-Font-Family/Madani Arabic Extra Bold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-Madani-Arabic-Font-Family',
});

export const metadata = {
  title: "255 Agency - Creative Digital Solutions & Interactive Installations",
  description:
    "255 Agency is a Palestine-based digital advertising agency offering comprehensive services including design, social media management, photography, video production, and interactive digital installations.",
  keywords: "digital agency, advertising, design, social media, photography, video production, Palestine, creative agency",
  openGraph: {
    title: "255 Agency - Creative Digital Solutions",
    description: "Transform your ideas into exceptional experiences with our multidisciplinary team of designers, strategists, and innovators.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/255-logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${madaniArabic.className} ${madaniArabic.variable} relative w-full flex flex-col justify-between min-h-screen overflow-x-hidden`}>
        <CustomCursor />
        <SmoothScroll />
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="w-full flex-col gap-40 mx-auto overflow-x-clip">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
