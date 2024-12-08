import React from "react";
import PageOverlayed from "@/components/layout/PageOverlayed";
import PageHeader from "@/components/PageHeader";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const locations = [
  {
    name: "255 Nablus",
    address: "Saad Eddin Building, 2nd Floor, Al-Basateen, Nablus",
    phone: "+970 566 255 255",
    email: "hq@agency.com",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2386.6822253193277!2d35.25553044513798!3d32.223670317700254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce1b1af5cb07d%3A0x8393738a2be6be73!2s255%20Advertising%20Agancy!5e0!3m2!1sen!2s!4v1733661511451!5m2!1sen!2s",
  },
  {
    name: "255 Nazareth",
    address: "Tech Hub Tower, 5th Floor, Al-Masyoun, Ramallah",
    phone: "+970 566 255 255",
    email: "ramallah@agency.com",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2386.6822253193277!2d35.25553044513798!3d32.223670317700254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce1b1af5cb07d%3A0x8393738a2be6be73!2s255%20Advertising%20Agancy!5e0!3m2!1sen!2s!4v1733661511451!5m2!1sen!2s",
  },
  {
    name: "255 Dubai",
    address: "Business Bay Tower, Suite 800, Dubai, UAE",
    phone: "+970 566 255 255",
    email: "dubai@agency.com",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2386.6822253193277!2d35.25553044513798!3d32.223670317700254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce1b1af5cb07d%3A0x8393738a2be6be73!2s255%20Advertising%20Agancy!5e0!3m2!1sen!2s!4v1733661511451!5m2!1sen!2s",
  },
];

const ContactPage = () => {
  return (
    <PageOverlayed title="Contact Us" image="https://placehold.co/1600x200">
      <PageHeader
        text="Get in Touch"
        subtext="We're here to help. Reach out to us for inquiries, partnerships, or just to say hi!"
        className="text-primary font-extrabold text-4xl sm:text-5xl lg:text-6xl"
      />
      <div className="flex flex-col gap-24">
        <section className="p-8 rounded-2xl bg-gradient-to-t from-primary to-orange-500 text-background text-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-5xl font-bold">
              Let's Build Something <span className="text-foreground">Amazing</span> Together
            </h2>
            <p className="text-xl opacity-90">
              Your success is our passion. Let's create unforgettable campaigns, remarkable
              experiences, and lasting partnerships. Reach out today and let's make it happen!
            </p>
            <div className="flex gap-4 justify-center">
              <a href="mailto:connect@agency.com">
                <button className="px-8 py-4 text-xl font-bold bg-background text-primary rounded-lg shadow-md transform transition hover:scale-105">
                  info@255.com
                </button>
              </a>
              <a href="tel:+970566255255">
                <button className="px-8 py-4 text-xl font-bold bg-background text-primary rounded-lg shadow-md transform transition hover:scale-105">
                  +970 566 255 255
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-background text-foreground">
          <div className="flex justify-start gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="w-1/3 bg-foreground text-background rounded-2xl p-8 flex flex-col gap-4"
              >
                <h2 className="text-4xl font-bold text-primary">{location.name}</h2>
                <p className="text-xl opacity-80">{location.address}</p>

                <ul className="flex flex-col gap-4">
                  <li className="flex items-center space-x-4">
                    <FaPhone size={24} />
                    <p className="text-xl">{location.phone}</p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <MdEmail size={28} />
                    <p className="text-xl">{location.email}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="p-8 bg-gradient-to-t rounded-2xl from-primary to-orange-500 text-background">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-background">Find Us Here</h2>
            <p className="mt-4 text-xl text-semibold text-back ground">
              Our main headquarters is located in, Saad Eddin Building, 2nd Floor, Al-Basateen,
              Nablus
            </p>

            <div className="mt-8">
              <iframe
                className="w-full h-[600px] rounded-2xl shadow-lg transform transition"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4773.4046173905535!2d35.255517961995544!3d32.222905400086574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce1b1af5cb07d%3A0x8393738a2be6be73!2s255%20Advertising%20Agancy!5e0!3m2!1sen!2s!4v1733662054166!5m2!1sen!2s"
                allowFullScreen=""
                loading="lazy"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </PageOverlayed>
  );
};

export default ContactPage;
