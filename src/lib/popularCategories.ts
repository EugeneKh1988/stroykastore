

export interface ICategory {
  name: string;
  url: string;
  imageSrc?: string;
  subCategories?: ICategory[],
}

const categories: ICategory[] = [
  {
    name: "Душевые",
    url: "#",
    imageSrc: "/shower.png",
  },
  {
    name: "Пиломатериалы",
    url: "#",
    imageSrc: "/lumber.png",
  },
  {
    name: "Линолеум",
    url: "#",
    imageSrc: "/linoleum.png",
  },
  {
    name: "Обои",
    url: "#",
    imageSrc: "/wallpaper.png",
  },
  {
    name: "Инструменты",
    url: "#",
    imageSrc: "/tools.png",
  },
  {
    name: "Товары для дачи",
    url: "#",
    imageSrc: "/garden_goods.png",
  },
  {
    name: "Окна",
    url: "#",
    imageSrc: "/windows.png",
  },
  {
    name: "Двери",
    url: "#",
    imageSrc: "/doors.png",
  },
  {
    name: "Сантехника",
    url: "#",
    imageSrc: "/plumbing.png",
  },
  {
    name: "Краски",
    url: "#",
    imageSrc: "/paints.png",
  },
  {
    name: "Электротовары",
    url: "#",
    imageSrc: "/electrical_goods.png",
  },
  {
    name: "Интерьер",
    url: "#",
    imageSrc: "/interior.png",
  },
];

export default function popularCategories() {
    return categories;
}
