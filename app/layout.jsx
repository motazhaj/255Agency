import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Header from "@/components/layout/Header";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "255 Agency",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/255-logo.svg" />
      </head>
      <body className={inter.className + "relative w-full flex justify-center"}>
        <Header />
        <main className="absolute z-10 w-full max-w-screen-lg mt-32">{children}</main>
        <div className="h-screen fixed w-full top-0">
          <Scene />
        </div>
      </body>
    </html>
  );
}
