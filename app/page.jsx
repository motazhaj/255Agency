import FadeIn from "@/components/animations/FadeIn";
import FadeInBottom from "@/components/animations/FadeInBottom";
import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";
import LinkButtonFill from "@/components/buttons/LinkButtonFill";
import ContactUsSection from "@/components/ContactUsSection";
import Container from "@/components/layout/Container";
import FeaturedWorks from "@/components/services/FeaturedWorks";
import PortfolioSection from "@/components/services/PortfolioSection";
import ServicesSection from "@/components/services/ServicesSection";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <FadeIn>
        <section className="relative flex flex-col justify-center py-20 min-h-screen">
          <h1 className="text-5xl sm:text-7xl whitespace-nowrap md:text-8xl w-full ml-2 md:w-[850px] lg:scale-125 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-3/4 font-bold">
            <FadeInRight>C R E A T I V I T Y</FadeInRight>
          </h1>
          <div className="absolute w-[300px] top-1/2 left-4 md:left-[15%] transform -translate-y-1/2 z-30  mt-[300px] md:mt-0">
            <FadeInLeft>
              <h2 className="text-xl font-bold">
                Interactive Digital Installations
              </h2>
              <p className="mt-8 text-foreground/80">
                Our team of forward-thinking designers, strategists, and
                innovators is dedicated to transforming ideas into exceptional
                experiences.
              </p>
              <div className="flex gap-2">
                <LinkButtonFill href="/#services" className="mt-8">
                  Services
                  <FaArrowCircleRight size={24} className="ml-2" />
                </LinkButtonFill>
                <LinkButtonFill href="/contact" className="mt-8 bg-white/20">
                  Contact
                  <FaArrowCircleRight size={24} className="ml-2" />
                </LinkButtonFill>
              </div>
            </FadeInLeft>
          </div>
          <div className="absolute w-[300px] top-1/2 left-4 md:left-0 md:right-[10%] transform -translate-y-1/2 z-20">
            <FadeInRight>
              <div>
                <h3 className="text-6xl">90%</h3>
                <p className="text-xl text-foreground/80">
                  Customer Satisfaction
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-6xl">240+</h3>
                <p className="text-xl text-foreground/80">Industry Awards</p>
              </div>
            </FadeInRight>
          </div>
          <div className="absolute bottom-40 -z-10">
            <FadeIn>
              <Image
                src="/designs/LogoPattern.png"
                alt="logo"
                width={1900}
                height={400}
                className="h-[400px] w-full object-cover mx-auto"
              />
            </FadeIn>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <FadeInBottom>
              <Image
                src="/designs/camel.png"
                alt="logo"
                width={600}
                height={900}
                className="h-[90dvh] min-w-[300px] drop-shadow-xl object-contain mx-auto"
              />
            </FadeInBottom>
          </div>
          <div className="absolute w-[300px] top-1/4 left-[20%] transform -translate-y-1/2 z-20">
            <Image
              src="/designs/glasses.png"
              alt="logo"
              width={200}
              height={100}
              className="h-[40px] md:h-[100px] object-contain mx-auto  animate-bounce"
            />
          </div>
          <div className="absolute w-[300px] top-3/4 right-[20%] transform -translate-y-1/2 z-20 -rotate-12">
            <Image
              src="/designs/glasses.png"
              alt="logo"
              width={200}
              height={100}
              className="h-[40px] md:h-[100px] object-contain mx-auto  animate-bounce"
            />
          </div>
        </section>
      </FadeIn>

      <FadeInBottom>
        <section>
          <Container>
            <iframe
              className="w-full min-h-[500px] aspect-video mx-auto rounded-xl overflow-hidden drop-shadow-xl my-24"
              src="https://www.youtube.com/embed/45TdhcZU4Mw?si=VKNA-RG2yfRIo5jQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Container>
        </section>
      </FadeInBottom>

      <FadeIn>
        <section className="flex flex-col gap-4 justify-center items-center bg-foreground text-primary py-8">
          <Container>
            <h3 className="text-3xl font-bold text-center">255 Who?</h3>
            <p className="text-xl max-w-screen-md text-center mx-auto">
              We are a digital-focused Palestine-based studio. Our
              multidisciplinary team of freelancers and an A.. multiplies
              creative results and helps brands flourish.
            </p>
          </Container>
        </section>
      </FadeIn>

      <section className="relative min-h-screen scale-50 lg:scale-75 xl:scale-90 my-32">
        <div className="absolute left-1/2 -translate-x-1/2 z-50 size-[800px] bg-foreground rounded-full flex justify-center items-center px-40">
          <p className="text-[150px] leading-[150px] font-bold text-primary text-center">
            MAKE YOUR AD
          </p>
        </div>
        <FadeInRight>
          <div className="absolute left-1/2 -mt-[500px] lg:-mt-0 lg:-ml-[450px] -translate-x-1/2 size-[800px] rounded-full flex border-8 border-foreground items-center px-40">
            <p className="text-[150px] w-fit leading-[150px] font-bold text-foreground text-left mb-[150px]">
              WE
            </p>
          </div>
        </FadeInRight>
        <FadeInLeft>
          <div className="absolute left-1/2 mt-[500px] lg:mt-0 lg:ml-[450px] -translate-x-1/2 size-[800px] rounded-full flex lg:justify-end border-8 border-foreground items-center px-40">
            <p className="text-[150px] w-fit leading-[150px] font-bold text-foreground text-right pt-[200px] lg:pt-0 lg:mb-[150px] ">
              AN AD
            </p>
          </div>
        </FadeInLeft>
      </section>

      <PortfolioSection />

      <ServicesSection />

      <FadeIn>
        <section className="flex flex-col gap-4 justify-center items-center my-32">
          <Container>
            <h3 className="text-3xl font-bold text-center">
              Capture, Communicate, and Connect.
            </h3>
            <p className="text-xl text-foreground/80 text-center max-w-screen-md mx-auto">
              we create impactful graphics that convey your brand's message and
              resonate with your audience, from logos to marketing materials.
            </p>
          </Container>
        </section>
      </FadeIn>

      <FeaturedWorks />

      <section>
        <Container>
          <h2 className="text-5xl font-bold mb-8 mt-20">Our Clients</h2>
        </Container>
        <Image
          src="/designs/ourClients.png"
          alt="255 clients"
          width={1920}
          height={1080}
          className="w-full drop-shadow-xl"
        />

        <Image
          src="/designs/ourTeam.png"
          alt="255 Team"
          width={1920}
          height={1080}
          className="w-full drop-shadow-xl"
        />
      </section>

      <ContactUsSection />
    </>
  );
}
