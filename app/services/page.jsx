import Container from "@/components/layout/Container";
import React from "react";

const page = () => {
  return (
    <Container>
      <section className="bg-background/60 min-h-[800px] backdrop-blur-lg w-full rounded-xl flex flex-col items-center mt-24 p-8">
        <h2 className="text-2xl font-bold text-primary px-4 mb-8">What we do at 255!</h2>
        <p className="text-center text-foreground max-w-prose mb-12">
          At 255, we help businesses grow by providing top-notch advertising solutions.
          Here's a glimpse of what we offer:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Service 1 */}
          <div className="bg-background shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="bg-primary rounded-full px-4 py-2 size-12 mb-4 text-2xl font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Brand Strategy</h3>
            <p className="text-center text-foreground">
              Develop a compelling brand identity that resonates with your audience.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-background shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="bg-primary rounded-full px-4 py-2 size-12 mb-4 text-2xl font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Social Media Marketing
            </h3>
            <p className="text-center text-foreground">
              Increase engagement and build a community with our tailored strategies.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-background shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="bg-primary rounded-full px-4 py-2 size-12 mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">SEO Optimization</h3>
            <p className="text-center text-foreground">
              Improve your search engine rankings and drive organic traffic.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-background shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="bg-primary rounded-full px-4 py-2 size-12 mb-4 text-2xl font-bold">
              4
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Content Marketing</h3>
            <p className="text-center text-foreground">
              Create valuable content that engages and converts your audience.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-background shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="bg-primary rounded-full px-4 py-2 size-12 mb-4 text-2xl font-bold">
              5
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Paid Advertising</h3>
            <p className="text-center text-foreground">
              Maximize ROI with data-driven ad campaigns across platforms.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-background shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="bg-primary rounded-full px-4 py-2 size-12 mb-4 text-2xl font-bold">
              6
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Analytics & Reporting
            </h3>
            <p className="text-center text-foreground">
              Gain insights with detailed reports and actionable recommendations.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default page;
