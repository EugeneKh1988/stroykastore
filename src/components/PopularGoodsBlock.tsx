import Container from "./Container";
import GoodItem from "./GoodItem";
import SectionCaption from "./SectionCaption";

export interface IGood {
  name: string;
  url: string;
  imageSrc: string;
  currentPrice: number;
}

const goods: IGood[] = [
  {
    name: "Керамогранит Yasmin 598х185 коричневый C-YA4M112D",
    url: "#",
    imageSrc: "/porcelain_stoneware.png",
    currentPrice: 899,
  },
  {
    name: "Затирка для узких швов Ceresit СЕ 33, цвет белый, 2 кг",
    url: "#",
    imageSrc: "/ceresit.png",
    currentPrice: 275,
  },
  {
    name: "Грунтовка Старатели 10л глубокого проникновения",
    url: "#",
    imageSrc: "/primer.png",
    currentPrice: 839,
  },
  {
    name: "Гипсокартон Волма, 2500 х 1200 х 12,5 мм",
    url: "#",
    imageSrc: "/plasterboard.png",
    currentPrice: 335,
  },
  {
    name: "Профиль 0,55мм для гипсокартона",
    url: "#",
    imageSrc: "/profil.png",
    currentPrice: 195,
  },
  {
    name: "Рулетка 3м",
    url: "#",
    imageSrc: "/ruler.png",
    currentPrice: 100,
  },
  {
    name: "Кнауф Мп 75 штукатурка гипсовая МН 30кг",
    url: "#",
    imageSrc: "/knauf.png",
    currentPrice: 380,
  },
  {
    name: "Уголок серый канализационный Д110 ГР90",
    url: "#",
    imageSrc: "/angle.png",
    currentPrice: 335,
  },
  {
    name: "Knauf Ротбанд, 30 кг",
    url: "#",
    imageSrc: "/rotband.png",
    currentPrice: 508,
  },
  {
    name: "Саморез по металлу 3,5х25 мм для гипсокартона",
    url: "#",
    imageSrc: "/screw.png",
    currentPrice: 340,
  },
  {
    name: "Шпатлевка универсальная Danogips SuperFinish 17 л",
    url: "#",
    imageSrc: "/putty.png",
    currentPrice: 2555,
  },
  {
    name: "Клейкая лента металлизированная Изоспан FL 5х5000 см",
    url: "#",
    imageSrc: "/tape.png",
    currentPrice: 226,
  },
];

const PopularGoodsBlock = () => {
  return (
    <Container className="mt-[80px]">
      <SectionCaption title="Популярные товары" noAction />
      <div className="flex gap-4 flex-wrap mt-4 justify-center lg:justify-start">
        {goods.map((item, index) => (
          <GoodItem item={item} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default PopularGoodsBlock;
