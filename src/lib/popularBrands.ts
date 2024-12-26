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

export default function popularBrands() {
    return brands;
}