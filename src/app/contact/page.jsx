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
            <ContactForm />
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
          <section className="text-foreground drop-shadow-lg">
            <div className="flex flex-col lg:flex-row justify-start gap-4">
              {contactInfo.map((location, index) => (
                <div
                  key={index}
                  className="lg:w-1/2 bg-primary text-foreground rounded-2xl p-8 flex flex-col gap-4"
                >
                  <h2 className="text-4xl font-bold text-foreground">
                    {location.name}
                  </h2>
                  <p className="text-xl opacity-80">{location.address}</p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
