import Container from "@/components/layout/Container";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[calc(100vh-500px)] bg-foreground py-24">
      <section className="h-[700px] bg-primary flex flex-col justify-center items-center overflow-hidden relative">
        <Image
          className="absolute w-screen bottom-0"
          src="/designs/heroPattern.png"
          width={2000}
          height={1000}
        />
        <h1 className="text-8xl font-bold z-20">UNLEASH BOLD IDEAS</h1>
        <p className="text-5xl pt-2 z-20">CREATE THE UNEXPECTED</p>
      </section>
      <section className="py-24">
        <Container>
          <p className="text-2xl text-primary">
            255 Advertising Agency was established in 2020 with a vision to
            elevate the standards of marketing, events, and social media
            solutions in Palestine. As a creative powerhouse, 255 specializes in
            delivering innovative, results-driven strategies tailored to the
            needs of businesses across various sectors. Since its founding, the
            agency has rapidly grown into a leading name in the industry, known
            for its fresh ideas, dynamic campaigns, and strong client
            relationships.
            <br />
            <br />
            With a talented and passionate team, 255 Advertising Agency serves a
            diverse client base—from startups to established brands—contributing
            to their growth, visibility, and success. Through our integrated
            approach and commitment to staying at the forefront of digital
            trends, we continue to shape impactful brand experiences and
            meaningful audience engagement across platforms.
          </p>
          <img
            src="https://placehold.co/1300x600"
            alt="about us image"
            className="w-full my-24 rounded-lg"
          />
          <p className="text-2xl text-primary">
            At 255 Advertising Agency, social and environmental responsibility
            has been a core value since our establishment in 2020. As we work to
            shape the future of branding and communication in Palestine, we
            recognize our role in building a more sustainable and inclusive
            society.
            <br />
            <br />
            We believe that impactful marketing goes beyond promotion—it drives
            positive change, supports communities, and reflects shared values.
            That's why we've integrated a broad sustainability vision into our
            operations, partnerships, and campaigns. For us, real progress
            starts at the community level. By empowering local businesses,
            supporting creative talent, and promoting purpose-driven
            initiatives, we help build a stronger social and economic
            foundation.
            <br />
            <br />
            At 255, we are committed to helping our clients and communities
            thrive—especially in challenging times. Whether through awareness
            campaigns, community engagement events, or strategic collaborations,
            we seek to open new doors, spark meaningful conversations, and
            deliver long-term value.
            <br />
            <br />
            We believe that by “doing good” in the marketing world—through
            ethical practices, inclusive storytelling, and responsible
            communication—we can be a catalyst for cultural, social, and
            economic development in Palestine and beyond.
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <img
              src="https://placehold.co/700x600"
              alt="about us image"
              className="mt-24 rounded-lg w-1/2"
            />
            <img
              src="https://placehold.co/700x600"
              alt="about us image"
              className="mt-24 rounded-lg w-1/2"
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default page;
