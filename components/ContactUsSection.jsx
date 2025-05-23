import React from "react";
import Container from "./layout/Container";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { contactInfo } from "@/data/data";
import Link from "next/link";

const ContactUsSection = () => {
  return (
    <section>
      <Container>
        <h2 className="text-5xl md:text-9xl tracking-widest font-bold mb-8 mt-20">
          Let's Connect
        </h2>
        <div className="text-center pt-8 flex gap-4 flex-col md:flex-row">
          <div className="bg-foreground rounded-xl p-4 w-full md:w-2/3">
            <iframe
              className="w-full h-full min-h-[400px] rounded-2xl shadow-lg transform transition"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4773.4046173905535!2d35.255517961995544!3d32.222905400086574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce1b1af5cb07d%3A0x8393738a2be6be73!2s255%20Advertising%20Agancy!5e0!3m2!1sen!2s!4v1733662054166!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              title="Google Map Location"
            ></iframe>
          </div>
          <div className="w-full md:w-1/3 bg-foreground text-background rounded-xl px-6 py-8">
            <div>
              <h2 className="text-4xl font-bold ">Find Us Here</h2>
              <p className="mt-4 text-xl text-semibold text-back ground">
                Our main headquarters is located in, Saad Eddin Building, 2nd
                Floor, Al-Basateen, Nablus
              </p>
            </div>
            <ul className="flex gap-8 justify-center">
              <li>
                <Link
                  href={contactInfo[0].whatsappLink}
                  className="flex items-center space-x-2 hover:scale-110 duration-200"
                  target="_blank"
                >
                  <FaWhatsapp size={24} />
                  <p className="text-xl">{contactInfo[0].email}</p>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href={`mailto:${contactInfo[0].email}`}
                  className="flex items-center space-x-2 hover:scale-110 duration-200"
                  target="_blank"
                >
                  <MdEmail size={28} />
                  <p className="text-xl">{contactInfo[0].phone}</p>
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-4">
              {contactInfo.map((location, index) => (
                <div
                  key={index}
                  className="bg-foreground drop-shadow-lg text-background rounded-2xl p-8 flex flex-col gap-4"
                >
                  <h2 className="text-4xl font-bold text-primary">
                    {location.name}
                  </h2>
                  <p className="text-xl opacity-80">{location.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsSection;
