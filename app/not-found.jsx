import LinkButtonFill from "@/components/buttons/LinkButtonFill";
import PageOverlayed from "@/components/layout/PageOverlayed";
import PageHeader from "@/components/PageHeader";
import React from "react";

const NotFound = () => {
  return (
    <PageOverlayed title="404" image="https://placehold.co/1600x200">
      <PageHeader
        text="Page not found"
        subtext="it seems that you have entered an invalid URL"
        className="text-primary font-extrabold text-4xl sm:text-5xl lg:text-6xl"
      />
      <div className="mt-[100px] max-w-[200px] mx-auto">
        <LinkButtonFill href="/">Back to Home</LinkButtonFill>
      </div>
    </PageOverlayed>
  );
};

export default NotFound;
