import LinkButtonFill from "@/components/buttons/LinkButtonFill";
import Container from "@/components/layout/Container";
import React from "react";

const NotFound = () => {
  return (
    <section className="bg-foreground min-h-[calc(100vh-500px)] pt-80">
      <Container className={"flex flex-col gap-8"}>
        <h1 className="text-4xl font-bold text-primary">404 Page Not Found</h1>
        <LinkButtonFill href="/" className={"w-fit mr-auto bg-primary"}>Go Home</LinkButtonFill>
      </Container>
    </section>
  );
};

export default NotFound;
