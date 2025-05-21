import fs from "fs";
import path from "path";
import Container from "@/components/layout/Container";
import Image from "next/image";
import { clientsData } from "@/data/data";

const ClientPortfolioPage = ({ params }) => {
  const { slug } = params;

  const clientData = clientsData.filter((item) => item.slug === slug)[0];

  const folderPath = path.join(process.cwd(), `public/portfolio/${slug}`);
  if (!fs.existsSync(folderPath)) {
    throw new Error(`Folder not found: ${folderPath}`);
  }
  const files = fs.readdirSync(folderPath);
  const images = files
    .filter((file) => /\.(png|jpe?g|svg)$/i.test(file))
    .map((file) => `/portfolio/${slug}/${file}`);

  return (
    <section className="flex flex-col gap-8 pt-32 bg-foreground text-primary whitespace-pre-line text-center">
      <Container className={"mb-32"}>
        {clientData && (
          <div className="flex flex-col gap-8 mb-8 p-8 text-xl">
            <h1 className="text-4xl font-bold">{clientData.title}</h1>
            <p>{clientData.description}</p>
            <p>{clientData.descriptionAr}</p>
          </div>
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-wrap justify-center">
          {images.map((image, index) => (
            <li key={index} className="mx-auto">
              <ClientImageCard img={image} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ClientPortfolioPage;

const ClientImageCard = ({ img }) => {
  return (
    <div className="duration-200 max-w-[400px]">
      <Image
        src={img}
        alt="client cover image"
        width={400}
        height={400}
        className="w-full h-[400px] object-cover drop-shadow-xl rounded-xl"
      />
    </div>
  );
};
