import Container from "@/components/layout/Container";
import React from "react";

const NotFound = () => {
  return (
    <Container>
      <section className="bg-background/60 backdrop-blur-lg w-full h-[400px] rounded-xl flex justify-center items-center mt-24">
        <h2 className="text-2xl font-bold text-primary px-4">404: Page Not Found</h2>
      </section>
    </Container>
  );
};

export default NotFound;
