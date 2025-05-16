import Footer from "@/components/layout/Footer";
import "./globals.css";
import Header from "@/components/layout/Header";

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
        <main className="w-full flex-col gap-40 mx-auto overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
