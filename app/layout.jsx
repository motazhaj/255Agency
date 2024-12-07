import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import ScrollToBottomButton from "@/components/layout/ScrollToBottom";

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
      <body className={inter.className + "relative w-full flex flex-col justify-between min-h-[160vh] md:min-h-[145vh]"}>
        <Header />
        <main className="z-10 w-full max-w-screen-2xl mx-auto">
          <Container>{children}</Container>
        </main>
        <Footer />
        <div className="h-screen fixed w-full top-0">
          <Scene />
        </div>
      </body>
    </html>
  );
}
