import dynamic from "next/dynamic";
import "./globals.css";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export const metadata = {
  title: "255 Agency",
  description:
    "255 Is an adveritising agency offering a wide range of services, including Design and social media management, photography and video production, and many more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/255-logo.svg" />
      </head>
      <body className="relative w-full flex flex-col justify-between">
        <Header />
        <main className="z-10 w-full max-w-screen-xl mx-auto overflow-x-clip">
          <Container>{children}</Container>
        </main>
        <div className="h-screen fixed w-full top-0">
          <Scene />
        </div>
      </body>
    </html>
  );
}
