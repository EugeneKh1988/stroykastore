import Container from "./Container";
import SectionCaption from "./SectionCaption";
import Image from "next/image";

export interface IBrand {
  id: number;
  url: string;
  imageSrc: string;
}

const brands: IBrand[] = [
  {
    id: 1,
    url: "#",
    imageSrc: "/bever.png",
  },
  {
    id: 2,
    url: "#",
    imageSrc: "/braer.png",
  },
  {
    id: 3,
    url: "#",
    imageSrc: "/stone.png",
  },
  {
    id: 4,
    url: "#",
    imageSrc: "/euroblock.png",
  },
  {
    id: 5,
    url: "#",
    imageSrc: "/perfecta.png",
  },
  {
    id: 6,
    url: "#",
    imageSrc: "/mstera.png",
  },
  {
    id: 7,
    url: "#",
    imageSrc: "/lsr.png",
  },
  {
    id: 8,
    url: "#",
    imageSrc: "/galen.png",
  },
  {
    id: 9,
    url: "#",
    imageSrc: "/recke.png",
  },
  {
    id: 10,
    url: "#",
    imageSrc: "/modformat.png",
  },
  {
    id: 11,
    url: "#",
    imageSrc: "/decra.png",
  },
  {
    id: 12,
    url: "#",
    imageSrc: "/engels.png",
  },
];

const PopularBrandsBlock = () => {
  return (
    <Container className="mt-[82px]">
      <SectionCaption title="Популярные бренды" actionCaption="Все бренды" />
      <div className="flex gap-4 flex-wrap mt-4 justify-center lg:justify-start">
        {brands.map((item, index) => (
          <a className="mx-auto max-w-[180px] border-[1px] border-mercury block" key={index} href={item.url}>
            <Image
              src={item.imageSrc}
              alt="Brand name"
              width={180}
              height={124}
              className="mx-auto"
              style={{ height: "auto" }}
            />
          </a>
        ))}
      </div>
    </Container>
  );
};

export default PopularBrandsBlock;
