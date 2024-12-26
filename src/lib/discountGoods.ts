import { IGood } from "./popularGoods";

const goods: IGood[] = [
  {
    id: 1,
    name: "Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)",
    url: "#",
    imageSrc: "/ruberoid.png",
    currentPrice: 449,
    oldPrice: 499,
    discount: -25,
  },
  {
    id: 2,
    name: "Пена монтажная ТЕХНОНИКОЛЬ MASTER 65 профессиональная всесезонная",
    url: "#",
    imageSrc: "/foam.png",
    currentPrice: 495,
    oldPrice: 660,
    discount: -25,
  },
  {
    id: 3,
    name: 'Сетка "Рабица" яч. 50х50/1,5х10 м-ОЦ',
    url: "#",
    imageSrc: "/net.png",
    currentPrice: 1499,
    oldPrice: 1890,
    discount: -25,
  },
  {
    id: 4,
    name: "Металлочерепица, цвет коричневый, 1.18 х 1.15 м",
    url: "#",
    imageSrc: "/tiles.png",
    currentPrice: 769,
    oldPrice: 999,
    discount: -25,
  },
];

export default function discountGoods() {
    return goods;
}