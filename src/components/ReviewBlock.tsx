"use client";

import { useRef } from "react";
import Container from "./Container";
import Image from "next/image";
import nextIcon from "../../public/next.svg";
import prevIcon from "../../public/prev.svg";

export interface IReview {
  id: number;
  avatarSrc: string;
  username: string;
  text: string;
  dateStr: string;
}

const reviews: IReview[] = [
  {
    id: 1,
    avatarSrc: "/avatar_Petr.png",
    username: "Пётр",
    text: "Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽",
    dateStr: "21 марта 2022 г.",
  },
  {
    id: 2,
    avatarSrc: "/avatar_Anna.png",
    username: "Анна",
    text: "Живу в п.Володарский МО, очень были рады открытию магазина СтройкаСтор. Хорошие сотрудники, но особенно хочется отметить работу Алексея за его помощь в решении проблем, очень квалифицированные рекомендации по подбору строительных материалов для ремонта. Хороший ассортимент",
    dateStr: "18 марта 2022 г.",
  },
  {
    id: 3,
    avatarSrc: "/avatar_Anna.png",
    username: "Виктор",
    text: "Заказывал в данном магазине строй материалы. Привезли их вовремя и в прекрасном состоянии, претензий к доставке, персоналу и прочему меня нет. Строй материалы мне понравились, ремонт с ними я сделал отличный. Магазин мне безумно понравился, обязательно обращусь сюда снова, большое спасибо",
    dateStr: "6 ноября 2021 г.",
  },
  {
    id: 4,
    avatarSrc: "/avatar_dmitro.png",
    username: "Дмитрий",
    text: "Данный магазин целиком и полностью оправдал все мои ожидания. Тут мне удалось найти апсалютно все нужные мне материалы для отделочных работ и в нужном количестве. С доставкой тоже получилось всё удобно. привезли всё в заказанном количестве и в отличном состоянии.",
    dateStr: "5 ноября 2021 г.",
  },
];

const ReviewBlock = () => {
  const elementRef = useRef(null);

  const handleHorizantalScroll = (element:any, speed:number, distance:number, step:number) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <div className="bg-wild-sand mt-[80px]">
      <Container className="py-[84px]">
        <div className="flex justify-between">
          <h2 className="text-shark text-[34px] font-semibold leading-[44.2px]">
            Отзывы
          </h2>
          <div className="flex gap-3">
            <button
              className="w-[52px] h-[52px] bg-white border-iron border-[1px]"
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 50, 370, -40);
              }}
            >
              <Image src={prevIcon} alt="Previous" className="block mx-auto" />
            </button>
            <button
              className="w-[52px] h-[52px] bg-white border-iron border-[1px]"
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 90, 370, 40);
              }}
            >
              <Image src={nextIcon} alt="Next" className="block mx-auto" />
            </button>
          </div>
        </div>
        <div
          className="carousel max-w-full space-x-4 mt-4 snap-none"
          ref={elementRef}
        >
          {reviews.map((review) => (
            <div
              className="carousel-item"
              key={review.id}
              id={`slide${review.id}`}
            >
              <div className="p-6 bg-white">
                <div className="flex gap-3 justify-between">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={review.avatarSrc}
                      alt={review.username}
                      width={52}
                      height={52}
                      style={{ height: "auto" }}
                    />
                    <h6 className="text-shark text-[18px] font-bold">
                      {review.username}
                    </h6>
                  </div>
                  <Image
                    src="/apostrofe.png"
                    alt="Apostrofe"
                    width={32}
                    height={24}
                    style={{ height: "24px", width: "32px" }}
                  />
                </div>
                <p className="mt-3 w-[328px] text-shark text-[16px] font-normal leading-6">
                  {review.text}
                </p>
                <p className="mt-4 text-oslo-gray text-[15px] font-medium leading-[21.75px]">
                  {review.dateStr}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ReviewBlock;
