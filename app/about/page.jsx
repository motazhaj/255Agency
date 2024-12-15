import CallToAction from "@/components/CallToAction";
import PageOverlayed from "@/components/layout/PageOverlayed";
import PageHeader from "@/components/PageHeader";
import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const team = [
  {
    name: "John Doe",
    role: "CEO",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    image: "https://placehold.co/300x300",
  },
  {
    name: "John Doe",
    role: "Designer",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Jane Doe",
    role: "Developer",
    image: "https://placehold.co/300x300",
  },
  {
    name: "John Doe",
    role: "Accountant",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Jane Doe",
    role: "Designer",
    image: "https://placehold.co/300x300",
  },
];

const page = () => {
  return (
    <PageOverlayed title="About Us" image="https://placehold.co/1600x200">
      <div className="flex flex-col gap-8 text-foreground">
        <PageHeader
          text="Who are we?"
          subtext="Discover the heart of our agency and our commitment to making your brand stand out."
          className="text-primary font-extrabold text-3xl sm:text-4xl lg:text-5xl"
        />

        {/* Section 1: Mission Statement */}
        <section className="mission mx-auto">
          <div className=" mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Our Mission</h2>
            <p className="leading-relaxed text-xl text-foreground opacity-80 mt-4">
              We craft experiences, stories, and solutions that connect businesses to their audience
              in the most innovative way possible. Our mission is to help you grow and succeed by
              combining strategy, creativity, and technology.
            </p>
          </div>
        </section>

        {/* Section 2: Our Story */}
        <section className="our-story mx-auto mb-24">
          <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
            <div className="w-full lg:w-1/2">
              <img
                src="https://placehold.co/600x400"
                alt="Our Story"
                className="rounded-2xl shadow-lg transform transition duration-500 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">Our Story</h2>
              <p className="leading-relaxed text-xl text-foreground mt-4 opacity-80">
                Founded in 2010 by a small group of passionate creatives, our agency has evolved
                into a global leader in the advertising space. Our dedication to creativity,
                innovation, and client success has led us to work with top-tier brands around the
                world.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="why-choose-us bg-gradient-to-t rounded-2xl from-primary to-orange-500 text-background p-8 md:p-16">
          <div className="mx-auto ">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Us?</h2>
            <p className="leading-relaxed text-xl opacity-80 mt-4">
              We are more than just an agency. We are your partners in building a brand that
              resonates. Here's why clients choose us:
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                "Proven track record of delivering results",
                "Customized strategies tailored to your needs",
                "A creative, innovative team with diverse skills",
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <FaCheckSquare className="text-4xl text-foreground" />
                  <p className="text-xl">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 4: Meet the Team */}
        <section className="our-team w-full mx-auto my-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary  mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12">
            {team.map((person, index) => (
              <div
                key={index}
                className="team-member bg-foreground p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={person.image}
                  className="size-40 bg-background rounded-full mx-auto mb-4"
                ></img>
                <h3 className="text-xl font-semibold  text-primary">{person.name}</h3>
                <p className=" text-background">{person.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Client Testimonials */}
        <section className="testimonials mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary  mb-8">
            What Our Clients Say
          </h2>
          <div className="space-y-8">
            <div className="testimonial bg-foreground text-background p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <p className="text-lg italic">
                "This agency transformed our marketing strategy. Their creativity and innovation
                helped us achieve results beyond our expectations."
              </p>
              <p className="mt-4 text-primary font-semibold">Client Name, Company</p>
            </div>
            <div className="testimonial bg-foreground text-background p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <p className="text-lg italic">
                "We partnered with this agency for our latest campaign, and the results were
                phenomenal. They truly understand our vision and needs."
              </p>
              <p className="mt-4 text-primary font-semibold">Client Name, Company</p>
            </div>
          </div>
        </section>

        <CallToAction />
      </div>
    </PageOverlayed>
  );
};

export default page;
