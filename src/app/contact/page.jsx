import React from "react";
import { MessageCircle, Mail } from "lucide-react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/ContactForm";
import { contactInfo } from "@/data/data";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100vh-500px)] bg-foreground text-background py-24">
      <section className="h-[300px] bg-primary flex flex-col justify-center items-center overflow-hidden relative drop-shadow-lg">
        <Image
          className="absolute w-screen object-cover bottom-0"
          src="/designs/heroPattern.webp"
          width={2000}
          height={1000}
          alt=""
          loading="lazy"
          quality={70}
        />
        <h1 className="text-4xl md:text-8xl font-bold z-20 text-foreground">
          Contact Us!
        </h1>
      </section>
      <section className="py-20">
        <Container>
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Left: Contact Form */}
              <div>
                <ContactForm />
              </div>
              
              {/* Right: Location Cards in 2x2 grid */}
              <div className="grid grid-cols-2 gap-3 auto-rows-fr">
                {contactInfo.map((location, index) => {
                  const cityImages = [
                    '/cities/nablus.jpg', // Nablus
                    '/cities/nazareth.jpg', // Nazareth
                    '/cities/riyadh.jpg', // Riyadh
                    '/cities/houston.jpg' // Houston/Texas
                  ];
                  
                  return (
                    <div
                      key={index}
                      className="relative rounded-xl p-3 flex flex-col justify-center overflow-hidden h-[170px]"
                    >
                      {/* City View Image Background */}
                      <Image
                        src={cityImages[index]}
                        alt={`${location.address} city view`}
                        fill
                        className="object-cover z-0"
                        style={{
                          filter: 'brightness(0.7)'
                        }}
                      />
                      
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      
                      {/* Content */}
                      <div className="relative z-20 p-4">
                        <Image
                          src="/255-logo-white.svg"
                          alt="255 Logo"
                          width={60}
                          height={30}
                          className="mb-1.5"
                        />
                        <p className="text-lg text-white/95 drop-shadow-md leading-snug whitespace-pre-line font-medium">
                          {location.address}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          
          <section className="bg-gradient-to-t rounded-2xl bg-primary text-foreground mb-4 p-4 drop-shadow-lg">
            <div className="text-center pt-8">
              <h2 className="text-4xl font-bold">Contact Info!</h2>
              <ul className="flex gap-8 justify-center">
                <li>
                  <Link
                    href={contactInfo[0].whatsappLink}
                    className="flex items-center space-x-2 hover:scale-110 duration-200"
                    target="_blank"
                  >
                    <MessageCircle size={24} />
                    <p className="text-2xl">{contactInfo[0].phone}</p>
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    href={`mailto:${contactInfo[0].email}`}
                    className="flex items-center space-x-2 hover:scale-110 duration-200"
                    target="_blank"
                  >
                    <Mail size={28} />
                    <p className="text-2xl">{contactInfo[0].email}</p>
                  </Link>
                </li>
              </ul>
              <h2 className="text-4xl font-bold mt-8">Find Us Here</h2>
              <p className="mt-4 text-xl text-semibold text-back ground">
                Our main headquarters is located in, Saad Eddin Building, 2nd
                Floor, Al-Basateen, Nablus
              </p>
              <div className="mt-8">
                <iframe
                  className="w-full h-[400px] md:h-[800px] rounded-2xl shadow-lg transform transition"
                  src={contactInfo[0].mapLink}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map Location"
                ></iframe>
              </div>
            </div>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
