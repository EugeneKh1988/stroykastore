'use client'

import firstSlide from "../../public/slide_1.png";
import secondSlide from "../../public/slide_2.png";
import nextIcon from "../../public/next.svg";
import prevIcon from "../../public/prev.svg";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";
import SvgIcon from "./SvgIcon";

const MainCarousel = () => {
    const slides = [firstSlide, secondSlide];
    const totalSlides = 2;
    const [currentSlide, setSlide] = useState(1);
    
    const viewSlide = (slideNum: number) => {
        return currentSlide == slideNum ? 'block' : 'hidden';
    };

    const next = (numSlide: number) => {
      if(numSlide >= totalSlides) {
        setSlide(1);
      }
      else {
        setSlide(numSlide + 1);
      }
    };

    const prev = (numSlide: number) => {
      if (numSlide <= 1) {
        setSlide(totalSlides);
      } else {
        setSlide(numSlide - 1);
      }
    };
  return (
    <>
      <div
        className={`mt-10 lg:max-w-[1360px] mx-auto bg-[url('../../public/slide_1.png')] bg-no-repeat ${viewSlide(
          1
        )}`}
      >
        <div className="pt-10 pl-4 md:pl-[100px] max-w-[570px]">
          <h2 className="text-vulcan text-[48px] font-bold leading-[57px]">
            Специальные предложения
          </h2>
          <p className="mt-[20px] text-mako text-[20px] font-normal">
            на строительные материалы и товары для ремонта
          </p>
        </div>
        <div className="flex justify-between mt-[100px] pb-10 md:pl-[100px]">
          <Button
            text="Подробнее"
            className="bg-gorse text-vulcan text-[18px] font-medium rounded-none px-[24px] hover:bg-shark hover:border-shark hover:text-white active:text-iron"
          />
          <div className="flex gap-3 mr-4">
            <button
              className="w-[52px] h-[52px] bg-white border-iron border-[1px] hover:bg-shark hover:border-shark hover:text-white active:text-iron"
              onClick={() => prev(1)}
            >
              <SvgIcon
                iconName="prev_arrow"
                className="block mx-auto text-center"
              />
            </button>
            <button
              className="w-[52px] h-[52px] bg-white border-iron border-[1px] hover:bg-shark hover:text-white active:text-iron"
              onClick={() => next(1)}
            >
              <SvgIcon
                iconName="next_arrow"
                className="block mx-auto text-center"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`mt-10 lg:max-w-[1360px] mx-auto bg-[url('../../public/slide_2.png')] bg-no-repeat ${viewSlide(
          2
        )}`}
      >
        <div className="pt-10 pl-4 md:pl-[100px] max-w-[570px]">
          <h2 className="text-vulcan text-[48px] font-bold leading-[57px]">
            Распродажа инструментов
          </h2>
          <p className="mt-[20px] text-mako text-[20px] font-normal">
            «СтройкаСтор» стремится сделать условия покупки максимально
            выгодными для каждого покупателя, поэтому на сайте регулярно
            появляются товары со скидкой
          </p>
        </div>
        <div className="flex justify-between mt-[50px] pb-6 md:pl-[100px]">
          <Button
            text="Подробнее"
            className="bg-gorse text-vulcan text-[18px] font-medium rounded-none px-[24px] hover:bg-shark hover:text-white active:text-iron"
          />
          <div className="flex gap-3 mr-4">
            <button
              className="w-[52px] h-[52px] bg-white border-iron border-[1px] hover:bg-shark hover:border-shark hover:text-white active:text-iron"
              onClick={() => prev(2)}
            >
              <SvgIcon
                iconName="prev_arrow"
                className="block mx-auto text-center"
              />
            </button>
            <button
              className="w-[52px] h-[52px] bg-white border-iron border-[1px] hover:bg-shark hover:border-shark hover:text-white active:text-iron"
              onClick={() => next(2)}
            >
              <SvgIcon
                iconName="next_arrow"
                className="block mx-auto text-center"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCarousel;
