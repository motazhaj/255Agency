import CallToAction from "@/components/CallToAction";
import ImageContentList from "@/components/content/ImageContentList";
import PageOverlayed from "@/components/layout/PageOverlayed";
import PageHeader from "@/components/PageHeader";
import React from "react";


const page = () => {
  return (
    <PageOverlayed title="Design" image="https://placehold.co/1600x200">
      <PageHeader
        text="Crafting Impactful Design Experiences"
        subtext="At 255, we transform ideas into visually stunning realities, helping businesses thrive through exceptional design solutions."
      />
      <div className="flex flex-col gap-16 items-center w-full">
        {/* Introduction */}
        <section>
          <p className="text-lg leading-relaxed text-foreground">
            At our company, we take pride in offering a broad range of creative design services that
            meet all your brand's needs. With a team of talented and creative designers, we work
            closely with you to create designs that express your vision and enhance your visual
            identity at every touchpoint. Here's a look at the services we offer:
          </p>
        </section>

        {/* Visual Identity Design */}
        <ImageContentList
          image="https://placehold.co/800x400"
          title="Visual Identity Design"
          description="Your brand's visual identity is the cornerstone of its recognition. We help you build:"
          points={[
            "Memorable logos and brand marks.",
            "Professional business cards, letterheads, and materials.",
            "A cohesive visual identity guide for brand consistency.",
          ]}
        />

        {/* Graphic Design */}

        <ImageContentList
          image="https://placehold.co/800x400"
          title="Graphic Design"
          description="Bring your brand to life with stunning visuals. We specialize in:"
          points={[
            "Creating advertisements, posters, and brochures.",
            "Designing infographics and annual reports.",
            "Developing promotional and advertising materials.",
          ]}
          flip
        />

        {/* Packaging Design */}
        <ImageContentList
          image="https://placehold.co/800x400"
          title="Packaging Design"
          description="We create innovative packaging that speaks to your audience by:"
          points={[
            "Designing attractive and functional product packaging.",
            "Aligning packaging solutions with your brand strategy.",
          ]}
        />

        <CallToAction />
      </div>
    </PageOverlayed>
  );
};

export default page;
