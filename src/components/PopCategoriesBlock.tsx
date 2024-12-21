import Container from "./Container";
import PopCategoriesItem from "./PopCategoriesItem";
import SectionCaption from "./SectionCaption";

export interface ICategory {
  name: string;
  url: string;
  imageSrc: string;
}

const goods: ICategory[] = [
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

const PopCategoriesBlock = () => {
  return (
    <Container className="mt-[80px]">
      <SectionCaption
        title="Популярные категории"
        actionCaption="Все категории"
      />
      <div className="flex gap-4 flex-wrap mt-4 justify-center lg:justify-start">
        {goods.map((item, index) => (
          <PopCategoriesItem item={item} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default PopCategoriesBlock;
