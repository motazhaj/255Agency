import React from "react";
import Container from "./layout/Container";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const locations = [
  {
    name: "255 Nablus",
    address: "Saad Eddin Building, 2nd Floor, Al-Basateen, Nablus",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2386.6822253193277!2d35.25553044513798!3d32.223670317700254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce1b1af5cb07d%3A0x8393738a2be6be73!2s255%20Advertising%20Agancy!5e0!3m2!1sen!2s!4v1733661511451!5m2!1sen!2s",
  },
  {
    name: "255 Nazareth",
    address: "Tech Hub Tower, 5th Floor, Al-Masyoun, Ramallah",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2386.6822253193277!2d35.25553044513798!3d32.223670317700254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce1b1af5cb07d%3A0x8393738a2be6be73!2s255%20Advertising%20Agancy!5e0!3m2!1sen!2s!4v1733661511451!5m2!1sen!2s",
  },
  {
    name: "255 Dubai",
    address: "Business Bay Tower, Suite 800, Dubai, UAE",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2386.6822253193277!2d35.25553044513798!3d32.223670317700254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce1b1af5cb07d%3A0x8393738a2be6be73!2s255%20Advertising%20Agancy!5e0!3m2!1sen!2s!4v1733661511451!5m2!1sen!2s",
  },
];

const ContactUsSection = () => {
  return (
    <section>
      <Container>
        <h2 className="text-9xl tracking-widest font-bold mb-8 mt-20">
          Let's Connect
        </h2>
        <div className="text-center pt-8 flex gap-4">
          <div className="bg-white rounded-xl p-8 w-2/3">
            <iframe
              className="w-full h-[400px] md:h-[700px] rounded-2xl shadow-lg transform transition"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4773.4046173905535!2d35.255517961995544!3d32.222905400086574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce1b1af5cb07d%3A0x8393738a2be6be73!2s255%20Advertising%20Agancy!5e0!3m2!1sen!2s!4v1733662054166!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              title="Google Map Location"
            ></iframe>
          </div>{" "}
          <div className="w-1/3 bg-white text-background rounded-xl px-6 py-8">
            <div>
              <h2 className="text-4xl font-bold ">Find Us Here</h2>
              <p className="mt-4 text-xl text-semibold text-back ground">
                Our main headquarters is located in, Saad Eddin Building, 2nd
                Floor, Al-Basateen, Nablus
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-foreground text-background rounded-2xl p-8 flex flex-col gap-4"
                >
                  <h2 className="text-4xl font-bold text-primary">
                    {location.name}
                  </h2>
                  <p className="text-xl opacity-80">{location.address}</p>
                </div>
              ))}
            </div>
            <ul className="flex justify-between mt-4">
              <li className="flex items-center space-x-4">
                <FaPhone size={24} />
                <p className="text-xl">+970 599 999 999</p>
              </li>
              <li className="flex items-center space-x-4">
                <MdEmail size={28} />
                <p className="text-xl">info@255.com</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUsSection;
