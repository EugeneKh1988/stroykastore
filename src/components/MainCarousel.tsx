'use client'

import firstSlide from "../../public/slide_1.png";
import secondSlide from "../../public/slide_2.png";
import Button from "./Button";
import { useState } from "react";

const MainCarousel = () => {
    const slides = [firstSlide, secondSlide];
    const totalSlides = 2;
    const [currentSlide, setSlide] = useState(1);
    
    const viewSlide = (slideNum: number) => {
        return currentSlide == slideNum ? 'block' : 'hidden';
    };
  return (
    <>
      <div
        className={`mt-10 lg:max-w-[1360px] mx-auto bg-[url('../../public/slide_1.png')] bg-no-repeat ${viewSlide(1)}`}>
        <div className="pt-10 pl-4 md:pl-[100px] max-w-[570px]">
          <h2 className="text-vulcan text-[48px] font-bold leading-[57px]">
            Специальные предложения
          </h2>
          <p className="mt-[20px] text-mako text-[20px] font-normal">
            на строительные материалы и товары для ремонта
          </p>
          <Button
            text="Подробнее"
            className="bg-gorse text-vulcan text-[18px] font-medium rounded-none px-[24px] mt-[100px] mb-10"
          />
        </div>
      </div>
      <div className={`mt-10 lg:max-w-[1360px] mx-auto bg-[url('../../public/slide_2.png')] bg-no-repeat ${viewSlide(2)}`}>
        <div className="pt-10 pl-4 md:pl-[100px] max-w-[570px]">
          <h2 className="text-vulcan text-[48px] font-bold leading-[57px]">
            Распродажа инструментов
          </h2>
          <p className="mt-[20px] text-mako text-[20px] font-normal">
            «СтройкаСтор» стремится сделать условия покупки максимально
            выгодными для каждого покупателя, поэтому на сайте регулярно
            появляются товары со скидкой
          </p>
          <Button
            text="Подробнее"
            className="bg-gorse text-vulcan text-[18px] font-medium rounded-none px-[24px] mt-[100px] mb-10"
          />
        </div>
      </div>
    </>
  );
};

export default MainCarousel;
