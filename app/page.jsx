import FadeIn from "@/components/animations/FadeIn";
import FadeInBottom from "@/components/animations/FadeInBottom";
import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";
import LinkButtonFill from "@/components/buttons/LinkButtonFill";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <FadeIn>
        <section className="relative flex flex-col justify-center py-20 min-h-screen">
          <h1 className="text-9xl w-[850px] lg:scale-125 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-3/4 font-bold">
            <FadeInRight>C R E A T I V I T Y</FadeInRight>
          </h1>
          <div className="absolute w-[300px] top-1/2 left-[20%] transform -translate-y-3/4 z-20">
            <FadeInLeft>
              <h1 className="text-xl  font-bold">
                Interactive Digital Installations
              </h1>
              <p className="mt-8">
                Our team of forward-thinking designers, strategists, and
                innovators is dedicated to transforming ideas into exceptional
                experiences.
              </p>
              <div className="flex gap-2">
                <LinkButtonFill href="/services" className="mt-8">
                  Services!
                </LinkButtonFill>
                <LinkButtonFill href="/contact" className="mt-8 bg-white/20">
                  Contact!
                </LinkButtonFill>
              </div>
            </FadeInLeft>
          </div>
          <div className="absolute bottom-40 -z-10">
            <FadeIn>
              <Image
                src="/designs/logoPattern.png"
                alt="logo"
                width={2200}
                height={400}
                className="h-[400px] object-cover mx-auto"
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
                className="h-[900px] drop-shadow-xl object-contain mx-auto"
              />
            </FadeInBottom>
          </div>
        </section>
      </FadeIn>

      <FadeInBottom>
        <section>
          <iframe
            className="w-[70%] aspect-video mx-auto rounded-xl overflow-hidden drop-shadow-xl my-32"
            src="https://www.youtube.com/embed/45TdhcZU4Mw?si=VKNA-RG2yfRIo5jQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </section>
      </FadeInBottom>

      <section></section>
    </>
  );
}
