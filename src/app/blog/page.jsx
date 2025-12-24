import LinkButtonFill from "@/components/buttons/LinkButtonFill";
import Container from "@/components/layout/Container";
import React from "react";

const BlogPage = () => {
  return (
    <section className="bg-foreground min-h-[calc(100vh-500px)] pt-80">
      <Container className={"flex flex-col gap-8"}>
        <h1 className="text-4xl font-bold text-primary">Blog Coming Soon...</h1>
        <LinkButtonFill href="/" className={"w-fit mr-auto bg-primary"}>
          Go Home
        </LinkButtonFill>
      </Container>
    </section>
  );
};

export default BlogPage;
