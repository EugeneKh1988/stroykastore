import Image from "next/image";
import Button from "./Button";
import { IGood } from "./PopularGoodsBlock";

const GoodItem = ({ item }: { item: IGood }) => {
  return (
    <div className="">
      <div className="border-[1px] border-mercury mx-auto overflow-hidden max-w-[278px]">
        <Image
          src={item.imageSrc}
          alt={item.name}
          width={276}
          height={208}
          style={{ height: "auto" }}
        />
      </div>
      <div className="p-4 border-[1px] border-mercury border-t-0 max-w-[278px]">
        <a
          className="block h-[72px] max-w-[246px] text-ellipsis text-shark text-[16px] font-medium leading-6"
          href={item.url}
        >
          {item.name}
        </a>
        <p className="mt-3">
          <span className="mr-2 font-bold text-vulcan text-[20px] leading-7">
            {item.currentPrice} ₽
          </span>
        </p>
        <Button
          text="В корзину"
          className="bg-gorse text-vulcan text-[18px] font-medium rounded-none mt-4 w-full hover:bg-shark hover:text-white active:text-iron"
        />
      </div>
    </div>
  );
};

export default GoodItem;
